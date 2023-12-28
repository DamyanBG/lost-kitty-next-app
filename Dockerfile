# Use an official Node.js runtime as the base image
FROM node:21-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY . .

# Install project dependencies
RUN npm install

# Build the NextJS app
RUN npm run build

# Expose a port (e.g., 3000) for your NextJS app to run
EXPOSE 3000

# Serve the built NextJS app
CMD [ "npm", "start" ]