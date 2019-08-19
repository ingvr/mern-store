FROM node:10
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
WORKDIR /app/client
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
WORKDIR /app/server
RUN npm install
WORKDIR /app
EXPOSE 5000
CMD [ "npm", "start" ]
