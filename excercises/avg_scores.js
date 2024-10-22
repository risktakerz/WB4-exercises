let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let sumOfAllScores = 0;

function getAverage() {
  for (const score of myScores) {
    console.log(score);
    sumOfAllScores = sumOfAllScores + score;

    return sumOfAllScores;
  }
}

let myAverageScore = getAverage(myScores);
console.log(myAverageScore.toFixed(2));

// let cats = [
//   "Garfeild",
//   "Tom",
//   "Toma",
//   "Mochi",
//   "Felix",
//   "Flex",
//   "Sylvester",
//   "P kitty",
// ];

// for (let cat of cats) {
//   console.log("this would print each cat if you put cats");
// }

// for (let index = 0; index < cats.length; index++) {
//   const cat = cats[index];
//   console.log(cat);
// }
