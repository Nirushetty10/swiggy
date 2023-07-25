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
        food_name: "Kesari Bath.",
        price: 35,
        desc: "delicious kesaribath.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mgpuoj62zphcmsgwqztk"
      },
      {
        id: "1b",
        food_name: "Special Mini Tiffin",
        price: 139,
        desc: "Vada (2 pcs), pongal (250 grm), masala dosa.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aoytbo4lo4ftcemuvvzr"
      },
      {
        id: "1c",
        food_name: "Bisi Bele Bath",
        price: 69,
        desc: "Served with boondi only.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/oisdlnma2wlb5xbw8mcj"
      },
      {
        id: "1d",
        food_name: "Idli (2 Pcs)",
        price: 49,
        desc: "Served with chutney & sambar.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/iyhixkvgcssweqmvesfk"
      },
      {
        id: "1e",
        food_name: "Masala Dosa",
        price: 59,
        desc: "Served with chutney & sambar.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bjfm55y7bhcglmye97m9"
      },
      {
        id: "1f",
        food_name: "Chow Chow Bath",
        price: 69,
        desc: "Served with chutney only.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uwkfmryoucs4qzbec9hg"
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
        id: "2a",
        food_name: "Akki Roti",
        price: 95,
        desc: "Akki Roti is a delicious spicy flat bread from Karnataka that is made from rice flour. The akki roti makes a great vegan and gluten free breakfast option. Made from rice flour, shredded vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/49d1b67aafe6af6bbf35f46e09e64e58"
      },
      {
        id: "2b",
        food_name: "Ragi Roti",
        price: 95,
        desc: "Ragi (aka. finger millet and nachani), which is known to be rich in nutrients and beneficial to Diabetics, is best enjoyed as Ragi Roti. Ragi roti’s soft and crisp texture combined with taste and flavor makes it one of tastiest healthy.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1382b5e410ecc41fb8915d5ee1b38298"
      },
      {
        id: "2c",
        food_name: "Gongura Rice ( Hand Tossed)",
        price: 140,
        desc: "It is a tangy, spicy, and lip-smacking rice dish made with gongura leaves and basic South Indian tempering ingredients.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c7261b006c0eed4a36d1796e062ac991"
      },
      {
        id: "2d",
        food_name: "Puliogare",
        price: 95,
        desc: "An authentic and traditional rice-based recipe made with tamarind extract and dry spices. it is perhaps an unofficial lunch box staple in karnataka, if not in entire south indian states.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03ebb48e2769a9b16537a949cdae1422"
      },
      {
        id: "2e",
        food_name: "Vada (2 ) With Chutney Only",
        price: 60,
        desc: "Uddina Vada or Medu Vada is a popular South Indian breakfast item. Medu vada is a savory donut made from urad dal or black lentils. Uddina vadas are crispy and golden brown on the outside and soft and spongy on the inside. They taste best with fresh coconut chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b37bfa01472cdd15c38b879c82f2bed0"
      },
      {
        id: "2f",
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
        id: "3a",
        food_name: "Idly (2) With Chutney Only",
        price: 60,
        desc: "Serves 1 | Super-soft steamed rice cakes, the perfectly healthy option; served with chutney and sambhar.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gyx1daedvezxo882x4mq"
      },
      {
        id: "3b",
        food_name: "Masala Dosa With Chutney Only",
        price: 85,
        desc: "Serves 1 | Crispy and delicious dosa, folded in with masala and served with chutney",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zk9nhfxlrgxmzlitumzb"
      },
      {
        id: "3c",
        food_name: "Khara Bath",
        price: 45,
        desc: "Serves 1 | An indulgent preparation made from upma rava cooked in lots of ghee and oil with vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/w3x3uwgzocczy9nsajx2"
      },
      {
        id: "3d",
        food_name: "Vada (1) With Chutney And Sambar",
        price: 45,
        desc: "Serves 1 | A delectable meal with crunchy vada ; served along with a subtly spiced chutney and the all time favorite sambhar.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v4k4kbr1brti1rihibaz"
      },
      {
        id: "3e",
        food_name: "Idly (2) With Chutney Only",
        price: 60,
        desc: "Serves 1 | Super-soft steamed rice cakes, the perfectly healthy option; served with chutney and sambhar.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gyx1daedvezxo882x4mq"
      },
      {
        id: "3f",
        food_name: "Khara Bath",
        price: 45,
        desc: "Serves 1 | An indulgent preparation made from upma rava cooked in lots of ghee and oil with vegetables and spices.",
        image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/w3x3uwgzocczy9nsajx2"
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
      totalPrice : 0,
      orderNotification : 0,
      searchValue : ""
    };
  }

  addToCartHandler =(item)=> {
    const {cart, totalQuantity, totalPrice} = this.state;
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if(existingItem) {
       existingItem.quantity++;
       existingItem.total += existingItem.price;
       this.setState({
        totalPrice : totalPrice + item.price
      })
    } else {
      this.setState({
        cart : [item , ...cart],
        totalQuantity : totalQuantity + 1,
        totalPrice : totalPrice + item.price
      })
    }
  }

  handleDecreaseQuantity =(id)=> {
    const {cart, totalQuantity, totalPrice} = this.state;
    const item = cart.find(value => value.id === id);
    if(item.quantity === 1 ) {
      const filteredState = cart.filter(item => item.id !== id);
      this.setState({
        cart : filteredState,
        totalQuantity: totalQuantity-1,
        totalPrice : totalPrice - item.price
      });
      return;
    }
    item.total -= item.price;
    item.quantity--;
    this.setState({
      totalPrice : totalPrice - item.price 
    })
  }

  handleIncreaseQuantity = (id) => {
    const {cart, totalPrice} = this.state;
    const item = cart.find(value => value.id === id);
    item.total += item.price;
    item.quantity++;
    this.setState({
      totalPrice : totalPrice + item.price 
    })
  }

  placedOrderHandler = ()=> {
    this.setState({
      cart : [],
      totalQuantity : 0,
      totalPrice : 0
    })
  }

  notificationHandler = () => {
    const {orderNotification} = this.state;
    this.setState({
      orderNotification : orderNotification + 1
    })
  }

  setSearchValueHandler = (value)=> {
    this.setState({
      searchValue : value
    })
  }

  render() {
    const {searchValue} = this.state;
    const filteredData = this.state.data.filter(item => {
       return (item.hotel_name.toLocaleLowerCase().includes(searchValue) || item.type.toLocaleLowerCase().includes(searchValue) || item.address.toLocaleLowerCase().includes(searchValue));
    })
    return (
      <Router>
        <div className="page-layout">
          <NavBar totalQuantity={this.state.totalQuantity} orderNotification={this.state.orderNotification} searchValueHandler={this.setSearchValueHandler}/>
          <div className="content-section">
            <Routes>
              {searchValue.length === 0 && <Route path="/" element={<Container data={this.state.data} />} />}
              {searchValue.length > 0 && <Route path="/" element={<Container data={filteredData} />} />}
              <Route
                path="/:id"
                element={<HotelDetails data={this.state.data} handleAddToCart={this.addToCartHandler}/>}
              />
              <Route path="/cart" element={<Cart data={this.state.cart} total={this.state.totalPrice} decreaseQuantity={this.handleDecreaseQuantity} increaseQuantity={this.handleIncreaseQuantity} handleOrder={this.placedOrderHandler} handleNotification={this.notificationHandler}/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
