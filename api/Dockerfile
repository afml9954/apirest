FROM node:12.19.0-alpine3.9 As builder
WORKDIR /usr/src/app
COPY package.json .
RUN npm install -g sequelize-cli
RUN npm install
RUN ls
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]