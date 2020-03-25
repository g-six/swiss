import { ValidationErrorItem } from '@hapi/joi'
import { readFileSync } from 'fs'
import { safeLoad } from 'js-yaml'
import * as database from './database'
import * as number_helper from './number-helper'

let lang

export const loadLocale = (file) => {
  try {
    lang = safeLoad(readFileSync(file, 'utf8'))
  } catch (e) {
    console.error(e)
  }
  return lang
}

export const invalidRequestReducer = (errors: ValidationErrorItem[]) => {
  return {
    errors: errors.reduce(
      /* istanbul ignore next */
      (obj: { [index: string]: string } = {}, item) => {
        if (item.context && item.context.key) {
          obj[item.context.key] = item.type
          return obj
        }
      },
      {},
    ),
    statusCode: 400,
  }
}

export const kebabCase = (input) => {
  return input.split(' ').join('-')
}

export const generateUri = (input) => {
  const lcase = input
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
  return kebabCase(lcase)
}

export const symbols = `<>@!#$%^&*()-+{};:?/|][`
export const generatePassword = (length = 8, add_symbols = false) => {
  const charset = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789${
    add_symbols ? symbols : ''
  }`
  let ret_val = ''

  for (let i = 0, n = charset.length; i < length; ++i) {
    ret_val += charset.charAt(Math.floor(Math.random() * n))
  }

  return ret_val
}

export const Database = database
export const NumberHelper = number_helper
