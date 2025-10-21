export function getOptionsFromObject(object: { [key: number | string]: string }) {
  const options = Object.keys(object).map((keys) => ({
    label: keys,
    value: keys,
  }))

  return options
}
