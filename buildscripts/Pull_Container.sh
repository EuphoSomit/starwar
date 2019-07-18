#!/usr/bin/env bash
$(aws ecr get-login --no-include-email --region us-east-1) 
docker pull 940998307548.dkr.ecr.us-east-1.amazonaws.com/centivo-csr-fe:latest
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi -f $(docker images -a -q)
docker run -d -p 80:80 940998307548.dkr.ecr.us-east-1.amazonaws.com/centivo-csr-fe:latest