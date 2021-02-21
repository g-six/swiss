export const humanize = (val: number) => {
  const is_negative = val < 1
  const num = Math.abs(val)

  let humanized

  if (num >= 1000000) {
    humanized = `${parseFloat(`${num / 1000000}`).toFixed(2)}M`
  } else if (num >= 1000) {
    humanized = `${parseFloat(`${num / 1000}`).toFixed(2)}K`
  } else {
    humanized = num
  }

  return is_negative ? `-${humanized}` : humanized
}
