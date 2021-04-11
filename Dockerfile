FROM node:15
RUN apt install ffmpeg

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
