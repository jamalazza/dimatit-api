FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/dimatitGraphQlApi
WORKDIR /usr/src/dimatitGraphQlApi

# Install app dependencies
COPY package.json /usr/src/dimatitGraphQlApi/
RUN npm install

# Bundle app source
COPY . /usr/src/dimatitGraphQlApi

EXPOSE 8080 1433

CMD [ "npm", "start" ]