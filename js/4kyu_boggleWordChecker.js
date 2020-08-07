// https://www.codewars.com/kata/57680d0128ed87c94f000bfd/

function checkWord(board, chars, path = [], result = false) {
    // no more chars => this is a valid path
    if (chars.length === 0) return true;

    // get coordinates
    const coordinates = (path.length === 0)
        ? findCoordinates(board, chars[0])
        : findNeighbours(board, path[path.length - 1], chars[0], path);
    
    // no coordinates found => not a valid path
    if (coordinates.length === 0) return false;
    
    // iterate over all candidates
    coordinates.forEach(coordinate => {
        const newPath = [...path, coordinate];
        const newChars = chars.slice(1);
        result |= checkWord(board, newChars, newPath, result);
    });
    return result;
}

const reusingCoordinates = (row, col, usedCoordinates) => (usedCoordinates.filter( ([usedRow, usedCol]) => (usedRow === row && usedCol === col)).length > 0);

const findNeighbours = (board, coordinates, char, usedCoordinates) => {
    const neighbours = [];
    
    [[0, 1], [0, -1], [1, 0], [1, 1], [1, -1], [-1, 0], [-1, 1], [-1, -1]].forEach(cur => {
        const newRow = coordinates[0] + cur[0];
        const newCol = coordinates[1] + cur[1];
        if (newRow < 0 || newRow >= board.length) return;
        if (newCol < 0 || newCol >= board[0].length) return;
        if (reusingCoordinates(newRow, newCol, usedCoordinates)) return;
        if (board[newRow][newCol] === char) neighbours.push([newRow, newCol]);
    });

    return neighbours;
}

const findCoordinates = (board, char) => {
    const coordinates = [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === char) coordinates.push([row, col]);
        }
    }
    return coordinates;
}
