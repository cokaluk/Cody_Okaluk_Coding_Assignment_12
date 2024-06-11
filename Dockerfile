FROM node:lts-iron

WORKDIR /okaluk_Cody_ui_garden/

COPY public/ /okaluk_Cody_ui_garden/public
COPY src/ /okaluk_Cody_ui_garden/src
COPY package.json /okaluk_Cody_ui_garden/
COPY . /okaluk_Cody_ui_garden

RUN NPM install

CMD ["npm", "run", "storybook"]