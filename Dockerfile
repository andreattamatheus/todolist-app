# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /var/www

# Install dependencies
COPY ./todolist-app/package*.json ./
RUN npm install

# Expose the port that the app will run on
EXPOSE 8080

# Start the app
CMD ["npm", "run", "serve"]
