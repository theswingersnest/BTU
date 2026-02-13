# How to Deploy a Subdomain Project (e.g., snurr.thebigtimeuniverse.com)

Since your VPS has a single IP address (`104.236.228.27`), Nginx acts as a "Traffic Controller." It looks at the **domain name** (Host header) of the incoming request to decide which project to show.

## The Architecture
1.  **DNS**: `thebigtimeuniverse.com` and `snurr.thebigtimeuniverse.com` both point to `104.236.228.27`.
2.  **Nginx**: Listens on Port 80/443.
    *   If request checks for `thebigtimeuniverse.com` -> Routes to **BTU Backend** (Socket A).
    *   If request checks for `snurr.thebigtimeuniverse.com` -> Routes to **Snurr Backend** (Socket B).
3.  **Backends**: Each project runs its own Gunicorn process on a separate internal socket file. They do not conflict.

---

## Step-by-Step Guide for New Subdomain

### 1. DNS Configuration
Go to your domain provider (Namecheap, GoDaddy, etc.) and add a new Record:
*   **Type**: `A Record`
*   **Host**: `snurr` (or whatever subdomain you want)
*   **Value**: `104.236.228.27`

### 2. Create Project Directories
Use the organizational structure we set up:
```bash
# Create directories
sudo mkdir -p /var/www/python/snurr
sudo chown -R $USER:www-data /var/www/python/snurr
sudo chmod -R 775 /var/www/python/snurr

# Clone your new repo
git clone https://github.com/your-repo/snurr-project.git /var/www/python/snurr
```

### 3. Setup Virtual Environment
Same as before, but inside the new folder:
```bash
cd /var/www/python/snurr
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pip install gunicorn
```

### 4. Create a Unique Gunicorn Service
You **MUST** use a different socket name (e.g., `snurr.sock`).

Create file: `/etc/systemd/system/snurr.service`
```ini
[Unit]
Description=Gunicorn for Snurr
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=/var/www/python/snurr
# IMPORTANT: Distinct socket name 'snurr.sock'
ExecStart=/var/www/python/snurr/.venv/bin/gunicorn --workers 3 --bind unix:/run/snurr.sock core.wsgi:application

[Install]
WantedBy=multi-user.target
```
*Run:* `sudo systemctl start snurr && sudo systemctl enable snurr`

### 5. Create Nginx Configuration
Create file: `/etc/nginx/sites-available/snurr`

```nginx
server {
    listen 80;
    server_name snurr.thebigtimeuniverse.com;

    location / {
        include proxy_params;
        # Connect to the UNIQUELY NAMED socket from Step 4
        proxy_pass http://unix:/run/snurr.sock;
    }

    location /static/ {
        alias /var/www/python/snurr/staticfiles/;
    }
}
```

### 6. Enable and Secure
```bash
# Link the config
sudo ln -s /etc/nginx/sites-available/snurr /etc/nginx/sites-enabled/

# Test and Restart Nginx
sudo nginx -t
sudo systemctl restart nginx

# Get SSL Certificate
sudo certbot --nginx -d snurr.thebigtimeuniverse.com
```

**Result**:
*   `thebigtimeuniverse.com` -> Loads BTU Project
*   `snurr.thebigtimeuniverse.com` -> Loads Snurr Project
