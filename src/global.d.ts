import { Handler, APIGatewayEvent, Context } from 'aws-lambda'
import Response from './responses/Response'


interface Handler {
  (event: APIGatewayEvent, context: Context): Promise<Response>
}
