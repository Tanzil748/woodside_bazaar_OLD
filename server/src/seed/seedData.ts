// ensures that I don't accidentally enter a value with missing data
type ProductType = {
  name: string;
  img: string;
  price: number;
  category: string;
};

export const seederData: ProductType[] = [
  {
    name: "Apple",
    img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 2.99,
    category: "Fruit",
  },
  {
    name: "Banana",
    img: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
    category: "Fruit",
  },
  {
    name: "Pomegranate",
    img: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 6.99,
    category: "Fruit",
  },
  {
    name: "Orange",
    img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 4.99,
    category: "Fruit",
  },
  {
    name: "Lemon",
    img: "https://images.unsplash.com/photo-1587486937303-32eaa2134b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
    price: 5.99,
    category: "Fruit",
  },
  {
    name: "Grape",
    img: "https://images.unsplash.com/photo-1615485925763-86786288908a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 7.99,
    category: "Fruit",
  },
  {
    name: "Broccoli",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.78,
    category: "Vegetable",
  },
  {
    name: "Carrot",
    img: "https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    price: 7.49,
    category: "Vegetable",
  },
  {
    name: "Corn",
    img: "https://images.unsplash.com/photo-1615485290161-7eb49a34eba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    price: 10.99,
    category: "Vegetable",
  },
  {
    name: "Eggplant",
    img: "https://images.unsplash.com/photo-1615484477201-9f4953340fab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    price: 8.99,
    category: "Vegetable",
  },
  {
    name: "Pumpkin",
    img: "https://images.unsplash.com/photo-1548357209-6eb9f60efe87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    price: 15.99,
    category: "Vegetable",
  },
  {
    name: "Potato",
    img: "https://images.unsplash.com/photo-1617130094141-532436117aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
    category: "Vegetable",
  },
  {
    name: "Coca Cola",
    img: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 1.99,
    category: "Beverage",
  },
  {
    name: "Pepsi Max",
    img: "https://images.unsplash.com/photo-1651000877908-18e19a5d4ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    price: 1.99,
    category: "Beverage",
  },
  {
    name: "Matcha Latte",
    img: "https://images.unsplash.com/photo-1592284441621-581ebd2e677d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    price: 2.79,
    category: "Beverage",
  },
  {
    name: "Lemonade",
    img: "https://images.unsplash.com/photo-1555949366-819808d99159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    price: 4.99,
    category: "Beverage",
  },
  {
    name: "Water",
    img: "https://images.unsplash.com/photo-1560653265-bbf94ac68a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    price: 1.99,
    category: "Beverage",
  },
  {
    name: "Coffee",
    img: "https://images.unsplash.com/photo-1615486866662-8511dc5f712f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
    category: "Beverage",
  },
  {
    name: "Chocolate",
    img: "https://images.unsplash.com/photo-1587132164684-cfd0b8214d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
    category: "Sweet",
  },
  {
    name: "Chocolate cake",
    img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1650&q=80",
    price: 11.99,
    category: "Sweet",
  },
  {
    name: "Mint cupcake",
    img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    price: 3.99,
    category: "Sweet",
  },
  {
    name: "Gingerbread brownies",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    price: 1.99,
    category: "Sweet",
  },
  {
    name: "Cookies",
    img: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1690&q=80",
    price: 2.99,
    category: "Sweet",
  },
  {
    name: "Strawberry cone",
    img: "https://images.unsplash.com/photo-1625575080259-662349b6abf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80",
    price: 5.99,
    category: "Sweet",
  },
  {
    name: "Turmeric",
    img: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.99,
    category: "Spice",
  },
  {
    name: "Cinnamon",
    img: "https://images.unsplash.com/photo-1587131782738-de30ea91a542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 1.99,
    category: "Spice",
  },
  {
    name: "Bell pepper",
    img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    price: 5.99,
    category: "Spice",
  },
  {
    name: "Star anise",
    img: "https://images.unsplash.com/photo-1642255487710-93529c00660e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    price: 3.99,
    category: "Spice",
  },
  {
    name: "Red pepper",
    img: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 1.99,
    category: "Spice",
  },
  {
    name: "Garlic",
    img: "https://images.unsplash.com/photo-1587049332298-1c42e83937a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FybGljfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 4.99,
    category: "Spice",
  },
];
