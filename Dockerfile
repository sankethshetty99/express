#alpine quite secure
FROM node:16.2-alpine

WORKDIR /usr/src/app

# The reason we copy over these files first separately is because we are taking advantage of the docker build caching the node_modules because its not going to change that often.
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

# this copy obv ignores all the dockerignore regex
COPY . ./

# this doesnt open up port 3000. its only for documentation.
#that explains a lot.
EXPOSE 3000

CMD ["npm", "run","dev"]
