# Step 1: Use a Node.js image as the base image
FROM node:20

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json /app/

# Step 4: Install Angular CLI globally and project dependencies
RUN npm install -g @angular/cli@17 && npm install

# Step 5: Copy the project files into the container
COPY . /app

# Step 6: Expose the port the app runs on
EXPOSE 4200

# Step 7: Start the app
CMD ["ng", "serve", "--host", "0.0.0.0"]
