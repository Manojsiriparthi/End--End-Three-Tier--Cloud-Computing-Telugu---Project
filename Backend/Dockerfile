# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your server will run on
EXPOSE 5000

# Define the environment variables
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]

