# Use node 9.10.1 LTS
FROM node:9.10.1

RUN mkdir -p app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "server/server.js"]