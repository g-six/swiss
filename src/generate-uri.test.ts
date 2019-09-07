import { generateUri } from './'

describe('generateUri', () => {
  it('should convert string to lower and kebab case', () => {
    const actual = generateUri('Just a  Test, Inc.')
    expect(actual).toEqual('just-a-test-inc')
  })
})
