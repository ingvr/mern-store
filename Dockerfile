FROM node
RUN mkdir -p /app/
WORKDIR /app/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/
COPY server/package*.json /app/server
RUN npm cache clean --force && npm install

RUN npm install
RUN cd server
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app/
RUN cd /app/
RUN npm run build

EXPOSE 5000
CMD [ "npm", "run", "server" ]
