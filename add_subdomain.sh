#!/bin/bash

# Configuration
DOMAIN_ROOT="thebigtimeuniverse.com"

# Check arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <subdomain_prefix> <project_name>"
    echo "Example: $0 snurr snurr-backend"
    exit 1
fi

SUBDOMAIN="$1"
PROJECT_NAME="$2"
FULL_DOMAIN="$SUBDOMAIN.$DOMAIN_ROOT"
PROJECT_DIR="/var/www/python/$PROJECT_NAME"
SOCKET_FILE="/run/$PROJECT_NAME.sock"

echo "------------------------------------------------"
echo "Adding Subdomain Project: $FULL_DOMAIN"
echo "Project Name: $PROJECT_NAME"
echo "------------------------------------------------"

# 1. Create Directories (The "Home")
echo "[1/4] Creating Project Directories..."
sudo mkdir -p $PROJECT_DIR
sudo chown -R $USER:www-data $PROJECT_DIR
sudo chmod -R 775 $PROJECT_DIR
echo "Created $PROJECT_DIR"
echo "TODO: Upload your Django code here!"

# 2. Create Systemd Service (The "Worker")
echo "[2/4] Creating Systemd Service..."
SERVICE_FILE="/etc/systemd/system/$PROJECT_NAME.service"

cat <<EOF | sudo tee $SERVICE_FILE
[Unit]
Description=Gunicorn daemon for $PROJECT_NAME
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=$PROJECT_DIR
Environment="PATH=$PROJECT_DIR/.venv/bin"
# Ensure we map to the UNIQUE socket for this project
ExecStart=$PROJECT_DIR/.venv/bin/gunicorn --access-logfile - --workers 3 --bind unix:$SOCKET_FILE core.wsgi:application

[Install]
WantedBy=multi-user.target
EOF

echo "Created Service: $SERVICE_FILE"
echo "NOTE: Service will fail to start until you upload code and create .venv!"

# 3. Create Nginx Config (The "Signpost")
echo "[3/4] Creating Nginx Configuration..."
NGINX_FILE="/etc/nginx/sites-available/$PROJECT_NAME"

cat <<EOF | sudo tee $NGINX_FILE
server {
    listen 80;
    server_name $FULL_DOMAIN;

    location = /favicon.ico { access_log off; log_not_found off; }

    location /static/ {
        alias $PROJECT_DIR/staticfiles/;
    }

    location /media/ {
        alias $PROJECT_DIR/media/;
    }

    location / {
        include proxy_params;
        # Proxy to the UNIQUE socket we defined in the service
        proxy_pass http://unix:$SOCKET_FILE;
    }
}
EOF

# Enable Site
sudo ln -sf $NGINX_FILE /etc/nginx/sites-enabled/
echo "Created Nginx Config: $NGINX_FILE"

# 4. Instructions
echo "------------------------------------------------"
echo "SETUP COMPLETE (Pending Code)"
echo "------------------------------------------------"
echo "To finish deployment, you must:"
echo "1. Upload your code to: $PROJECT_DIR"
echo "2. Create venv: cd $PROJECT_DIR && python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && pip install gunicorn"
echo "3. Start the service: sudo systemctl start $PROJECT_NAME && sudo systemctl enable $PROJECT_NAME"
echo "4. Restart Nginx: sudo systemctl restart nginx"
echo "5. Get SSL: sudo certbot --nginx -d $FULL_DOMAIN"
echo "------------------------------------------------"
