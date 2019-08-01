FROM node:10
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
WORKDIR /app/server
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]
