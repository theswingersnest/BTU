
# Deployment Guide (VPS IP: 159.203.114.171)

This guide outlines the steps to deploy the **BTU** project alongside your existing `snurr-revamp` project on the same VPS.

Since you do not have a domain and the main IP is already serving another site, we will host this application on specific ports:
- **Frontend**: Port `3001` (Direct access: `http://159.203.114.171:3001`)
- **Backend**: Port `8000` (Direct access: `http://159.203.114.171:8000`)

## 1. Prepare the Server

Connect to your VPS:
```bash
ssh user@159.203.114.171
```

Navigate to the web directory and clone your repository (assuming you want it next to your existing project):
```bash
cd /var/www
git clone https://github.com/theswingersnest/BTU.git btu
cd btu
```

## 2. Backend Deployment (Django)

We will use **Gunicorn** to run the Django server and **Systemd** to keep it running.

### A. Setup Environment
```bash
cd /var/www/btu/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install gunicorn
```

### B. Configure Variables (`.env`)
Create the `.env` file:
```bash
nano .env
```
Paste your configuration (ensure `DEBUG=False` for production):
```env
DEBUG=False
SECRET_KEY=your_production_secret_key
ALLOWED_HOSTS=159.203.114.171,localhost,127.0.0.1
DB_NAME=btu_db
DB_USER=root
DB_PASSWORD=your_db_password
DB_HOST=localhost
```

### C. Database & Static Files
```bash
python manage.py migrate
python manage.py collectstatic --no-input
```

### D. Create Systemd Service
Create a service file to manage the Gunicorn process:
```bash
sudo nano /etc/systemd/system/btu-backend.service
```

Add the following content (adjust paths/users if necessary):
```ini
[Unit]
Description=Gunicorn daemon for BTU Backend
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=/var/www/btu/backend
ExecStart=/var/www/btu/backend/venv/bin/gunicorn --access-logfile - --workers 3 --bind 0.0.0.0:8000 core.wsgi:application

[Install]
WantedBy=multi-user.target
```

### E. Start Backend
```bash
sudo systemctl start btu-backend
sudo systemctl enable btu-backend
sudo systemctl status btu-backend
```
*Your backend should now be accessible at `http://159.203.114.171:8000`*

---

## 3. Frontend Deployment (Next.js)

We will use **PM2** to run the Next.js server on port 3001.

### A. Setup Environment
```bash
cd /var/www/btu/frontend
```

### B. Configure Environment (`.env.production`)
Create a production env file to point to your backend:
```bash
nano .env.production
```
Add:
```env
NEXT_PUBLIC_API_URL=http://159.203.114.171:8000
```

### C. Install & Build
```bash
npm install
npm run build
```

### D. Start with PM2
If you don't have PM2 installed globally:
```bash
sudo npm install -g pm2
```

Start the application:
```bash
pm2 start npm --name "btu-frontend" -- start -- -p 3001
```

Save the PM2 list so it restarts on reboot:
```bash
pm2 save
pm2 startup
```

## 4. Firewall Configuration (UFW)

Since we are accessing these ports directly, we need to ensure the firewall allows traffic on ports 3001 and 8000.

```bash
sudo ufw allow 3001/tcp
sudo ufw allow 8000/tcp
sudo ufw reload
```

## 5. (Optional) Nginx Reverse Proxy
If you prefer not to open ports 3001/8000 directly and instead want to map them to a different path or port managed by Nginx, you can add a generic config. However, accessing via ports is the simplest method without a domain.

## Summary of URLs
- **Frontend App**: [http://159.203.114.171:3001](http://159.203.114.171:3001)
- **Backend API**: [http://159.203.114.171:8000](http://159.203.114.171:8000)
