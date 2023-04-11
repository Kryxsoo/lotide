const middle = (array) => {
  if (array.length === 1 || array.length === 2){
    return [];
  }
  if (array.length%2===1) {
    return array[array.length/2-0.5]
  } 
  return [array[array.length/2-1], array[array.length/2 ]] 
}

module.exports = middle;