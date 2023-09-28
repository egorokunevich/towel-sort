
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix !== undefined) {
    let sorted = new Array();
  matrix.forEach((item, i) => {
    if (i % 2 === 0) {
      sorted.push(matrix[i]);
    } else {
      sorted.push(...matrix[i].reverse());
    }
  });
  return sorted.flat();
  } else {
    return [];
  }
  
}
