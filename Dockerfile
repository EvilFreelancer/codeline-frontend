FROM evilfreelancer/alpine-apache-php7
ADD . /app
WORKDIR /app
RUN apk add --update --no-cache nodejs nodejs-npm
RUN npm install \
 && npm run build \
 && cp -r ./dist/* ./public/ \
 && chown -R apache:apache /app \
 && apk del nodejs nodejs-npm \
 && rm -R ./node_modules/
