/* eslint-disable import/prefer-default-export */
export const hasOwnProperty = <X extends object, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> => prop in obj
