import React, { Component } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./components/NavBar/Container";
import HotelDetails from "./components/Hotel/HotelDetails";
import Cart from "./components/Cart/Cart";

const ITEM_ARRAY = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n15vckntsiboiod3gpco",
    hotel_name: "Asha Tiffins",
    rating: "4.4",
    type: "Indian, South Indian",
    address: "HSR Layout 6.6 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9b36413c755d072ec34619ee585bef4",
    hotel_name: "The Rameshwaram Cafe",
    rating: "4.5",
    type: "South Indian",
    address: "J P Nagar 0.8 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fluwgkiakt00h0k4pldf",
    hotel_name: "SN Refreshments",
    rating: "4.6",
    type: "South Indian",
    address: "J P Nagar 0.2 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0bcdca61f3cd1e9135b98328593d044f",
    hotel_name: "Cafe Amudham",
    rating: "4.6",
    type: "South Indian, Snacks",
    address: "Jayanagar 5.0 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r5goc0gi5ydsdhmuajxl",
    hotel_name: "Arogya Ahaara",
    rating: "4.3",
    type: "South Indian, North Indian",
    address: "J P Nagar 0.8 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qz6bnyiainw6carl2vei",
    hotel_name: "Davanagere Benne Dose",
    rating: "4.2",
    type: "South Indian",
    address: "Jayanagar 2.0 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2beebd3688e63e027ee8a11c1c8a72c8",
    hotel_name: "Chaayos",
    rating: "4.3",
    type: "Bakery, Beverages",
    address: "Jayanagar 2.2 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cdba173526421253fadacfcc3b7ff9f2",
    hotel_name: "SLV Ragigudda",
    rating: "4.3",
    type: "South Indian, Snacks",
    address: "Jaya Nagar 1.8 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uktucklobmifzou9drks",
    hotel_name: "Dose Of Davangere",
    rating: "4.3",
    type: "South Indian",
    address: "Jaya Nagar 1.7 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ck6nvlnsvhdgyhkxujtu",
    hotel_name: "154 Breakfast Club",
    rating: "4.3",
    type: "American, Continental",
    address: "J P Nagar 1.3 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbpwtyy08vavft4vqb7s",
    hotel_name: "Jose Mess",
    rating: "4.3",
    type: "Indian",
    address: "Tavarekere 4.9 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wet9zrjusmdtkk16jlrz",
    hotel_name: "Puliyogare Point",
    rating: "4.5",
    type: "South Indian",
    address: "Basavanagudi 5.0 km",
    foods: [
      {
        id: "1a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "1b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "1c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "1d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "1e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "1f",
        food_name: "Dahi Vada",
        price: 100,
        desc: "An extremely popular and tasty street food snack recipe made with urad dal fritters and dipped soaked in spiced creamy yoghurt sauce. it is one of the popular street food of north india, if not of whole india and is often served as dessert snack.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a4e1bbf906ea8be9bc738e083c01e41e"
      }
    ]
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ITEM_ARRAY,
      cart : [],
      totalQuantity : 0,
      totalPrice : 0
    };
  }

  addToCartHandler =(item)=> {
    console.log(item.id);
    const {cart, totalQuantity} = this.state;
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    console.log(existingItem);
    if(existingItem) {
      


      
    } else {
      this.setState({
        cart : [item , ...cart],
        totalQuantity : totalQuantity + 1
      })
      console.log("item added successfully");
    }

  }
  render() {
    return (
      <Router>
        <div className="page-layout">
          <NavBar totalQuantity={this.state.totalQuantity}/>
          <div className="content-section">
            <Routes>
              <Route path="/" element={<Container data={this.state.data} />} />
              <Route
                path="/:id"
                element={<HotelDetails data={this.state.data} handleAddToCart={this.addToCartHandler}/>}
              />
              <Route path="/cart" element={<Cart data={this.state.cart}/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
