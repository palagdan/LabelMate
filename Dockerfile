FROM node:20.10-buster-slim

WORKDIR /app

COPY . .

RUN npm install --production
RUN npm install -g typescript
RUN npm install -g @vercel/ncc

RUN npm run build

ENTRYPOINT ["node", "/app/dist/index.js"]
