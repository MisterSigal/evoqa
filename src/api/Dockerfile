FROM node:10-alpine
LABEL maintainer="Postman Labs <help@getpostman.com>"

ARG NEWMAN_VERSION

ENV LC_ALL="en_US.UTF-8" LANG="en_US.UTF-8" LANGUAGE="en_US.UTF-8" ALPINE_NODE_REPO="oznu/alpine-node"

RUN npm install --global newman@${NEWMAN_VERSION} \
    npm install --global newman-reporter-html;

WORKDIR /etc/newman

ENTRYPOINT ["newman"]

COPY collections /etc/newman