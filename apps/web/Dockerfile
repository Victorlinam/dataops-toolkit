FROM node:20-alpine
WORKDIR /app
COPY package.json next.config.ts ./
COPY src ./src
RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]
