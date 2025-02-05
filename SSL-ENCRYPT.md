# Install Certbot
```bash
sudo /opt/certbot/bin/pip install certbot certbot-nginx
```

## Create a symbolic link for Certbot  
This allows you to run the `certbot` command directly.

```bash
sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
```

## Obtain an SSL certificate using Certbot with Nginx  
Replace `<your-domain>` and `<your-additional-domain>` with your actual domain names.

```bash
sudo certbot --nginx -d <your-domain> -d <your-additional-domain>
```

**Example:**
```bash
sudo certbot --nginx -d wwpts.com -d www.wwpts.com
```

## Setup automatic renewal and test it  
Add the following cron job to automate certificate renewal.

```bash
echo "0 0,12 * * * root /opt/certbot/bin/python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
```

### Perform a dry run to test renewal  
```bash
sudo certbot renew --dry-run
```

---

## Update Nginx Configuration  

Edit `/etc/nginx/nginx.conf` and add the following lines below the line:  
```nginx
include /etc/nginx/default.d/*.conf;
```

Make sure to replace `<domain>.com` with your actual domain/subdomain.

```nginx
listen 443 ssl;

# RSA certificate
ssl_certificate /etc/letsencrypt/live/<domain>.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/<domain>.com/privkey.pem;

include /etc/letsencrypt/options-ssl-nginx.conf;

# Redirect non-HTTPS traffic to HTTPS
if ($scheme != "https") {
    return 301 https://$host$request_uri;
}
```

## Restart Nginx to apply changes  
```bash
sudo service nginx restart
