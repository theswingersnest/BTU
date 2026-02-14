#!/bin/bash

# Configuration Variables
PROJECT_DIR="/var/www/python/btu-backend"
REPO_URL="https://github.com/theswingersnest/BTU.git"
REPO_DIR="/var/www/git-repo/BTU"
ENV_FILE="$PROJECT_DIR/.env"
DB_NAME="btu_db"
DB_USER="btu_user"
DB_PASS="GnewP@ss4131#2026!"
SERVER_IP="143.110.206.7"
DomainName="thebigtimeuniverse.com"

echo "------------------------------------------------"
echo "Starting BTU Backend Deployment on $SERVER_IP"
echo "Project Path: $PROJECT_DIR"
echo "------------------------------------------------"

# 1. Update and Install System Dependencies
echo "[1/8] Installing System Dependencies..."
sudo apt update
sudo apt install -y python3-pip python3-venv nginx postgresql postgresql-contrib libpq-dev git curl certbot python3-certbot-nginx ufw fail2ban pkg-config default-libmysqlclient-dev build-essential nodejs npm
# Install PM2 globally
sudo npm install -g pm2

# 1.1 Security Setup (UFW & Fail2Ban)
echo "[1.1/8] Configuring Firewall & Security..."

# UFW Setup
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
echo "y" | sudo ufw enable

# Fail2Ban Setup
sudo systemctl start fail2ban
sudo systemctl enable fail2ban

# 2. Database Setup (PostgreSQL)
# NOTE: Skipped because the project is currently using SQLite (as per settings.py).
# Uncomment the block below if you switch back to PostgreSQL.
echo "[2/8] Setting up PostgreSQL... (SKIPPED - SQLite in use)"
# sudo -u postgres psql -c "CREATE DATABASE $DB_NAME;"
# sudo -u postgres psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';"
# sudo -u postgres psql -c "ALTER ROLE $DB_USER SET client_encoding TO 'utf8';"
# sudo -u postgres psql -c "ALTER ROLE $DB_USER SET default_transaction_isolation TO 'read committed';"
# sudo -u postgres psql -c "ALTER ROLE $DB_USER SET timezone TO 'UTC';"
# sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
# sudo -u postgres psql -d $DB_NAME -c "GRANT ALL ON SCHEMA public TO $DB_USER;"

# 2.0.1 Disable Apache (Prevent Port 80 conflict)
echo "[2.0.1/8] Disabling Apache to prevent conflict with Nginx..."
sudo systemctl stop apache2
sudo systemctl disable apache2

# 2.1 Install pgAdmin4 - SKIPPED (Removed as per request)

# 2.2 Server Organization (Python & NextJS folders)
echo "[2.2/8] Creating organizational directories in /var/www/..."
sudo mkdir -p /var/www/python
sudo mkdir -p /var/www/nextjs
# Set permissions so the current user can upload files here
sudo chown -R $USER:www-data /var/www/python
sudo chown -R $USER:www-data /var/www/nextjs
sudo chmod -R 775 /var/www/python
sudo chmod -R 775 /var/www/nextjs

# 3. Project Directory Setup (Git & Symlinks)
echo "[3/8] Setting up Git Repository..."

# 3.1 Clone or Pull Repo
# We use a separate 'git-repo' folder to keep the raw source clean
sudo mkdir -p /var/www/git-repo
sudo chown -R $USER:www-data /var/www/git-repo
sudo chmod -R 775 /var/www/git-repo

if [ -d "$REPO_DIR" ]; then
    echo "Updating existing repository in $REPO_DIR..."
    cd "$REPO_DIR"
    # Force sync with GitHub (Discards local VPS changes to ensure exact match)
    echo "Fetching latest changes from GitHub..."
    git fetch origin
    git reset --hard origin/main
else
    echo "Cloning repository to $REPO_DIR..."
    git clone "$REPO_URL" "$REPO_DIR"
fi

# 3.2 Organize Backend (Python)
echo "Linking Backend to /var/www/python/btu-backend..."
# Logic: If it exists and is NOT a symlink, back it up. Then force link.
if [ -d "/var/www/python/btu-backend" ] && [ ! -L "/var/www/python/btu-backend" ]; then
    echo "WARNING: Found existing directory at target. Backing up..."
    mv /var/www/python/btu-backend "/var/www/python/btu-backend_backup_$(date +%s)"
fi
ln -sfn "$REPO_DIR/backend" /var/www/python/btu-backend

# 3.3 Organize Frontend (NextJS)
echo "Linking Frontend to /var/www/nextjs/btu-frontend..."
if [ -d "/var/www/nextjs/btu-frontend" ] && [ ! -L "/var/www/nextjs/btu-frontend" ]; then
    echo "WARNING: Found existing directory at target. Backing up..."
    mv /var/www/nextjs/btu-frontend "/var/www/nextjs/btu-frontend_backup_$(date +%s)"
fi
ln -sfn "$REPO_DIR/frontend" /var/www/nextjs/btu-frontend

# 3.4 Set Permissions
sudo chown -R $USER:www-data "$REPO_DIR"
sudo chmod -R 775 "$REPO_DIR"

# 3.5 Frontend Setup (Next.js)
echo "[3.5/8] Setting up Next.js Frontend..."
FRONTEND_DIR="/var/www/nextjs/btu-frontend"
cd $FRONTEND_DIR

# Install and Build
echo "Installing Frontend Dependencies..."
npm install

echo "Building Frontend..."
npm run build

echo "Starting Frontend with PM2..."
# Delete existing process if any to ensure fresh start
pm2 delete btu-frontend || true
pm2 start npm --name "btu-frontend" -- start -- --port 3000
pm2 save
pm2 startup

# Navigate to Backend for subsequent steps
cd $PROJECT_DIR

# 4. Virtual Environment & Requirements
echo "[4/8] Setting up Virtual Environment..."
# CRITICAL: Delete existing .venv if it was uploaded from Windows via FTP
if [ -d ".venv" ]; then
    echo "Found existing .venv. Deleting to prevent Windows/Linux conflicts..."
    rm -rf .venv
fi

python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn setproctitle

# 5. Environment Variables
echo "[5/8] Creating .env file..."
# Generate a truly random secret key
SECRET_KEY=$(openssl rand -base64 50 | tr -d '\n')

cat <<EOF > .env
SECRET_KEY='${SECRET_KEY}'
DEBUG=False
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASS
DB_HOST=localhost
DB_PORT=5432
ALLOWED_HOSTS=$DomainName,$SERVER_IP,localhost,127.0.0.1
EOF

# 6. Django Initialization
# 6. Django Initialization
echo "[6/8] Initializing Django..."

# Robust fix for ALLOWED_HOSTS - ensures Django accepts the server IP
# ALLOWED_HOSTS is now handled via environment variables in settings.py

# Prompt for Migrations
echo ""
echo "----------------------------------------------------------------"
echo "BACKEND SETUP: MIGRATIONS & SUPERUSER"
echo "Since you are using SQLite (or want to update DB), we can run migrations now."
echo "If you want to SKIP touching the database (e.g. 'no update and amendments'), say NO."
# Force Migrations and Superuser Creation (Required to fix 'no such table' errors)
echo "Running CollectStatic and Migrations..."
python manage.py collectstatic --noinput
python manage.py makemigrations --noinput
python manage.py migrate --noinput

# Auto-Create Superuser if meaningful
echo "Checking/Creating Superuser..."
cat <<EOF | python manage.py shell
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(is_superuser=True).exists():
    print("Creating default superuser 'admin'...")
    # Use environment variables or default fallback
    try:
    User.objects.create_superuser('admin', 'admin@example.com', '$DB_PASS')
        print("Superuser 'admin' created.")
    except Exception as e:
        print(f"Error creating superuser: {e}")
else:
    print("Superuser already exists.")
EOF

# 7. Gunicorn Setup (Systemd)
echo "[7/8] Configuring Gunicorn..."

# Path verification
GUNICORN_PATH="$PROJECT_DIR/.venv/bin/gunicorn"
if [ ! -f "$GUNICORN_PATH" ]; then
    echo "ERROR: Gunicorn not found at $GUNICORN_PATH. Reinstalling..."
    source $PROJECT_DIR/.venv/bin/activate
    pip install gunicorn
fi

# 7. Gunicorn Setup (Systemd)


cat <<'EOF' > /tmp/btu-backend.service
[Unit]
Description=gunicorn daemon for BTU Backend
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=__PROJECT_DIR__
RuntimeDirectory=gunicorn
EnvironmentFile=__PROJECT_DIR__/.env
Environment="PATH=__PROJECT_DIR__/.venv/bin"
ExecStart=__PROJECT_DIR__/.venv/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/btu-backend.sock \
          core.wsgi:application

[Install]
WantedBy=multi-user.target
EOF

sed -i "s|__PROJECT_DIR__|$PROJECT_DIR|g" /tmp/btu-backend.service
sudo mv /tmp/btu-backend.service /etc/systemd/system/btu-backend.service

sudo systemctl daemon-reload
sudo systemctl stop btu-backend.service || true
sudo systemctl start btu-backend.service
sudo systemctl enable btu-backend.service

# 8. Nginx Setup
echo "[8/8] Configuring Nginx..."
cat <<'EOF' > /tmp/btu-backend.nginx
server {
    listen 80;
    listen [::]:80;
    server_name __DOMAIN_NAME__;

    # 1. Django Backend API
    location ^~ /api {
        include proxy_params;
        proxy_pass http://unix:/run/btu-backend.sock;
    }

    # 2. Django Admin
    location ^~ /admin {
        include proxy_params;
        proxy_pass http://unix:/run/btu-backend.sock;
    }

    # 3. Django Static/Media
    location /static/ {
        alias __PROJECT_DIR__/staticfiles/;
    }

    location /media/ {
        alias __PROJECT_DIR__/media/;
    }

    # 4. Next.js
    location / {
        proxy_pass http://localhost:3000;
        include proxy_params;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

sed -i "s|__DOMAIN_NAME__|$DomainName|g" /tmp/btu-backend.nginx
sed -i "s|__PROJECT_DIR__|$PROJECT_DIR|g" /tmp/btu-backend.nginx
sudo mv /tmp/btu-backend.nginx /etc/nginx/sites-available/btu-backend

# Deactivate all other Port 80 configs to prevent hijacking
echo "Activating Nginx configuration and cleaning conflicts..."
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/btu-backend /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# 9. SSL Configuration
echo "[9/9] Configuring SSL with Certbot..."
sudo certbot --nginx -d $DomainName --non-interactive --agree-tos --register-unsafely-without-email --redirect

echo "------------------------------------------------"
echo "Deployment Finished!"
if [ -S "/run/btu-backend.sock" ]; then
    echo "STATUS: Backend is ONLINE (Socket active)"
else
    echo "STATUS: Backend is OFFLINE (Socket missing - check logs: journalctl -u btu-backend)"
fi
echo "Next Steps:"
echo "1. Verify Frontend:   https://$DomainName"
echo "2. Verify Backend:    https://$DomainName/api/"
echo "3. Admin Panel:       https://$DomainName/admin/"
echo "   (Default Login: admin / admin123)"
echo ""
echo "Deployment Log: Use 'journalctl -u btu-backend -f' to monitor backend logs."
echo "------------------------------------------------"
