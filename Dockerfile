# Base image
FROM nginx:alpine

# Copying application build to Nginx folder
COPY dist/browser/ /usr/share/nginx/html

# Exposing port 80
EXPOSE 80