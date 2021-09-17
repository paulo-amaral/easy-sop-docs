FROM node:14.17.0
ENV NODE_ENV=production

# Create app directory
WORKDIR /app
RUN cd /app

# Installing dependencies
COPY package*.json .
COPY package-lock.json* .
COPY docusaurus.config.js .
RUN npm install 

# comes with npm
RUN npm i docusaurus-lunr-search  --save

# Copying source files
COPY . .

# Running the app
EXPOSE 3000
#ENV PORT 3000
CMD [ "npm", "start" ]