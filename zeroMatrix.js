/* Write an algorithm such that if an element in an MxN matrix is zero,
the entire row and column will be zero */
var matrix = [ [1,2,3,0],
               [1,0,3,3],
               [1,2,3,4]
             ];
console.log("newMatrix:", zeroMatrix(matrix));

function zeroMatrix(matrix) {
  var zeroLocations = {
    rows: [],
    columns: []
  }

  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      var element = matrix[i][j]

      if (element == 0) {
        zeroLocations.rows.push(i)
        zeroLocations.columns.push(j)
      }
    }
  }

  var newMatrix = matrix.slice()

  for(var i = 0; i < zeroLocations.rows.length; i++) {
    var rowNumber = zeroLocations.rows[i]
    for (var j = 0; j < newMatrix[rowNumber].length; j++) {
      newMatrix[rowNumber][j] = 0
    }
  }

  for (var i = 0; i < zeroLocations.columns.length; i++) {
    var columnNumber = zeroLocations.columns[i]
    for(var j = 0; j < newMatrix.length; j++) {
      newMatrix[j][columnNumber] = 0
    }
  }
  return newMatrix
}
