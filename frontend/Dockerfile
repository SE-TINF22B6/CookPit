FROM node:7.7.2-alpine
WORKDIR /home/web/CookPit/frontend
COPY package.json .
RUN npm install --quiet
COPY . .
EXPOSE 3000