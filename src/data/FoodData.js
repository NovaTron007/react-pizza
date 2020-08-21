// menu data
export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza"
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpg",
    section: "Pizza"
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpg",
    section: "Pizza"
  },
  {
    name: "Veggie Pizza",
    img: "/img/healthy-pizza.jpg",
    section: "Pizza"
  },
  {
    name: "Gyro",
    img: "/img/Gyro.jpg",
    section: "Sandwich"
  },
  {
    name: "Burger",
    img: "/img/burger.jpg",
    section: "Sandwich"
  },
  {
    name: "Sandwich",
    img: "/img/sandwich.jpg",
    section: "Sandwich"
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Sides"
  }
];

export const foods = foodItems.reduce((res, foodItem) => {
  if (!res[foodItem.section]) {
    // i.e Sides
    res[foodItem.section] = []; // set section as key
  }
  res[foodItem.section].push(foodItem);
  console.log(res);
  return res; //new object with array of food items
}, {});
