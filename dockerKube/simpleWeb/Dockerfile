FROM node:alpine

# create new folder for all copied files to prevent fold name clashes with file already in the contaier
WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]
