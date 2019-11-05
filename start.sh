#!/bin/bash

#apps installation
apt-get update
apt-get install npm -y
apt-get install nodejs -y
apt-get install openjdk-8-jdk-headless

#Machine tweaks
sudo sysctl -w vm.max_map_count=262145

#docker containers
  #selenoid
curl -s https://aerokube.com/cm/bash | bash
./cm selenoid start --vnc | bash
./cm selenoid-ui start
echo "Selenoid is ready!"

  #elk
docker run -p 5601:5601 -p 9200:9200 -p 5044:5044 -it --name elk sebp/elk
echo "ELK is ready!"

#selenium
npm install
echo "Selenium is built"

echo "EVOQA is ready to work!"
