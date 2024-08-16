# syntax=docker/dockerfile:1

FROM node:22
WORKDIR /Arcade-Game-Jam
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000