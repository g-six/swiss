import { kebabCase } from './'

describe('kebabCase', () => {
  it('should replace space with hyphen', () => {
    const actual = kebabCase('Just a Test')
    expect(actual).toEqual('Just-a-Test')
  })
})
