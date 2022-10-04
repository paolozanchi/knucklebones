function generateSquareMatrix(side) {
  let result = Array(side).fill().map(() => Array(side).fill())

  return result;
}

function calculateScore(matrix) {
  let sum = 0;
  for (let y = 0; y < 3; y++) {
    let collection = new Map();

    const valueRow1 = matrix[0][y];
    const valueRow2 = matrix[1][y];
    const valueRow3 = matrix[2][y];

    increaseByOne(collection, valueRow1);
    increaseByOne(collection, valueRow2);
    increaseByOne(collection, valueRow3);
    
    for (const [x, y] of collection) {
      sum += (x * y) * y;
    }
  }
  console.log("sum", sum)
}

function increaseByOne(collection, id) {
	if (!id) return;
  
	const present = collection.get(id);
  
  if(!present) {
  	collection.set(id, 1);
  } else {
  	collection.set(id, present + 1);
  }
}

let matrix = generateSquareMatrix(3);
matrix = [
  [ null, 2, 1 ],
  [ null, 1, 4 ],
  [ null, 3, 1 ],
]
let score = calculateScore(matrix);

matrix = [
  [ 4, 6, 5 ],
  [ 2, 6, 3 ],
  [ 3, 6, 3 ],
]
score = calculateScore(matrix);

matrix = [
  [ 6, 2, 3 ],
  [ 6, 1, 3 ],
  [ null, 2, 4 ],
]
score = calculateScore(matrix);

matrix = [
  [ 2, 5, 2 ],
  [ 2, 5, 5 ],
  [ 1, 6, 1 ],
]
score = calculateScore(matrix);