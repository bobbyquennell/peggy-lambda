import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayEventRequestContext } from 'aws-lambda';
// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> => {
    try {
        // const ret = await axios(url);

        const inboundMsg = JSON.parse(event?.body);
        console.log(`received message ===> ${inboundMsg?.name} said: ${inboundMsg?.message}`);

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `Hi ${inboundMsg?.name?? 'there'}, I am Peggy`,
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
