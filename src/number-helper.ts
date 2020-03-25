export const humanize = (val: number) => {
  if (val >= 1000000) {
    return `${parseFloat(`${val / 1000000}`).toFixed(2)}M`
  } else if (val >= 1000) {
    return `${parseFloat(`${val / 1000}`).toFixed(2)}K`
  }
  return val
}
