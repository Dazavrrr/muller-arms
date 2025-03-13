/* eslint-disable import/prefer-default-export */
import { hasOwnProperty } from './hasOwnProperty'

export const getApiError = (err: unknown) => {
  if (
    err &&
    typeof err === 'object' &&
    hasOwnProperty(err, 'data') &&
    err.data &&
    typeof err.data === 'object'
  ) {
    const [, errors] = Object.entries(err.data)[0]

    return typeof errors === 'string' ? errors : errors[0]
  }

  if (
    err &&
    typeof err === 'object' &&
    hasOwnProperty(err, 'data') &&
    err.data &&
    typeof err.data === 'string' &&
    err.data.indexOf('<html') === -1
  ) {
    return err.data
  }

  return 'Internal Error'
}
