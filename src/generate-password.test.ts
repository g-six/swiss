import { generatePassword } from './'

describe('generatePassword', () => {
  it('should generate random string of length 8', () => {
    const actual = generatePassword()
    expect(actual.length).toEqual(8)
  })

  it('should generate random string based on specified length', () => {
    const actual = generatePassword(12)
    expect(actual.length).toEqual(12)
  })

  it('should generate random string with symbols', () => {
    const actual = generatePassword(12, true)
    expect(/\W/.test(actual)).toBe(true)
  })

  it('should generate random string without symbols', () => {
    const actual = generatePassword(12)
    expect(/\W/.test(actual)).toBe(false)
  })
})
