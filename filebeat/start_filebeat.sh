#!/bin/bash

docker run -d \
  --name=filebeat \
  --user=root \
  --volume="$(pwd)/filebeat/filebeat.docker.yml:/usr/share/filebeat/filebeat.yml:ro" \
  --volume="/var/lib/docker/containers:/var/lib/docker/containers:ro" \
  --volume="/var/run/docker.sock:/var/run/docker.sock:ro" \
  --volume="$(pwd)/filebeat/logstash-beats.crt:/etc/pki/tls/certs/logstash-beats.crt" \
  docker.elastic.co/beats/filebeat:7.4.2 filebeat -e -strict.perms=false \
