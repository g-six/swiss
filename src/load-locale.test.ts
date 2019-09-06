import { loadLocale } from './'

describe('loadLocale', () => {
  it('should load language file', () => {
    const actual = loadLocale(__dirname + '/test.yaml')

    expect(actual).toHaveProperty('a-key', 'a value')
  })

  it('should log error to console', () => {
    try {
      loadLocale('test.yaml')
    } catch (e) {
      expect(typeof e).toEqual(typeof Error)
    }
  })
})
