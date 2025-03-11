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

# # Use nginx to serve frontend
FROM nginx:alpine AS nginx

WORKDIR /usr/share/nginx/html

COPY --from=reactbuild /app/build /usr/share/nginx/html

# Copy the Nginx config file
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
