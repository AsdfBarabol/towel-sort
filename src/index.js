
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var arrResult = [];
  if (matrix == undefined) {
    return arrResult;
  }
  for (let i = 0; i < matrix.length; i++) {
    if(i%2 == 0){
      arrResult = arrResult.concat(matrix[i]);
    }
    else {
      arrResult = arrResult.concat(matrix[i].reverse());
    }
  }
  return arrResult;
}
