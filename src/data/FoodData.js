export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

// menu data
export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 3.5
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpg",
    section: "Pizza",
    price: 4
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpg",
    section: "Pizza",
    price: 4
  },
  {
    name: "Veggie Pizza",
    img: "/img/healthy-pizza.jpg",
    section: "Pizza",
    price: 4.5
  },
  {
    name: "Gyro",
    img: "/img/Gyro.jpg",
    section: "Sandwich",
    price: 4.5
  },
  {
    name: "Burger",
    img: "/img/burger.jpg",
    section: "Sandwich",
    price: 4.5
  },
  {
    name: "Sandwich",
    img: "/img/sandwich.jpg",
    section: "Sandwich",
    price: 6
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Sides",
    price: 2
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
