/**
 * getColorByCode. Depending on the code, the function will return color
 * @param {number} code
 * @return {string}
 */
export const getColorByCode = (code) => {
  let color

  if (+code === 2) {
    color = 'green'
  } else if (+code === 3) {
    color = 'gold'
  } else if (+code === 4) {
    color = 'purple'
  } else if (+code === 5) {
    color = 'red'
  } else {
    color = 'blue'
  }

  return color
}
