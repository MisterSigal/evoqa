#!/bin/bash
source ./.env

  #setup environment
#bash env_setup.sh

  #setup selenoid
cd ./cm
curl -s https://aerokube.com/cm/bash | bash
docker pull selenoid/vnc_chrome:$CHROME_VNC_VERSION
./cm selenoid start --vnc | bash
./cm selenoid-ui start
cd ..
echo "Selenoid is ready!"

  #setup elk
#git clone https://github.com/MisterSigal/docker-elk.git elka
#docker-compose -f ./elka/docker-compose.yml up -d
#echo "ELK is ready!"

  #setup selenium
npm install --prefix ./selenium
echo "Selenium is built"

echo "EVOQA is ready to work!"
