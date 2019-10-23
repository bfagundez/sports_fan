FROM node:10.15.3-alpine

WORKDIR /usr/src/server
COPY package.json .
RUN yarn global add prisma@1.23.2
RUN yarn install
RUN apk add git

