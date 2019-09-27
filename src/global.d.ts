import { Handler, APIGatewayEvent, Context } from 'aws-lambda'


interface Response {
  statusCode: number
  body: string
}

interface Handler {
  (event: APIGatewayEvent, context: Context): Promise<Response>
}
