import c1_img from "./c1.jpg";
import c2_img from "./c2.jpg";import c3_img from "./c3.jpg";import c4_img from "./c4.jpg";import c5_img from "./c5.jpg";import c6_img from "./c6.jpg";
import c7_img from "./c7.jpg";
import c8_img from "./c8.jpg";

import d1_img from "./d1.jpg";
import d2_img from "./d2.jpg";import d3_img from "./d3.jpg";import d4_img from "./d4.jpg";import d5_img from "./d5.jpg";import d6_img from "./d6.jpg";
import d7_img from "./d7.jpg";
import d8_img from "./d8.jpg";

import egg1_img from "./egg1.jpg";
import egg2_img from "./egg2.jpg";
import egg3_img from "./egg3.jpg";
import egg4_img from "./egg4.jpg";
import egg5_img from "./egg5.jpg";
import egg6_img from "./egg6.jpg";
import egg7_img from "./egg7.jpg";
import egg8_img from "./egg8.jpg";

import p1_img from "./p1.jpg";
import p2_img from "./p2.jpg";import p3_img from "./p3.jpg";import p4_img from "./p4.jpg";import p5_img from "./p5.jpg";import p6_img from "./p6.jpg";
import p7_img from "./p7.jpg";
import p8_img from "./p8.jpg";

import pz1_img from "./pz1.jpg";
import pz2_img from "./pz2.jpg";import pz3_img from "./pz3.jpg";import pz4_img from "./pz4.jpg";import pz5_img from "./pz5.jpg";import pz6_img from "./pz6.jpg";
import pz7_img from "./pz7.jpg";
import pz8_img from "./pz8.jpg";

import s1_img from "./s1.jpg";
import s2_img from "./s2.jpg";import s3_img from "./s3.jpg";import s4_img from "./s4.jpg";import s5_img from "./s5.jpg";import s6_img from "./s6.jpg";
import s7_img from "./s7.jpg";
import s8_img from "./s8.jpg";

let all_food = [
  {
    id: 1,
    name: "Rava Cake",
    category: "cake",
    image: c1_img,
  },
  {
    id: 2,
    name: "Choclate Cake",
    category: "cake",
    image: c2_img,
  },
  {
    id: 3,
    name: "Butterscoch Cake",
    category: "cake",
    image: c3_img,
  },
  {
    id: 4,
    name: "Pinapple Cake",
    category: "cake",
    image: c4_img,
  },
  {
    id: 5,
    name: "Caremal Cake",
    category: "cake",
    image: c5_img,
  },
  {
    id: 6,
    name: "Vanilla Cake",
    category: "cake",
    image: c6_img,
  },

  {
    id: 7,
    name: "strawberry drink",
    category: "drink",
    image: d1_img,
  },
  {
    id: 8,
    name: "Lemon drink",
    category: "drink",
    image: d2_img,
  },
  {
    id: 9,
    name: "Watermelon drink",
    category: "drink",
    image: d3_img,
  },
  {
    id: 10,
    name: "Mango drink",
    category: "drink",
    image: d4_img,
  },
  {
    id: 11,
    name: "Pinapple drink",
    category: "drink",
    image: d5_img,
  },
  {
    id: 12,
    name: "Orange drink",
    category: "drink",
    image: d6_img,
  },

  {
    id: 13,
    name: "Omelette",
    category: "egg",
    image: egg1_img,
  },

  {
    id: 14,
    name: "Egg curry",
    category: "egg",
    image: egg2_img,
  },
  {
    id: 15,
    name: "Egg chaat",
    category: "egg",
    image: egg3_img,
  },
  {
    id: 16,
    name: "Shakshuka",
    category: "egg",
    image: egg4_img,
  },
  {
    id: 17,
    name: "Omelette Curry",
    category: "egg",
    image: egg5_img,
  },
  {
    id: 18,
    name: "Egg Bonda",
    category: "egg",
    image: egg6_img,
  },
  {
    id: 19,
    name: "Pasta carbonara",
    category: "pasta",
    image: p1_img,
  },

  {
    id: 20,
    name: "Pasta puttanesca",
    category: "pasta",
    image: p2_img,
  },
  {
    id: 21,
    name: "Muffuletta Pasta",
    category: "pasta",
    image: p3_img,
  },
  {
    id: 22,
    name: "Penne alla vodka",
    category: "pasta",
    image: p4_img,
  },
  {
    id: 23,
    name: "Cacio e pepe",
    category: "pasta",
    image: p5_img,
  },
  {
    id: 24,
    name: "Pasta bolognese",
    category: "pasta",
    image: p6_img,
  },
  {
    id: 25,
    name: "Pepperoni",
    category: "pizza",
    image: pz1_img,
  },

  {
    id: 26,
    name: "Margherita",
    category: "pizza",
    image: pz2_img,
  },
  {
    id: 27,
    name: "Sausage",
    category: "pizza",
    image: pz3_img,
  },
  {
    id: 28,
    name: "Mushroom",
    category: "pizza",
    image: pz4_img,
  },
  {
    id: 29,
    name: "Onion",
    category: "pizza",
    image: pz5_img,
  },
  {
    id: 30,
    name: "Black Olive",
    category: "pizza",
    image: pz6_img,
  },
  {
    id: 31,
    name: "Greek salad",
    category: "salad",
    image: s1_img,
  },

  {
    id: 32,
    name: "Caesar salad",
    category: "salad",
    image: s2_img,
  },
  {
    id: 33,
    name: "Cobb salad",
    category: "salad",
    image: s3_img,
  },
  {
    id: 34,
    name: "Salad Niçoise",
    category: "salad",
    image: s4_img,
  },
  {
    id: 35,
    name: "Blunkett salad",
    category: "salad",
    image: s5_img,
  },
  {
    id: 36,
    name: "Chickpea salad",
    category: "salad",
    image: s6_img,
  },
  // new data
  {
    id: 37,
    name: "Rasmalai",
    category: "cake",
    image: c7_img,
  }, 
  {
    id: 38,
    name: "Red Velvet",
    category: "cake",
    image: c8_img,
  }, 
  {
    id: 39,
    name: "Mix Fruit",
    category: "drink",
    image: d7_img,
  }, 
  {
    id: 40,
    name: "Chiku",
    category: "drink",
    image: d8_img,
  }, 
  {
    id: 41,
    name: "Scotch Egg",
    category: "egg",
    image: egg7_img,
  }, 
  {
    id: 42,
    name: "Fried Egg",
    category: "egg",
    image: egg8_img,
  }, 
  {
    id: 43,
    name: "One-Pot Garlic and Lemon Pasta",
    category: "pasta",
    image: p7_img,
  }, 
  {
    id: 44,
    name: "Shrimp Scampi",
    category: "pasta",
    image: p8_img,
  }, 
  {
    id: 45,
    name: "Greek pizza",
    category: "pizza",
    image: pz7_img,
  }, 
  {
    id: 46,
    name: "Sicilian pizza",
    category: "pizza",
    image: pz8_img,
  }, 
  {
    id: 47,
    name: "Italian salad",
    category: "salad",
    image: s6_img,
  }, 
  {
    id: 48,
    name: "Salad Niçoise",
    category: "salad",
    image: s6_img,
  }, 
];
export default all_food;
