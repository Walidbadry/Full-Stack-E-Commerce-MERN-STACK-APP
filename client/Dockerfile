# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY client/package*.json ./

# Install client dependencies
RUN npm install

# Copy the rest of the client files
COPY client/ .

# Expose the port the React app runs on
EXPOSE 3000

# Build the React app
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Start serving the React app
CMD ["serve", "-s", "build", "-l", "3000"]
