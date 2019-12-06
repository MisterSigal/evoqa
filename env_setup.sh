#!/bin/bash

# apps installation
apt-get update
apt-get install npm -y
apt-get install nodejs -y
apt-get install openjdk-8-jdk-headless -y

#docker-compose installation
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod a+rx /usr/local/bin/docker-compose  

#Machine tweaks
sudo sysctl -w vm.max_map_count=262145