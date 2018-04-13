FROM node:4.8.1

WORKDIR /app
ADD . /app
RUN npm install

EXPOSE 8088

CMD []
ENTRYPOINT ["node", "app.js"]
