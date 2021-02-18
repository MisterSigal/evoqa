FROM node:14

WORKDIR /usr/src/evoqa

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test", "example.mjs"]
