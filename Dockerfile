<<<<<<< HEAD
FROM node:latest
=======
FROM node:12.18.4
>>>>>>> 6b46e1335928cd01738138b67626f5a70f180ef6

COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

<<<<<<< HEAD
EXPOSE 5000
CMD ["npm","start"]
=======
EXPOSE 3000
CMD ["npm","start"]
>>>>>>> 6b46e1335928cd01738138b67626f5a70f180ef6
