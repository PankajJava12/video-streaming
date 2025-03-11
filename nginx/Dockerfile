# Use Nginx to serve the React build
FROM nginx:alpine AS nginx

WORKDIR /usr/share/nginx/html

# Copy the React build from frontend container (via volume)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
