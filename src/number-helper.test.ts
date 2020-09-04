import { humanize } from './number-helper'

describe('humanize positive numbers', () => {
  it('should humanize by millions', () => {
    const actual = humanize(1555000)

    expect(actual).toBe('1.55M')
  })

  it('should humanize by thousands', () => {
    const actual = humanize(1555)

    expect(actual).toBe('1.55K')
  })

  it('should humanize', () => {
    const actual = humanize(555)

    expect(actual).toBe(555)
  })
})

describe('humanize negative numbers', () => {
  it('should humanize by millions', () => {
    const actual = humanize(-1555000)

    expect(actual).toBe('-1.55M')
  })

  it('should humanize by thousands', () => {
    const actual = humanize(-1555)

    expect(actual).toBe('-1.55K')
  })

  it('should humanize', () => {
    const actual = humanize(-555)

    expect(actual).toBe('-555')
  })
})
