# Use Node.js for building React app
FROM node:18 as reactbuild

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything (including public/)
COPY . .

# Expose the React development port
# EXPOSE 3000

# Start React app
# CMD ["npm", "start"]

# # Build the React app
RUN npm run build && ls -l /app/build

# Store build output in a Docker volume
# VOLUME /frontend_build

# Expose build directory as a volume
VOLUME /app/build

CMD ["sh", "-c", "echo 'Frontend build container running' && sleep infinity"]

# # Use nginx to serve frontend
# FROM nginx:alpine AS nginx

# WORKDIR /usr/share/nginx/html

# COPY --from=reactbuild /app/build /usr/share/nginx/html
# Since we are using Docker volume to share the built files between the frontend and nginx
# COPY --from=build /app/build /app/build

# Copy the Nginx config file
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
# EXPOSE 80

# Start Nginx
# CMD ["nginx", "-g", "daemon off;"]