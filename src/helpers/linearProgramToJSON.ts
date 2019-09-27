import { LinearProgram } from 'simplex'
import formatExpression from './formatExpression'
import formatEquation from './formatEquation'


export function linearProgramToJSON(lp: LinearProgram) {
  return {
    objective: formatExpression(lp.objective),
    constraints: lp.constraints.map(formatEquation)
  }
}

export default linearProgramToJSON
