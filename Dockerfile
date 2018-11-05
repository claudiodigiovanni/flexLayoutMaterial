FROM node:carbon
RUN mkdir /myapp
RUN mkdir /myapp/src
WORKDIR /myapp
COPY package.json .
COPY package-lock.json .
COPY angular.json .
COPY tsconfig.json .
ENV PATH node_modules/.bin:$PATH
RUN ["npm", "install"]
#RUN npm i -g @angular-cli --unsafe
EXPOSE 4200
CMD ng serve --host=0.0.0.0
