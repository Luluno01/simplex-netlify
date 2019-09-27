import { Handler, APIGatewayEvent, Context } from 'aws-lambda'
import { Response } from 'responses'


interface Handler {
  (event: APIGatewayEvent, context: Context): Promise<Response>
}
