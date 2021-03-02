FROM node:12.18.4

COPY . /client
WORKDIR /client

RUN npm i
RUN npm run build

EXPOSE 3000
CMD ["npm","start"]