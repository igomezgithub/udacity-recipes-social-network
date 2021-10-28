# Use NodeJS base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Clean and install dependencies
RUN npm ci

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Define the Docker image's behavior at runtime
CMD ["npm", "run", "start:prod"]