FROM node:alpine

WORKDIR /client

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]