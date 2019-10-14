#!/bin/bash

apt-get update
apt-get install npm -y
apt-get install nodejs
curl -s https://aerokube.com/cm/bash | bash
./cm selenoid start --vnc | bash
./cm selenoid-ui start
