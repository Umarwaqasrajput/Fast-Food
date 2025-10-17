// 📁 src/lib/data.ts
export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  desc?: string;
  img?: string;
};

export const MENU: MenuItem[] = [
  { id: "b1", name: "Classic Beef Burger", category: "Burgers", price: 480, desc: "Juicy beef patty, fresh lettuce, secret sauce", img: "/1.jpg" },
  { id: "b2", name: "Crispy Zinger", category: "Burgers", price: 550, desc: "Crispy chicken fillet with spicy mayo", img: "/2.jpg" },
  { id: "p1", name: "Tandoori Chicken Pizza", category: "Pizza", price: 920, desc: "Smoky tandoori, cheese overload", img: "/3.jpg" },
  { id: "f1", name: "Masala Fries", category: "Fries", price: 220, desc: "Crispy fries with special masala", img: "/4.jpg" },
  { id: "d1", name: "Choco Shake", category: "Drinks", price: 320, desc: "Rich chocolate milkshake", img: "/5.jpg" },
  { id: "c1", name: "Chicken Cubes", category: "Chicken", price: 480, desc: "Spiced golden chicken cubes", img: "/6.jpg" }
];
