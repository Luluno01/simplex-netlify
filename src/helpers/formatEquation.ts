import formatExpression from './formatExpression'
import { Equation } from 'algebra.js'


export function formatEquation(eq: Equation) {
  return `${formatExpression(eq.lhs)} = ${formatExpression(eq.rhs)}`
}

export default formatEquation