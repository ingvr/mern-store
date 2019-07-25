FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
WORKDIR /app/server
RUN cd /app/server
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]
