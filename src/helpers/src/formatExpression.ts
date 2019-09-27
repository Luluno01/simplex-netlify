import { Expression } from 'algebra.js'


export function formatExpression(expr: Expression) {
  let res = ''
  if(expr.constants.length) {
    res = expr.constants[0].toString()
  }
  for(const { variables: [ variable ], coefficients: [ coeff ] } of expr.terms) {
    const coeffAbs = coeff.abs()
    res += ` ${coeff.valueOf() < 0 ? '- ' : (res.length == 0 ? '' : '+ ')}${coeffAbs.valueOf() == 1 ? variable : `${coeffAbs.toString()} * ${variable}`}`
  }
  return res.trimLeft()
}

export default formatExpression
