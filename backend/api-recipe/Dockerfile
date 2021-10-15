# Use NodeJS base image
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app
 
# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Clean and install dependencies
RUN npm ci

# Bundle app source
COPY . .

# Bind the port that the image will run on
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["npm", "run", "prod"]
