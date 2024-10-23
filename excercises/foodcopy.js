let menuItems = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let subtotal = 0;

for (let i = 0; i < menuItems.length; i = i + 1) {
  const menuItem = menuItems[i]; //Subscript - variable repersents each Item

  subtotal = menuItem.price + subtotal;
  console.log(menuItem);

  console.log(subtotal); // total of all the lunch items (ALL)
}

let tax = subtotal * 0.08;
