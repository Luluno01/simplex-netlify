import { LinearProgram } from 'simplex'
import { Handler } from '../global'
import { Param, linearProgramToJSON } from 'helpers'
import { BadRequest, OK } from 'responses'

export const handler: Handler = async (event, context) => {
  const param = new Param(event.queryStringParameters, event)
  try {
    param
      .require('variables', 'int', false)
      .require('objective', 'string', false)
      .require('constraints', 'array', false)
  } catch(err) {
    return param.errRes
  }
  try {
    const lp = LinearProgram.fromString(param.param as any)
    const input = linearProgramToJSON(lp)
    const res: [ ReturnType<typeof linearProgramToJSON>, string ][] = []
    for(const [ dict, result ] of lp.solve()) {
      res.push([ linearProgramToJSON(dict), result ])
    }
    return new OK({
      input,
      result: res
    }, event)
  } catch(err) {
    return new BadRequest((err as Error).message, event)
  }
}
