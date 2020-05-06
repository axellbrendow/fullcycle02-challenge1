FROM node:14.1-alpine

COPY . .

ENTRYPOINT [ "node", "index.js" ]
