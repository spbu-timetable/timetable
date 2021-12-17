FROM node:12.18.4

COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

EXPOSE 3000
CMD ["npm","start"]
