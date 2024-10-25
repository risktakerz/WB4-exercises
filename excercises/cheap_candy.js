let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

for (const product of products) {
  if (product.price < 4) {
    console.log(product);
  }
}

// function getCheapCandies(candies, lowprice) {
//   let cheapCandies = [];

//   if (candy.price < lowprice) {
//     cheapCandies.push(candy);
//   }
// }

// return cheapCandies;

// let cheapCandies = getCheapCandies(products, 3);
// console.log(cheapCandies);


console.log("--------M&M candies-----");
for (const product of products) {
  if (product.product.includes("M&M")) {
    console.log(product);
  }
}
console.log("------------------------------------");

// Do we carry "Swedish Fish"?
console.log('--------"Swedish Fish"?-----');

for (const product of products) {
  if (product.product.includes("Swedish Fish")) {
    console.log("Yes we carry Swedish Fish, would you like to try some?");
  }
}
console.log("------------------------------------");