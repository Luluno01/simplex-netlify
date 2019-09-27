import { Handler } from './global'


export const handler: Handler = async() => {
  return {
    statusCode: 200,
    body: 'Rua!'
  }
}
