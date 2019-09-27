import { Handler } from './global'
import OK from './responses/OK'


export const handler: Handler = async (event) => {
  return new OK('node-simplex is working well', event)
}
