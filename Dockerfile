FROM node:latest

COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

EXPOSE 5000
CMD ["npm","start"]