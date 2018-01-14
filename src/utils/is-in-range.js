export default (number, min, max) => {
  min = parseFloat(min)
  max = parseFloat(max)
  number = parseFloat(number)

  if (isNaN(min) || isNaN(max) || isNaN(number)) {
    return false
  }

  return (number >= min && number <= max)
}
