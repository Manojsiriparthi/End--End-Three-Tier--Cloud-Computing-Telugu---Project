# Step 1: Build the React application
FROM node:16 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the React application using an NGINX server
FROM nginx:alpine

# Copy the build files from the previous stage to the NGINX web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to be able to access the applicat

