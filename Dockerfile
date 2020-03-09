FROM node:12.16.1
COPY yarn.lock package.json ./
RUN yarn
COPY src src
COPY public public
RUN yarn build

EXPOSE 4000
CMD ["yarn", "start", "-p", "4000"]