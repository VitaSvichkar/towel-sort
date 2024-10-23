// You should implement your task here.

module.exports = function towelSort(matrix) {
    const arr = [];
    if (!matrix || matrix.length === 0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i += 1) {
        if (i % 2) {
            for (let k = matrix[i].length - 1; k >= 0; k -= 1) {
                arr.push(matrix[i][k]);
            }
        } else {
            for (let j = 0; j < matrix[i].length; j += 1) {
                arr.push(matrix[i][j]);
            }
        }
    }

    return arr;
};
