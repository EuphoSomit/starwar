FROM 940998307548.dkr.ecr.us-east-1.amazonaws.com/centivo-csr-fe:latest
COPY build/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf