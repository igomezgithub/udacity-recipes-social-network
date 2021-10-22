# Use NodeJS base image
FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Clean and install dependencies
RUN npm ci

# Bundle app source
COPY . .

# Define the Docker image's behavior at runtime
CMD ["npm", "run", "start:prod"]