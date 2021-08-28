const Alexa = require('ask-sdk-core');

const CustomHandler = {
    canHandle(handlerInput) {
        return true;
    },
    handle(handlerInput) {
        
        return handlerInput.responseBuilder
            .speak('Willkommen bei "Hocus Pocus".')
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        CustomHandler)
    .lambda();