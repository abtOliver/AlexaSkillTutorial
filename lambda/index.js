const Alexa = require('ask-sdk-core');

const CustomHandler = {
    canHandle(handlerInput) {
        return true;
    },
    handle(handlerInput) {
        
        console.log(`handlerInput: ${JSON.stringify(handlerInput)}`);
        
         const handlerResponse = handlerInput.responseBuilder
            .speak('Willkommen bei "Hocus Pocus".')
            .getResponse();
            
        console.log(`handlerResponse: ${JSON.stringify(handlerResponse)}`);
        
        return handlerResponse;
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        CustomHandler)
    .lambda();