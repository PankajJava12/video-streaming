# Use Node.js for building React app
FROM node:18 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything (including public/)
COPY . .

# Expose the React development port
EXPOSE 3000

# Start React app
CMD ["npm", "start"]

# # Build the React app
# RUN npm run build

# # Use nginx to serve frontend
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
