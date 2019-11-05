#!/bin/bash

apt-get update
apt-get install npm -y
apt-get install nodejs -y
curl -s https://aerokube.com/cm/bash | bash
./cm selenoid start --vnc | bash
./cm selenoid-ui start
echo "Selenoid is ready!"
docker run -p 5601:5601 -p 9200:9200 -p 5044:5044 -it --name elk sebp/elk
echo "ELK is ready!"
npm install
echo "Selenium is built"
echo "EVOQA is ready to work!"
