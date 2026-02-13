#!/bin/bash

echo "========================================"
echo "      DIAGNOSTIC TOOL FOR 502 ERROR     "
echo "========================================"

echo "1. Checking Backend Service Status..."
sudo systemctl status btu-backend --no-pager

echo ""
echo "2. Checking for Socket File..."
if [ -S "/run/btu-backend.sock" ]; then
    echo "SUCCESS: Socket file exists at /run/btu-backend.sock"
else
    echo "FAILURE: Socket file is MISSING. Gunicorn is not running."
fi

echo ""
echo "3. LAST 50 LOG LINES (Look for Python Errors below):"
echo "----------------------------------------------------"
sudo journalctl -u btu-backend -n 50 --no-pager
echo "----------------------------------------------------"

echo ""
echo "4. Checking Nginx Error Logs:"
sudo tail -n 20 /var/log/nginx/error.log
