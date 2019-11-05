#!/bin/bash

apt-get update
apt-get install npm -y
apt-get install nodejs -y
curl -s https://aerokube.com/cm/bash | bash
./cm selenoid start --vnc | bash
./cm selenoid-ui start
docker run -p 5601:5601 -p 9200:9200 -p 5044:5044 -it --name elk sebp/elk
echo "EVOQA is Ready!"
