This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Server Deploy Digital Ocean

#(if you cloned the repo from somewhere else, make sure to npm install first
npm install)

#Build it
npm run build

#Create NGINX config file and edit it
cd /etc/nginx/sites-available
touch name_of_app
nano name_of_app

[SEE OTHER GIST FOR CONFIG FILE CONTENTS] 
#https://gist.github.com/oelbaga/5019647715e68815c602ff05cff2416e#file-ubuntu-nextjs-nginx-config-file

#Option1 Syslink the file in sites-enabled
sudo ln -s /etc/nginx/sites-available/name_of_app /etc/nginx/sites-enabled/name_of_app

#Option 2 No need to use sites-enabled
nano /etc/nginx/nginx.conf  
change  include /etc/nginx/sites-enabled/*; to  include /etc/nginx/sites-available/*;

#make Sure NGINX file is good
nginx -t

#remove the default config files
cd /etc/nginx/sites-available
rm default
cd /etc/nginx/sites-enabled
rm default

#restart NGINX to reload config files
systemctl restart nginx

#Go to site directory and launch it with pm2
cd /var/www/name_of_app

#launch app with pm2
pm2 start npm --name name_of_app -- start

#Create SSL with letsencryot
sudo certbot --nginx -d domainname.com
