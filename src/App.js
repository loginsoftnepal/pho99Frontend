import React, { useState } from 'react';
import './App.css';
import { useRef,useEffect } from 'react';

import logo from './img/logo.png';
import Button from './component/button';
import { useMediaQuery } from 'react-responsive';

import PhoAdd from './img/phopopupnew.jpg';
import Home from './component/home';
import About from './component/about';
import Gallery from './component/gallery';
import Menu from './component/menu';
import News from './component/news';
import Event from './component/event';
import Location from './component/location';
import Contact from './component/contact';
import Vacancy from './component/vacancy';

import aboutimg from './img/aboutimg.png';
import homeimg from './img/homeimg.png';

import one from './img/menu/3.png';
import g1 from './img/g1.jpg';
import g2 from './img/g2.jpg';
import g3 from './img/g3.jpg';
import g4 from './img/g7.jpg';
import g5 from './img/g5.jpg';
import g6 from './img/g6.jpg';
import g7 from './img/g4.jpg';
import g8 from './img/IMG20230529122611.jpg'
import g9 from './img/IMG20230529122621.jpg';
import g10 from './img/IMG20230529123326.jpg';
import g11 from './img/IMG20230529123412.jpg';
import g12 from './img/IMG20230529123553.jpg';
import g13 from './img/IMG20230529123606.jpg';

import l1 from './img/jhamsikhel.jpg';
import l2 from './img/lazimpat.jpg';
import l3 from './img/boudha.jpg';

import img0 from './img/menu/0.png';
import img1 from './img/menu/1.png';
import img2 from './img/menu/2.png';
import img3 from './img/menu/3.png';
import img4 from './img/menu/4.png';
import img5 from './img/menu/5.png';
import img6 from './img/menu/6.png';
import img7 from './img/menu/7.png';
import img8 from './img/menu/8.png';
import img9 from './img/menu/9.png';
import img10 from './img/menu/10.png';
import img11 from './img/menu/11.png';
import img12 from './img/menu/12.png';
import img13 from './img/menu/13.png';
import img14 from './img/menu/14.png';
import img15 from './img/menu/15.png';
import img16 from './img/menu/16.png';
import img17 from './img/menu/17.png';
import img18 from './img/menu/18.png';
import img19 from './img/menu/19.png';
import img20 from './img/menu/20.png';
import img21 from './img/menu/21.png';
import img22 from './img/menu/22.png';
import img23 from './img/menu/23.png';
import img24 from './img/menu/24.png';
import img25 from './img/menu/25.png';
import img26 from './img/menu/26.png';
import img27 from './img/menu/27.png';
import img28 from './img/menu/28.png';
import img29 from './img/menu/29.png';
import img30 from './img/menu/30.png';
import img31 from './img/menu/31.png';
import img32 from './img/menu/32.png';
import img33 from './img/menu/33.png';
import img34 from './img/menu/34.png';
import img35 from './img/menu/35.png';
import img36 from './img/menu/36.png';
import img37 from './img/menu/37.png';
import img38 from './img/menu/38.png';
import img39 from './img/menu/39.png';
import img40 from './img/menu/40.png';
import img41 from './img/menu/41.png';
import img42 from './img/menu/42.png';
import img43 from './img/menu/43.png';
import img44 from './img/menu/44.png';
import img45 from './img/menu/45.png';
import img46 from './img/menu/46.png';
import img47 from './img/menu/47.png';
import img48 from './img/menu/48.png';
import img49 from './img/menu/49.png';
import img50 from './img/menu/50.png';
import img51 from './img/menu/51.png';
import img52 from './img/menu/52.png';
import img53 from './img/menu/53.png';
import img54 from './img/menu/54.png';
import img55 from './img/menu/55.png';
import img56 from './img/menu/56.png';
import img57 from './img/menu/57.png';
import img58 from './img/menu/58.png';
import img59 from './img/menu/59.png';
import img60 from './img/menu/60.png';
import img61 from './img/menu/61.png';
import img62 from './img/menu/62.png';
import img63 from './img/menu/63.png';
import img64 from './img/menu/64.png';
import img65 from './img/menu/65.png';
import img66 from './img/menu/66.png';
import img67 from './img/menu/67.png';
import img68 from './img/menu/68.png';
import img69 from './img/menu/69.png';
import img70 from './img/menu/70.png';
import img71 from './img/menu/71.png';
import img72 from './img/menu/72.png';
import img73 from './img/menu/73.png';
import img74 from './img/menu/74.png';
import img75 from './img/menu/75.png';
import img76 from './img/menu/76.png';
import img77 from './img/menu/77.png';
import img78 from './img/menu/78.png';
import img79 from './img/menu/79.png';
import img80 from './img/menu/80.png';
import img81 from './img/menu/81.png';
import img82 from './img/menu/82.png';
import img83 from './img/menu/83.png';
import img84 from './img/menu/84.png';
import img85 from './img/menu/85.png';
import img86 from './img/menu/86.png';
import img87 from './img/menu/87.png';
import img88 from './img/menu/88.png';
import img89 from './img/menu/89.png';
import img90 from './img/menu/90.png';
import img91 from './img/menu/91.png';
import img92 from './img/menu/92.png';
import img93 from './img/menu/93.png';
import img94 from './img/menu/94.png';
import img95 from './img/menu/95.png';
import img96 from './img/menu/96.png';
import img97 from './img/menu/97.png';
import img98 from './img/menu/98.png';
import img99 from './img/menu/99.png';
import img100 from './img/menu/100.png';
import img101 from './img/menu/101.png';
import img102 from './img/menu/102.png';
import img103 from './img/menu/103.png';
import img104 from './img/menu/104.png';
import img105 from './img/menu/105.png';
import img106 from './img/menu/106.png';
import img107 from './img/menu/107.png';
import img108 from './img/menu/108.png';
import img109 from './img/menu/109.png';
import img110 from './img/menu/110.png';
import img111 from './img/menu/111.png';
import img112 from './img/menu/112.png';
import img113 from './img/menu/113.png';
import img114 from './img/menu/114.png';
import img115 from './img/menu/115.png';
import img116 from './img/menu/116.png';
import img117 from './img/menu/117.png';
import img118 from './img/menu/118.png';
import img119 from './img/menu/119.png';
import img120 from './img/menu/120.png';
import img121 from './img/menu/121.png';
import img122 from './img/menu/122.png';
import img123 from './img/menu/123.png';
import img124 from './img/menu/124.png';

import n1 from './img/n1.jpg';
import n2 from './img/n2.jpg';
import n3 from './img/n3.jpg';

import e1 from './img/e1.jpg';
import e2 from './img/e2.jpg';
import e3 from './img/e3.jpg';

function App() {

  const data = [
    {
      title: "Savor Vietnam's best Pho, made with love.",
      content: "Experience Pho's taste of traditional Vietnam food with every spoonful at our Pho99 restaurant.",
      button: "See Menu",
      img: homeimg,
    },
    {
      title: "Our Story",
      content: "Our Vietnamese restaurant is rooted in a love for sharing the authentic flavors of our culture through fresh, traditional dishes. Come savor the stories of Vietnam with us.",
      button: "Learn More",
      img: aboutimg,
    },
    {
      title: "Our Gallery",
      content: "Discover the artistry and care that goes into each plate before you even take your first bite.",
      button: "See More",
    },
    {
      title: "Our Menu",
      content: "Savor the vibrant and authentic flavors of Vietnam with our carefully curated menu, featuring classic dishes and regional specialties.",
      button: "See More",
    },
    {
      title: "News",
      content: "Find out what's new and exciting at our Vietnamese restaurant, from seasonal specials to collaborations and beyond.",
    },
    {
      title: "Events",
      content: "Experience the best of Vietnamese culture and cuisine through our calendar of events, featuring unique opportunities to learn, taste, and celebrate.",
    },
    {
      title: "Location",
      content: "Discover the authentic taste of Vietnam at our restaurant, conveniently located in Kathmandu, where we bring the vibrant flavors of Vietnam to your table.",
    },
    {
      title: "Contact Us",
      email: "pho99info@gmail.com",
      phone: "9803203119",
    },
    {
      title: "Vacancy",
      content: "Join our culinary family and experience a rewarding career in the art of flavors",
      button: "Send CV",
    },
  ];

  const aboutdata = [
    {
      img: aboutimg,
      title:"About Us",
      content:"Pho99 Nepal serves authentic Vietnamese food. Vietnamese dishes are typically prepared with fresh herbs such as cilantro, ginger, lemongrass, mint, and basil, and often served with fish sauce, shrimp paste, or soybean sauce on the side. Because Vietnamese food is cooked with minimal oil, select spices, and fresh ingredients, it is considered one of the healthiest cuisines in the world. Pho99 Nepal reflects the amazing food culture of Vietnam, which says you don’t have to go looking for great food - great food finds you! You never go hungry in Vietnam. Great food is everywhere; street corners, alleyways, outdoor cafes, or served in the finest restaurants or from street food carts. Pho99 currently has three locations. One is in expat community area of Jhamsikhel, Lalitpur, another is located at prime location of Lazimpat, right across from hotel Shangri-La while the third one is situated right at Boudhnath stupa, a World Heritage Site; when you enter from the main gate of Stupa, you will find it right on your left after 5 to 6 shops.  All our locations have simple yet inviting decor awaits you - do visit us soon!",
    }
  ];

  const gallerydata = [
    {
      img: g1,
    },
    {
      img: g2,
    },
    {
      img: g3,
    },
    {
      img: g4,
    },
    {
      img: g5,
    },
    {
      img: g6,
    },
    {
      img: g7,
    },
    {
      img: g8,
    },
    {
      img: g9,
    },
    {
      img: g10,
    },
    {
      img: g11,
    },
    {
      img: g12,
    },
    {
      img: g13,
    }
  ];

  const moremenudata = [
    {
      img: img0,
      name: "Goi Cuon Tau Hu",
      price: "300",
      content: "(Tofu summer rolls)",
    },
    {
      img: img1,
      name: "Goi Cuon Ga/Heo",
      price: "360",
      content: "(Chicken/Pork summer rolls)",
    },
    {
      img: img2,
      name: "Goi Cuon Tep",
      price: "380",
      content: "(Shrimp summer rolls)",
    },
    {
      img: img3,
      name: "Cha Gio Chien Rau Cai/Ga",
      price: "300/360",
      content: "Deep fried spring roll w/vege/chicken",
    },
    {
      img: img4,
      name: "Deep Fried Pork Spring Rolls",
      price: "360",
      content: "",
    },
    {
      img: img5,
      name: "Deep Fried Shrimp Rolls",
      price: "400",
      content: "",
    },
    {
      img: img6,
      name: "Nem Lui",
      price: "400",
      content: "Lemongrass skewer w/ minced pork",
    },
    {
      img: img7,
      name: "Quanh Thanh Chien Rau/ Ga",
      price: "330/370",
      content: "Deep fried wontons w/ vege/ chicken",
    },
    {
      img: img8,
      name: "Stir Fried Crispy & Spicy Shrimps",
      price: "850",
      content: "(8 pcs)",
    },
    {
      img: img9,
      name: "Spicy Pork Slices",
      price: "400",
      content: "",
    },
    {
      img: img10,
      name: "Crispy Fried Spicy Chicken",
      price: "400",
      content: "",
    },
    {
      img: img11,
      name: "Goi Du Du",
      price: "430",
      content: "Green papaya salad",
    },
    {
      img: img12,
      name: "Goi Ga Nuong",
      price: "450",
      content: "Grilled chicken salad",
    },
    {
      img: img13,
      name: "Bo Tron Cu Hanh",
      price: "630",
      content: "Grilled beef salad",
    },
    {
      img: img14,
      name: "Green Papaya Salad w/ Dried Beef",
      price: "600",
      content: "",
    },
    {
      img: img15,
      name: "Goi Tau Hu Tron Mien",
      price: "430",
      content: "Tofu salad w/ glass noodles",
    },
    {
      img: img16,
      name: "Goi Ga Tron Mien",
      price: "450",
      content: "Chicken salad w/ glass noodles",
    },
    {
      img: img17,
      name: "Goi Tep Tron Mien",
      price: "650",
      content: "Shrimp salad w/ glass noodles",
    },
    {
      img: img18,
      name: "Canh Ga Nuong Sa",
      price: "430",
      content: "(Chicken Wings 4pcs)",
    },
    {
      img: img19,
      name: "Dui Ga Nuong Sa",
      price: "430",
      content: "(Chicken Drumsticks 2pcs)",
    },
    {
      img: img20,
      name: "Suong Heo Non Nuong Sa",
      price: "550",
      content: "(Pork Ribs 4pcs)",
    },
    {
      img: img21,
      name: "Suong Heo Be Nuong Sa",
      price: "550",
      content: "(Pork Chops 2pcs)",
    },
    {
      img: img22,
      name: "Ga Lui Nuong Sa",
      price: "480",
      content: "(Chicken Sticks 4pcs)",
    },
    {
      img: img23,
      name: "Heo Lui Nuong Sa",
      price: "480",
      content: "(Pork Sticks 4pcs)",
    },
    {
      img: img24,
      name: "Bo Lui Nuong Sa",
      price: "550",
      content: "(Beef Sticks 4pcs)",
    },
    {
      img: img25,
      name: "Tom Luoi Nuong Sa",
      price: "580",
      content: "(Shrimp Sticks 4pcs)",
    },
    {
      img: img26,
      name: "Ca Lui Nuong Sa",
      price: "580",
      content: "(Fish Sticks 4pcs)",
    },
    {
      img: img27,
      name: "Ga Nuong Mia",
      price: "550",
      content: "(Chicken Sugarcane Sticks 4pcs)",
    },
    {
      img: img28,
      name: "Pho Tron w/ tofu",
      price: "600",
      content: "(Cold noodle w/ tofu)",
    },
    {
      img: img29,
      name: "Pho Tron Thit Heo/ Ga Nuong",
      price: "700",
      content: "Cold noodle w/ BBQ pork/ chic",
    },
    {
      img: img30,
      name: "Pho Tron Thit Heo/ Ga Va Tom Nuong",
      price: "750",
      content: "Cold noodle w/ BBQ pork/ chic & shrimp",
    },
    {
      img: img31,
      name: "Pho Tron Thit w/ beef",
      price: "750",
      content: "(Cold noodle w/ beef)",
    },
    {
      img: img32,
      name: "Bun Cha w/ Pork",
      price: "850",
      content: "Served with rice noodles and fish sauce pickles",
    },
    {
      img: img33,
      name: "Thit De Xau Xa Ot",
      price: "1060",
      content: "Deep fried boneless mutton w/ chili & lemongrass.",
    },
    {
      img: img34,
      name: "Thit De Xao Cu Hanh",
      price: "1060",
      content: "Stir Fried boneless mutton w/ onion.",
    },
    {
      img: img35,
      name: "Thit De Hap Gung",
      price: "1060",
      content: "Steamed boneless mutton w/ ginger & onion served w/ fish sauce",
    },
    {
      img: img36,
      name: "Pho Rau Cai",
      price: "499",
      content: "(Veg Pho)",
    },
    {
      img: img37,
      name: "Pho Tau Hu",
      price: "499",
      content: "(Tofu Pho)",
    },
    {
      img: img38,
      name: "Pho Ga",
      price: "550",
      content: "(Chicken Pho)",
    },
    {
      img: img39,
      name: "Pho Thit Heo",
      price: "550",
      content: "(Pork Pho)",
    },
    {
      img: img40,
      name: "Pho Bo",
      price: "650",
      content: "(Beef Pho)",
    },
    {
      img: img41,
      name: "Pho Tep",
      price: "700",
      content: "(Shrimp Pho)",
    },
    {
      img: img42,
      name: "Special Pho",
      price: "850",
      content: "(Beef, Pork, Chicken, Fish)",
    },
    {
      img: img43,
      name: "Seaffod Pho",
      price: "850",
      content: "(Fish, Squid, Crab Sticks, Srimps)",
    },
    {
      img: img44,
      name: "Mien Tep",
      price: "750",
      content: "(Shrimp glass noodle soup)",
    },
    {
      img: img45,
      name: "Mien Vit",
      price: "750",
      content: "(Duck glass noodle)",
    },
    {
      img: img46,
      name: "Mien Dac Biet",
      price: "850",
      content: "(Special glass noodle soup)",
    },
    {
      img: img47,
      name: "Mien Hai San",
      price: "850",
      content: "(Seafood glass noodle soup)",
    },
    {
      img: img48,
      name: "Chicken/ Pork Glass Noodle Soup",
      price: "650",
      content: "",
    },
    {
      img: img49,
      name: "Rau Cai Xao Thit Ga/ Com",
      price: "650",
      content: "Stir fried mixed vegetables w/ chicken or pork",
    },
    {
      img: img50,
      name: "Rau Cai Xao Tep",
      price: "700",
      content: "(Shrimps)",
    },
    {
      img: img51,
      name: "Rau Cai Xao Thit Bo/ Com",
      price: "670",
      content: "Stir fried mixed vegetables w/ beef",
    },
    {
      img: img52,
      name: "Rau Cai Xao Tau Hu",
      price: "550",
      content: "(Tofu)",
    },
    {
      img: img53,
      name: "Hu Tieu Xao Tau Hu",
      price: "495",
      content: "Stir fried rice noodles w/ tofu",
    },
    {
      img: img54,
      name: "Hu Tieu Xao Thit Ga",
      price: "550",
      content: "Stir fried rice noodles w/ chicken/ pork",
    },
    {
      img: img55,
      name: "Hu Tieu Xao Thit Bo",
      price: "630",
      content: "Stir fried rice noodles w/ beef",
    },
    {
      img: img56,
      name: "Hu Tieu Xao Tep",
      price: "680/700",
      content: "Stir fried rice noodles w/ shrimp",
    },
    {
      img: img57,
      name: "Vit Lagu",
      price: "850",
      content: "(Duck stew)",
    },
    {
      img: img58,
      name: "Vit Kho Gung",
      price: "850",
      content: "Duck stew w/ ginger",
    },
    {
      img: img59,
      name: "Vit Kho Mang Tuoi",
      price: "950",
      content: "Duck stew w/ fresh bamboo shoots",
    },
    {
      img: img60,
      name: "Bo Lagu",
      price: "799",
      content: "(Beef stew)",
    },
    {
      img: img61,
      name: "Thit Heo Kho Gung",
      price: "750",
      content: "Pork stew boiled egg w/ ginger and onions",
    },
    {
      img: img62,
      name: "Ca Kho Gung",
      price: "750",
      content: "Fish stew w/ ginger and onions",
    },
    {
      img: img63,
      name: "Vietnamese Tofu Curry",
      price: "495",
      content: "",
    },
    {
      img: img64,
      name: "Vietnamese Chicken or Pork Curry",
      price: "595",
      content: "",
    },
    {
      img: img65,
      name: "Vietnamese Shrimp Curry",
      price: "699",
      content: "",
    },
    {
      img: img66,
      name: "Vietnamese Fish Curry",
      price: "680",
      content: "",
    },
    {
      img: img67,
      name: "Seafood Curry",
      price: "750",
      content: "",
    },
    {
      img: img68,
      name: "Com Suong Be Nuong Sa",
      price: "700",
      content: "Grilled pork chops w/ rice",
    },
    {
      img: img69,
      name: "Com Suong Non Nuong Sa",
      price: "700",
      content: "Grilled pork ribs w/ rice",
    },
    {
      img: img70,
      name: "Com Uc Ga Nuong",
      price: "680",
      content: "Grilled boneless chicken breast w/ rice",
    },
    {
      img: img71,
      name: "Com Dui Ga Nuong Sa",
      price: "599",
      content: "Grilled chicken drumsticks w/ rice",
    },
    {
      img: img72,
      name: "Com Canh Ga Nuong Sa",
      price: "599",
      content: "Grilled chicken wings w/ rice",
    },
    {
      img: img73,
      name: "Com Thit Bo Xao Ca Va Can",
      price: "700",
      content: "Stir fried beef w/ celery ,tomato and cucumber in gravy sauce.",
    },
    {
      img: img74,
      name: "Com Thit Bo Luc Lac",
      price: "700",
      content: "Stir fried beef in gravy served w/ steam rice",
    },
    {
      img: img75,
      name: "Ga Xao Can",
      price: "650",
      content: "Stir fried chicken w/ celery tomato and celery in gravy",
    },
    {
      img: img76,
      name: "Egg Plant w/ Tofu Extract (Ca Fim Bing)",
      price: "650",
      content: "Served with steam rice",
    },
    {
      img: img77,
      name: "Caramelized & Stewed Pork Belly (Thit Kho Tau)",
      price: "650",
      content: "Served w/ steam white rice or bun noodles",
    },
    {
      img: img78,
      name: "Hoi An Chicken w/ Rice",
      price: "850",
      content: "",
    },
    {
      img: img79,
      name: "Tep Xao Can",
      price: "750",
      content: "Stir fried shrimp w/ cucumber, tomato and celery",
    },
    {
      img: img80,
      name: "Thit Heo Xao Sa",
      price: "650",
      content: "Stir fried pork w/ lemongrass",
    },
    {
      img: img81,
      name: "Tofu Chilli",
      price: "399",
      content: "",
    },
    {
      img: img82,
      name: "Chicken Chilli",
      price: "469",
      content: "",
    },
    {
      img: img83,
      name: "Pork Chilli",
      price: "469",
      content: "",
    },
    {
      img: img84,
      name: "Beef Chilli",
      price: "549",
      content: "",
    },
    {
      img: img85,
      name: "Shrimp Chilli",
      price: "669",
      content: "",
    },
    {
      img: img86,
      name: "Boneless Duck Chilli",
      price: "669",
      content: "",
    },
    {
      img: img87,
      name: "Vegetable Fried Rice",
      price: "500",
      content: "",
    },
    {
      img: img88,
      name: "Chicken/ Pork Fried Rice",
      price: "450",
      content: "",
    },
    {
      img: img89,
      name: "Shrimp Fried Rice",
      price: "600",
      content: "",
    },
    {
      img: img90,
      name: "Seafood Fried Rice",
      price: "700",
      content: "",
    },
    {
      img: img91,
      name: "Ca Basa Hap Hanh",
      price: "1050",
      content: "Steamed boneless basa fish w/ ginger and onions",
    },
    {
      img: img92,
      name: "Ca Basa Nuong Gung",
      price: "1050",
      content: "Grilled boneless basa fish w/ ginger and onions",
    },
    {
      img: img93,
      name: "Ca Basa Hap Voi Nam",
      price: "1050",
      content: "Steamed boneless basa fish w/ mushrooms",
    },
    {
      img: img94,
      name: "Ca Basa Nuong Voi Nam",
      price: "1050",
      content: "Grilled boneless fish w/ mushrooms",
    },
    {
      img: img95,
      name: "Ca Basa Hap Voi Cai Xanh/ Trang",
      price: "1050",
      content: "Steamed boneless fish w/ bok choi",
    },
    {
      img: img96,
      name: "Tau Hu Chua Ngot",
      price: "400",
      content: "(Sweet & Sour Tofu)",
    },
    {
      img: img97,
      name: "Ga Chua Ngot",
      price: "570",
      content: "(Sweet & Sour Chicken)",
    },
    {
      img: img98,
      name: "Heo Chua Ngot",
      price: "570",
      content: "(Sweet & Sour Pork)",
    },
    {
      img: img99,
      name: "Ca Chua Ngot",
      price: "690",
      content: "(Sweet & Sour Fish)",
    },
    {
      img: img100,
      name: "Tep Chua Ngot",
      price: "700",
      content: "(Sweet & Sour Shrimp)",
    },
    {
      img: img101,
      name: "Canh Chua Tau Hu",
      price: "570",
      content: "(Sweet & Sour Soup w/ Tofu)",
    },
    {
      img: img102,
      name: "Canh Chua Thit Ga",
      price: "600",
      content: "(Sweet & Sour Soup w/ Chicken)",
    },
    {
      img: img103,
      name: "Canh Chua Thit Heo",
      price: "600",
      content: "(Sweet & Sour Soup w/ Pork)",
    },
    {
      img: img104,
      name: "Canh Chua Tep",
      price: "700",
      content: "(Sweet & Sour Soup w/ Shrimp)",
    },
    {
      img: img105,
      name: "Canh Chua Hai San",
      price: "750",
      content: "(Sweet & Sour Soup w/ Seafood)",
    },
    {
      img: img106,
      name: "Banana pudding",
      price: "370",
      content: "",
    },
    {
      img: img107,
      name: "Steamed banana w/ coconut cream",
      price: "370",
      content: "",
    },
    {
      img: img108,
      name: "Sweet corn w/ coconut cream",
      price: "370",
      content: "",
    },
    {
      img: img109,
      name: "Red bean w/ coconut cream",
      price: "370",
      content: "",
    },
    {
      img: img110,
      name: "Tapioca pudding w/ coconut cream",
      price: "370",
      content: "",
    },
    {
      img: img111,
      name: "Cream caramel flan",
      price: "370",
      content: "",
    },
    {
      img: img112,
      name: "Vietnamese hot coffee w/ condensed milk w/ or without milk",
      price: "280/220",
      content: "",
    },
    {
      img: img113,
      name: "Vietnamese Iced coffee w/ condensed milk w/ or without milk",
      price: "280/220",
      content: "",
    },
    {
      img: img114,
      name: "Hot lemon w/ honey or without",
      price: "220/110",
      content: "",
    },
    {
      img: img115,
      name: "Hot lemon w/ honey and ginger",
      price: "180",
      content: "",
    },
    {
      img: img116,
      name: "Fresh Banana/ Papaya Lassi",
      price: "220",
      content: "",
    },
    {
      img: img117,
      name: "Special Fresh Lassi",
      price: "280",
      content: "",
    },
    {
      img: img118,
      name: "Seasonal Fresh Juice",
      price: "250",
      content: "",
    },
    {
      img: img119,
      name: "Jasmine/ Lemongrass/ Black or Green Tea (P.)",
      price: "250",
      content: "",
    },
    {
      img: img120,
      name: "Iced Fresh Lemongrass",
      price: "300",
      content: "",
    },
    {
      img: img121,
      name: "Coke/ Fanta/ Sprite/ Soda",
      price: "135",
      content: "",
    },
    {
      img: img122,
      name: "Fresh Lemon soda",
      price: "140",
      content: "",
    },
    {
      img: img123,
      name: "Mineral water (Jalapa Water)",
      price: "125",
      content: "",
    },
    {
      img: img124,
      name: "Fresh Lemonade w/ Mint",
      price: "220",
      content: "",
    }
  ]

  const newsdata = [
    {
      img: n1,
      title:"Kathmandu's Top 10",
      content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
    },
    {
      img: n2,
      title:"Kathmandu's Top 10",
      content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
    },
    {
      img: n3,
      title:"Kathmandu's Top 10",
      content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
    },
    {
      img: n1,
      title:"Kathmandu's Top 10",
      content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
    },
    {
      img: n2,
      title:"Kathmandu's Top 10",
      content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
    },
    {
      img: n3,
      title:"Kathmandu's Top 10",
      content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
    },
  ];

  const eventsdata = [
    {
      img: e1,
      from:"29 Dec, 2023",
      to:"2 Jan, 2023",
      title:"Lunar New Year Celebration",
      content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
    },
    {
      img: e2,
      from:"29 Dec, 2023",
      to:"2 Jan, 2023",
      title:"Lunar New Year Celebration",
      content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
    },
    {
      img: e3,
      from:"29 Dec, 2023",
      to:"2 Jan, 2023",
      title:"Lunar New Year Celebration",
      content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
    },
    {
      img: e1,
      from:"29 Dec, 2023",
      to:"2 Jan, 2023",
      title:"Lunar New Year Celebration",
      content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
    },
    {
      img: e2,
      from:"29 Dec, 2023",
      to:"2 Jan, 2023",
      title:"Lunar New Year Celebration",
      content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
    },
    {
      img: e3,
      from:"29 Dec, 2023",
      to:"2 Jan, 2023",
      title:"Lunar New Year Celebration",
      content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
    },
  ];

  const locationsdata = [
    {
      img: [g5,g1,g2,g3,g4,l1,g6,g7],
      title:"Jhamshikhel",
      phone: '9803203119',
      contact:"For any questions and inquiries, please call us at 980-320-3119 or email us at info@pho99nepal.com",
      content:"We are located right at Thadodhunga chowk in Jhamsikhel, Lalitpur between the Sterling Apartments and Bajra &amp; Shangri-La Residency. The ambiance is cozy, with indoor as well as outdoor seating in a court yard garden under open sky surrounded by a variety of flowers and plants. There is even an upper level open deck. Our indoor seating is non-smoking and the arrangement of tables and chairs creates an elegant vibe where you can enjoy our drinks, food, and friendly service.  Parking is available right across from our restaurant in Southern side."
    },
    {
      img: [g8, g9, g10, g11, g12, g13],
      title:"Lazimpat",
      phone:"9803203119",
      contact: 'For any questions and inquiries, please call us at 980-320-3119 or email us at info@pho99nepal.com',
      content:"Our newly renovated location in Lazimpat is centrally situated in a popular area of Kathmandu. It is right across from Hotel Shangri-La - a two and a half story white building with ample parking. The redesigned interior is both vibrant and comfortable, with settings that accommodate families, friends and business gatherings.  Indoor seating is no-smoking while the balcony seating is designated for smoking. There is limited outdoor seating, where you can enjoy the flowers and plants on our terrace and a view of Hotel Shangri-La. We also have a private dining room for up to 10 people.",
    },
    {
      img: [l3],
      title:"Boudha",
      phone:"9803203119",
      contact: "For any questions and inquiries, please call us at 980-320-3119 or email us at info@pho99nepal.com",
      content: "We are located right at Boudhanath Stupa, a World Heritage site. As you enter from the main gate of Boudhanath, you will find us on your left after passing six shops. We have three and half story indoor seating, while the fourth and fifth story are open terraces, affording magnificent views of the stupa.  Except terraces, our indoor seating is no-smoking. Indoor seating is very comfortable with pleasant decor. It is a great place for groups as well as solo diners.",
    },
  ];

  const vacancydata = [ 
    {
      title: "Waiter",
      location: "Boudha",
      subtitle: "Looking for an experienced person to help us with serving our customer.",
      salary: "Negotiable",
      contact: "9803203119",
      type: "Urgent",
    }
  ]

  const container = useRef();
  const navbar = useRef();
  const home = useRef();
  const about = useRef();
  const gallery = useRef();
  const menu = useRef();
  const news = useRef();
  const events = useRef();
  const locations = useRef();
  const contact = useRef();
  const vacancy = useRef();

  const homescroll = () => {
    const homesscroll = home.current.scrollTop;
    if(homesscroll>0)
    {
      home.current.removeEventListener("scroll", homescroll);
      mabouts();
    }
  };

  const aboutscroll = () => {
    const aboutsscroll = about.current.scrollTop;
    if(aboutsscroll<10)
    {
      about.current.removeEventListener("scroll", aboutscroll);
      mhomes();
    }else if(aboutsscroll>10)
    {
      about.current.removeEventListener("scroll", aboutscroll);
      mmenus();
    }
  };

  const menuscroll = () => {
    const menusscroll = menu.current.scrollTop;
    if(menusscroll<10)
    {
      mabouts();
      menu.current.removeEventListener("scroll", menuscroll);
    }
    if(menusscroll>10)
    {
      mlocations();
      menu.current.removeEventListener("scroll", menuscroll);
    }
  };

  const locationsscroll = () => {
    const locationssscroll = locations.current.scrollTop;
    if(locationssscroll<10)
    {
      mmenus();
      locations.current.removeEventListener("scroll", locationsscroll);
    }
    if(locationssscroll>10)
    {
      mgallerys();
      locations.current.removeEventListener("scroll", locationsscroll);
    }
  };

  const galleryscroll = () => {
    const gallerysscroll = gallery.current.scrollTop;
    if(gallerysscroll<10)
    {
      gallery.current.removeEventListener("scroll", galleryscroll);
      mlocations();
    }else if(gallerysscroll>10)
    {
      gallery.current.removeEventListener("scroll", galleryscroll);
      mvacancys();
    }
  };

  const vacancyscroll = () => {
    const vacancysscroll = vacancy.current.scrollTop;
    if(vacancysscroll<10)
    {
      mgallerys();
      vacancy.current.removeEventListener("scroll", vacancyscroll);
    }
    if(vacancysscroll>10)
    {
      mnewss();
      vacancy.current.removeEventListener("scroll", vacancyscroll);
    }
  };

  const newsscroll = () => {
    const newssscroll = news.current.scrollTop;
    if(newssscroll<10)
    {
      mvacancys();
      news.current.removeEventListener("scroll", newsscroll);
    }
    if(newssscroll>10)
    {
      // meventss();
      mcontacts();
      news.current.removeEventListener("scroll", newsscroll);
    }
  };

  // const eventsscroll = () => {
  //   const eventssscroll = events.current.scrollTop;
  //   if(eventssscroll<10)
  //   {
  //     mnewss();
  //     events.current.removeEventListener("scroll", eventsscroll);
  //   }
  //   if(eventssscroll>10)
  //   {
  //     mcontacts();
  //     events.current.removeEventListener("scroll", eventsscroll);
  //   }
  // };

  const contactscroll = () => {
    const contactsscroll = contact.current.scrollTop;
    if(contactsscroll<10)
    {
      contact.current.removeEventListener("scroll", contactscroll);
      mnewss();
    }
  };

  useEffect(() => {
      const homes = home.current;
      homes.addEventListener("scroll", homescroll);
      mhomes();
      return () => {
        homes.removeEventListener("scroll", homescroll);
      };
  },[homescroll]);

  function refreshPage(){
    window.location.reload(false);
  }

  const mhome = useRef();
  const mabout = useRef();
  const mgallery = useRef();
  const mmenu = useRef();
  const mvacancy = useRef();
  const mnews = useRef();
  const mevents = useRef();
  const mlocation = useRef();
  const mcontact = useRef();

  const mhomes = () =>{
    removeactive();
    mhome.current.classList.add('active');
    home.current.classList.add('b');
    about.current.classList.add('c');
    gallery.current.classList.add('c');
    menu.current.classList.add('c');
    vacancy.current.classList.add('c');
    news.current.classList.add('c');
    // events.current.classList.add('c');
    locations.current.classList.add('c');
    contact.current.classList.add('c');
    setTimeout(() => {
      home.current.addEventListener("scroll",homescroll);
    }, 200);
  };

  const mabouts = () =>{
    removeactive();
    mabout.current.classList.add('active');
    home.current.classList.add('a');
    about.current.classList.add('b');
    gallery.current.classList.add('c');
    menu.current.classList.add('c');
    vacancy.current.classList.add('c');
    news.current.classList.add('c');
    // events.current.classList.add('c');
    locations.current.classList.add('c');
    contact.current.classList.add('c');
    setTimeout(() => {
      about.current.addEventListener("scroll",aboutscroll);
    }, 200);
  };

  const mmenus = () =>{
    removeactive();
    mmenu.current.classList.add('active');
    home.current.classList.add('a');
    about.current.classList.add('a');
    gallery.current.classList.add('c');
    menu.current.classList.add('b');
    vacancy.current.classList.add('c');
    news.current.classList.add('c');
    // events.current.classList.add('c');
    locations.current.classList.add('c');
    contact.current.classList.add('c');
    setTimeout(() =>{
      menu.current.addEventListener("scroll", menuscroll);
    },200);
  };

  const mlocations = () =>{
    removeactive();
    mlocation.current.classList.add('active');
    home.current.classList.add('a');
    about.current.classList.add('a');
    gallery.current.classList.add('c');
    menu.current.classList.add('a');
    vacancy.current.classList.add('c');
    news.current.classList.add('c');
    // events.current.classList.add('c');
    locations.current.classList.add('b');
    contact.current.classList.add('c');
    setTimeout(() =>{
      locations.current.addEventListener("scroll",locationsscroll);
    },200);
  };

  const mgallerys = () =>{
    removeactive();
    mgallery.current.classList.add('active');
    home.current.classList.add('a');
    about.current.classList.add('a');
    gallery.current.classList.add('b');
    menu.current.classList.add('a');
    vacancy.current.classList.add('c');
    news.current.classList.add('c');
    // events.current.classList.add('c');
    locations.current.classList.add('a');
    contact.current.classList.add('c');
    setTimeout(() =>{
      gallery.current.addEventListener("scroll",galleryscroll);
    },200);
  };

  const mvacancys = () =>{
    removeactive();
    mvacancy.current.classList.add('active');
    home.current.classList.add('a');
    about.current.classList.add('a');
    gallery.current.classList.add('a');
    menu.current.classList.add('a');
    vacancy.current.classList.add('b');
    news.current.classList.add('c');
    // events.current.classList.add('c');
    locations.current.classList.add('a');
    contact.current.classList.add('c');
    setTimeout(() =>{
      vacancy.current.addEventListener("scroll",vacancyscroll);
    },200);
  };

  const mnewss = () =>{
    removeactive();
    mnews.current.classList.add('active');
    home.current.classList.add('a');
    about.current.classList.add('a');
    gallery.current.classList.add('a');
    menu.current.classList.add('a');
    vacancy.current.classList.add('a');
    news.current.classList.add('b');
    // events.current.classList.add('c');
    locations.current.classList.add('a');
    contact.current.classList.add('c');
    setTimeout(() =>{
      news.current.addEventListener("scroll",newsscroll);
    },200);
  };

  // const meventss = () =>{
  //   removeactive();
  //   mevents.current.classList.add('active');
  //   home.current.classList.add('a');
  //   about.current.classList.add('a');
  //   gallery.current.classList.add('a');
  //   menu.current.classList.add('a');
  //   vacancy.current.classList.add('a');
  //   news.current.classList.add('a');
  //   // events.current.classList.add('b');
  //   locations.current.classList.add('a');
  //   contact.current.classList.add('c');
  //   setTimeout(() =>{
  //     events.current.addEventListener("scroll",eventsscroll);
  //   },200);
  // };

  const mcontacts = () =>{
    removeactive();
    mcontact.current.classList.add('active');
    home.current.classList.add('a');
    about.current.classList.add('a');
    gallery.current.classList.add('a');
    menu.current.classList.add('a');
    vacancy.current.classList.add('a');
    news.current.classList.add('a');
    // events.current.classList.add('a');
    locations.current.classList.add('a');
    contact.current.classList.add('b');
    setTimeout(() =>{
      contact.current.addEventListener("scroll",contactscroll);
    },200);
  };

  const removeactive = () =>{
    mhome.current.classList.remove('active');
    mabout.current.classList.remove('active');
    mgallery.current.classList.remove('active');
    mmenu.current.classList.remove('active');
    mvacancy.current.classList.remove('active');
    mnews.current.classList.remove('active');
    // mevents.current.classList.remove('active');
    mlocation.current.classList.remove('active');
    mcontact.current.classList.remove('active');

    home.current.scrollTo(0,0);
    about.current.scrollTo(0,10);
    gallery.current.scrollTo(0,10);
    menu.current.scrollTo(0,10);
    vacancy.current.scrollTo(0,10);
    news.current.scrollTo(0,10);
    // events.current.scrollTo(0,10);
    locations.current.scrollTo(0,10);
    contact.current.scrollTo(0,10);

    home.current.classList.remove('a');
    about.current.classList.remove('a');
    gallery.current.classList.remove('a');
    menu.current.classList.remove('a');
    vacancy.current.classList.remove('a');
    news.current.classList.remove('a');
    // events.current.classList.remove('a');
    locations.current.classList.remove('a');
    contact.current.classList.remove('a');

    home.current.classList.remove('b');
    about.current.classList.remove('b');
    gallery.current.classList.remove('b');
    menu.current.classList.remove('b');
    vacancy.current.classList.remove('b');
    news.current.classList.remove('b');
    // events.current.classList.remove('b');
    locations.current.classList.remove('b');
    contact.current.classList.remove('b');

    home.current.classList.remove('c');
    about.current.classList.remove('c');
    gallery.current.classList.remove('c');
    menu.current.classList.remove('c');
    vacancy.current.classList.remove('c');
    news.current.classList.remove('c');
    // events.current.classList.remove('c');
    locations.current.classList.remove('c');
    contact.current.classList.remove('c');
  };

  const sidenav = useRef();
  const sidenavblur = useRef();

  const sidenavs = () => {
    sidenav.current.style.bottom = "0px";
    sidenavblur.current.style.bottom = "0px";
  };

  const sidenavss = () => {
    sidenav.current.style.bottom = "-100%";
    sidenavblur.current.style.bottom = "-100%";
  };

  const linkfnc1 = () => {
    window.open('https://foodmandu.com/Restaurant/Details/845', '_blank', 'noreferrer');
  };

  const linkfnc2 = () => {
    window.open('https://foodmandu.com/Restaurant/Details/324', '_blank', 'noreferrer');
  };


  

    const isBigScreen = useMediaQuery({ query: '(max-width: 1500px)' })
    const isTablet = useMediaQuery({query: '(min-width: 992px)'})
    const addPopUpRef = useRef(null);

    const addPopUpClick = () => {
       if(addPopUpRef) {
         addPopUpRef.current.classList.remove('addPopUpShow')
       }
    } 

    useEffect(() => {
    
      setTimeout(() => {
             if(addPopUpRef) {
             addPopUpRef.current.classList.add('addPopUpShow')
             }
      }, 3000)
     
    }, [])

 const [addClicked, setAddClicked] = useState(false);

  return (
    <>
      <div ref={addPopUpRef} className='addPopUpContainer' onClick={() => addPopUpClick()}>
        <div className='addPopUp' onClick={() => setAddClicked(true)}>
          <img src={PhoAdd} alt="" className='addPopUpImage' />
        </div>
       </div>
      <div ref={container} className="container">
        <div ref={navbar} className="navbar">
          <img onClick={refreshPage} src={logo} alt="" />
          <div className="menus">
            <div ref={mhome} className="menu active" onClick={mhomes}>Home</div>
            <div ref={mabout} className="menu" onClick={mabouts}>Pho99</div>
            <div ref={mmenu} className="menu" onClick={mmenus}>Menu</div>
            <div ref={mlocation} className="menu" onClick={mlocations}>Location</div>
            <div ref={mgallery} className="menu" onClick={mgallerys}>Gallery</div>
            <div ref={mvacancy} className="menu" onClick={mvacancys}>Vacancy</div>
            <div ref={mnews} className="menu" onClick={mnewss}>News</div>
            {/* <div ref={mevents} className="menu" onClick={meventss}>Events</div> */}
            <div ref={mcontact} className="menu" onClick={mcontacts} >Contact</div>
          </div>
          <div className='button'>
            <Button txt={(isBigScreen && isTablet) ? 'Order' : "Order from Foodmandu" } />
            <div className='orderbox'>
              <div className='ob' onClick={linkfnc1}>Boudha</div>
              <div className='ob' onClick={linkfnc2}>Thadhodhunga</div>
            </div>
          </div>
          <i onClick={sidenavs} className="fa-solid fa-bars"></i>
        </div>
        <section ref={home} className="homemain">
          <Home data={data[0]} addClicked={addClicked} setAddClicked={setAddClicked} page={menu} nav={navbar} menudata={moremenudata} fnc1={linkfnc1} fnc2={linkfnc2} fnc={mmenus} />
        </section>
        <section ref={about} className="aboutmain">
          <About data={data[1]} page={about} nav={navbar} datas={aboutdata} />
        </section>
        <section ref={gallery} className="gallerymain">
          <Gallery data={data[2]} page={gallery} nav={navbar} datas={gallerydata} />
        </section>
        <section ref={menu} className="menumain">
          <Menu data={data[3]} page={menu} nav={navbar} menudata={moremenudata} fnc1={linkfnc1} fnc2={linkfnc2} />
        </section>
        <section ref={vacancy} className="vacancymain">
          <Vacancy data={data[8]} page={vacancy} nav={navbar} datas={vacancydata} />
        </section>
        <section ref={news} className="newsmain">
          <News data={data[4]} page={news} nav={navbar} datas={newsdata} />
        </section>
        <section ref={events} className="eventsmain">
          {/* <Event data={data[5]} page={events} nav={navbar} datas={eventsdata} /> */}
        </section>
        <section ref={locations} className="locationsmain">
          <Location data={data[6]} page={locations} nav={navbar} datas={locationsdata} />
        </section>
        <section ref={contact} className="contactmain">
          <Contact data={data[7]} page={contact} nav={navbar} />
        </section>
        <div ref={sidenav} className='sidenav'>
            <div className='snbar'></div>
            <div className='sntitle'>Our Categories</div>
            <div className="menu" onClick={() => {sidenavss(); mhomes(); }}><ion-icon name="home-outline"></ion-icon> Home</div>
            <div className="menu" onClick={() => {sidenavss(); mabouts(); }}><ion-icon name="people-outline"></ion-icon> Pho99</div>
            <div className="menu" onClick={() => {sidenavss(); mmenus(); }}><ion-icon name="grid-outline"></ion-icon> Menu</div>
            <div className="menu" onClick={() => {sidenavss(); mlocations(); }}><ion-icon name="location-outline"></ion-icon> Location</div>
            <div className="menu" onClick={() => {sidenavss(); mgallerys(); }}><ion-icon name="images-outline"></ion-icon> Gallery</div>
            <div className="menu" onClick={() => {sidenavss(); mvacancys(); }}><ion-icon name="clipboard-outline"></ion-icon> Vacancy</div>
            <div className="menu" onClick={() => {sidenavss(); mnewss(); }}><ion-icon name="newspaper-outline"></ion-icon> News</div>
            {/* <div className="menu" onClick={() => {sidenavss(); meventss(); }}><ion-icon name="calendar-number-outline"></ion-icon> Events</div> */}
            <div className="menu" onClick={() => {sidenavss(); mcontacts(); }}><ion-icon name="call-outline"></ion-icon> Contact</div>
            <div className='sntitle'>Order Now from Foodmandu</div>
            <div className='oomenu'>
            <div className="ooomenu" onClick={() => {sidenavss(); linkfnc1(); }}>Boudha</div>
            <div className="ooomenu" onClick={() => {sidenavss(); linkfnc2(); }}>Thadhodhunga</div>
            </div>
        </div>
        <div ref={sidenavblur} className='sidenavblur' onClick={sidenavss}></div>
      </div>
    </>
  );
}

export default App;
