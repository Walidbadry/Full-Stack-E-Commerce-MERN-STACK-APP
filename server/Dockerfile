# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY server/package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server files
COPY server/ .

# Expose the port the app runs on
EXPOSE 5001

# Start the server
CMD ["npm", "start"]
