FROM node:14
WORKDIR /app
ENV PORT=3000
ENV MONGO_DB_URL="mongodb://localhost:27017/serving"
EXPOSE ${PORT}
COPY . .
RUN npm install
ENTRYPOINT npm run start