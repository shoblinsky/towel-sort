module.exports = function towelSort(matrix = []) {
  // matrix = matrix || undefined;
  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const towelIndex = i % 2 === 0 ? j : matrix[i].length - j - 1;
      result.push(matrix[i][towelIndex]);
    }
  }
  // return matrix === undefined ? [] : result;
  return result;
};
