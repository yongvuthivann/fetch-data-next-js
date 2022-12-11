FROM node:16

ENV PORT 4001

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn install

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn run build
EXPOSE 4001

# Running the app
CMD ["yarn", "dev"]