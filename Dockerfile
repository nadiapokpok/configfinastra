FROM registry.misys.global.ad/uxp/centos-uxp-build:10
ARG PACKAGE_JSON="package.json"
WORKDIR /ui

## Stage 0 : Copy everything and build

COPY ${PACKAGE_JSON} .

RUN npm i  --loglevel=warn --unsafe-perm

COPY src src
COPY projects projects
COPY conf.json angular.json tsconfig.json tslint.json ./

RUN npm run ng -- build periodic-table
RUN npm run ng -- build --prod

FROM registry.misys.global.ad/ffdc-base/node:10-alpine
ENV NODE_ENV production
WORKDIR /ui

## Stage 1 : Copy only what is necessary to run the app

COPY --from=0 /ui/dist dist
COPY --from=0 /ui/node_modules node_modules
COPY --from=0 /ui/package.json /ui/conf.json ./

CMD npm run start:docker

# Build
# docker build -t registry.misys.global.ad/test/demo-app .

# Run
# docker run -p 3002:3002 --name uxp-test-app registry.misys.global.ad/test/demo-app

# Run with volume mapping
# docker run -p 3002:3002 --name uxp-test-app -v $PWD/data:/ui/data registry.misys.global.ad/test/demo-app

# Override run command
# docker run -it -p 3002:3002 registry.misys.global.ad/test/demo-app /bin/sh

# Push (`docker login --registry REGISTRY` required before pushing)
# docker push registry.misys.global.ad/test/demo-app
