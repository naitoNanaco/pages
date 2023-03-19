# syntax=docker/dockerfile:experimental
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY .babelrc ./
RUN npm install

COPY ./ ./
RUN npm run build

FROM httpd:2.4
COPY --from=build /usr/src/app/out /usr/local/apache2/htdocs/pages