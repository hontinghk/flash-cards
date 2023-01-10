# Angular 15 supports Node version 16.13.x
FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/angular-flash-cards /usr/share/nginx/html