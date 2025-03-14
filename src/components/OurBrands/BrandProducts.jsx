import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';


const items=
[
  {
    "id": 1,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PIZZA ROLLS PEPPERONI10953",
    "productTitle": "Totino's Pepperoni Frozen Pizza Rolls - 24.8oz",
    "image": "https://go-upc.s3.amazonaws.com/images/45044171.jpg"
  },
  {
    "id": 2,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT PIZZA PEPPERONI07111",
    "productTitle": "Hot Pockets Sandwiches, Premium, Pepperoni Pizza, Garlic Buttery Crust, 2 Pack",
    "image": "https://go-upc.s3.amazonaws.com/images/5059358.jpeg"
  },
  {
    "id": 3,
    "category": "FROZEN SNACKS",
    "brandName": "Smucker's",
    "productTitleShort": "SMKR UNCRSTBLS PB/GRP 4PK02516",
    "productTitle": "Smucker's Sandwich, Peanut Butter & Grape Jelly 4 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/57346827.jpeg"
  },
  {
    "id": 4,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "CRSNT PKT PEPPERONI PIZZA05631",
    "productTitle": "Hot Pockets 2 Pack Crispy Crust Pepperoni Pizza 2 Ea Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57357035.jpeg"
  },
  {
    "id": 5,
    "category": "FROZEN SNACKS",
    "brandName": "Smucker's",
    "productTitleShort": "SMKR UNCRSTBLS PB/STR 4PK02517",
    "productTitle": "Smucker's Sandwiches, Peanut Butter & Strawberry Jam 4 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/57367758.jpeg"
  },
  {
    "id": 6,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT PEPP PIZZA 5PK62899",
    "productTitle": "Hot Pockets Pepperoni Pizza Frozen Sandwiches 5 Ct. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/61509275.png"
  },
  {
    "id": 7,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PIZZA ROLLS COMB 50CT10952",
    "productTitle": "Totino's Combination Pizza Rolls 50 Ea Bag",
    "image": "https://go-upc.s3.amazonaws.com/images/61510958.png"
  },
  {
    "id": 8,
    "category": "FROZEN SNACKS",
    "brandName": "TGI Fridays",
    "productTitleShort": "TGIF CKN WINGS BUFF00036",
    "productTitle": "Tgi Fridays Frozen Appetizers Buffalo Style Chicken Wings, 9 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57320235.jpeg"
  },
  {
    "id": 9,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PIZZA ROLLS TRPL MEAT10915",
    "productTitle": "Totino's Pizza Rolls, Triple Meat, 50 Ct, 24.8 Oz Bag (frozen)",
    "image": "https://go-upc.s3.amazonaws.com/images/57386338.jpeg"
  },
  {
    "id": 10,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT HAM AND CHEESE07112",
    "productTitle": "Hot Pockets Sandwiches, Hickory Ham & Cheddar, Crispy Buttery Crust, 2 Pack 2 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/57416765.jpeg"
  },
  {
    "id": 11,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT MEATBLLS W/MOZZARL07116",
    "productTitle": "Hot Pockets Meatballs & Mozzarella Frozen Sandwiches 2 Ct Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57387927.jpeg"
  },
  {
    "id": 12,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PIZZ RLS PERRRN 15CT28292",
    "productTitle": "Totino's Pizza Rolls, Pepperoni, 15 Ct, 7.5 Oz. Bag (frozen)",
    "image": "https://go-upc.s3.amazonaws.com/images/52787931.jpeg"
  },
  {
    "id": 13,
    "category": "FROZEN SNACKS",
    "brandName": "White Castle",
    "productTitleShort": "WHTCST CHEESEBURGERS01006",
    "productTitle": "White Castle Classic Cheese Sliders 6 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/57399458.jpeg"
  },
  {
    "id": 14,
    "category": "FROZEN SNACKS",
    "brandName": "Bagel Bites",
    "productTitleShort": "BGL BT CHEESE PEPPERONI03502",
    "productTitle": "Bagel Bites Cheese & Pepperoni Mini Pizza Snacks, 9 Ct Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57339321.jpeg"
  },
  {
    "id": 15,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PZZA ROLLS PEPP 100CT11838",
    "productTitle": "Totino's Frozen Pizza Rolls Pepperoni - 48.8oz/100ct",
    "image": "https://go-upc.s3.amazonaws.com/images/45179300.jpg"
  },
  {
    "id": 16,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "CRSNT PKT HAM& CHEDDAR05632",
    "productTitle": "Hot Pockets Sandwiches, Hickory Ham & Cheddar, Croissant Crust, 2 Pack 2 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/57367703.jpeg"
  },{
    "id": 17,
    "category": "FROZEN SNACKS",
    "brandName": "TGI Fridays",
    "productTitleShort": "TGIF MOZZ STIX 03501",
    "productTitle": "TGI Fridays Mozzarella Sticks with Marinara Sauce - 24 Ct",
    "image": "https://go-upc.s3.amazonaws.com/images/57804416.png"
  },
  {
    "id": 18,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PIZZ RLS COMBO 15CT28293",
    "productTitle": "Totino's Pizza Rolls Combination - 15 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/57804416.png"
  },
  {
    "id": 19,
    "category": "FROZEN SNACKS",
    "brandName": "TGI Fridays",
    "productTitleShort": "TGIF MOZZ STIX03502",
    "productTitle": "TGI Fridays Mozzarella Sticks with Marinara Sauce - 24 Ct",
    "image": "https://go-upc.s3.amazonaws.com/images/57313586.jpeg"
  },
  {
    "id": 20,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PIZZ RLS COMBO 15CT28293",
    "productTitle": "Totino's Pizza Rolls Combination - 15 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/57804416.png"
  },
  {
    "id": 21,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT PHILLY STK&CHSE07107",
    "productTitle": "Hot Pockets Seasoned Crust 2 Pack Philly Steak & Cheese Sandwiches 2 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/63183916.jpeg"
  },
  {
    "id": 22,
    "category": "FROZEN SNACKS",
    "brandName": "Bagel Bites",
    "productTitleShort": "BGL BT CHSE/PEPPERONI 18C03604",
    "productTitle": "Bagel Bites Family Size Cheese & Pepperoni Pizza Snacks 18 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/56528262.png"
  },
  {
    "id": 23,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT CKN BRC CHD CRSNT 05630",
    "productTitle": "Hot Pockets Chicken Bacon Ranch Frozen Sandwiches 2 Ct Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57340849.jpeg"
  },
  {
    "id": 24,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT HAM&CHEESE 5 PK84329",
    "productTitle": "Hot Pockets Nestlé Hickory Ham & Cheese Seasoned Crust Sandwiches Value Pack - 5ct",
    "image": "https://go-upc.s3.amazonaws.com/images/57072522.png"
  },
  {
    "id": 25,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT PEPPERONI & SSG PZ07110",
    "productTitle": "Hot Pockets Pepperoni & Sausage Pizza Frozen Sandwiches 2 Ct Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57403163.jpeg"
  },{
    "id": 26,
    "category": "FROZEN SNACKS",
    "brandName": "Totino's",
    "productTitleShort": "TOT PIZZA ROLLS CHEESE 5010921",
    "productTitle": "Totino's Cheese Frozen Pizza Rolls - 24.8oz",
    "image": "https://go-upc.s3.amazonaws.com/images/57361622.jpeg"
  },
  {
    "id": 27,
    "category": "FROZEN SNACKS",
    "brandName": "Nestle",
    "productTitleShort": "HT PKT 4 MEAT CHEESE00357",
    "productTitle": "Hot Pockets Four Meat & Four Cheese Pizza Frozen Sandwiches 12 Ct Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57811551.png"
  },
  {
    "id": 28,
    "category": "FROZEN ICE CREAM",
    "brandName": "Budget Saver",
    "productTitleShort": "BDGT SVR TWN POPS 18CT901929",
    "productTitle": "Budget Saver Twin Pops - 18 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/57340849.jpeg"
  },
  {
    "id": 29,
    "category": "FROZEN ICE CREAM",
    "brandName": "TGI Fridays",
    "productTitleShort": "TGIF MOZZ STIX06850",
    "productTitle": "Tgi Fridays Mozzarella Sticks With Marinara Sauce 11 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57313586.jpeg"
  },
  {
    "id": 30,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Ribbon",
    "productTitleShort": "BLU BNY NEOPLITAN IC PAIL 901929",
    "productTitle": "Blue Ribbon Classics Neapolitan Ice Cream 1 Gal",
    "image": "https://go-upc.s3.amazonaws.com/images/52788705.jpeg"
  },
  {
    "id": 31,
    "category": "FROZEN ICE CREAM",
    "brandName": "TGI Fridays",
    "productTitleShort": "TGIF MOZZ STIX06850",
    "productTitle": "Tgi Fridays Mozzarella Sticks With Marinara Sauce 11 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57313586.jpeg"
  },
  {
    "id": 32,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Ribbon",
    "productTitleShort": "BGL BT CHSE/PEPPERONI 18C03604",
    "productTitle": "Bagel Bites Family Size Cheese & Pepperoni Pizza Snacks 18 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/56528262.png"
  },
  {
    "id": 33,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY NEOP IC SNDWICH 901929",
    "productTitle": "Blue Bunny Frozen Premium Sandwiches Neapolitan - 9ct",
    "image": "https://go-upc.s3.amazonaws.com/images/63183919.png"
  },
  {
    "id": 34,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY ORIGNAL BOMB POPS02169",
    "productTitle": "Bomb Pop Blue Bunny Original Pops, 12 Ct",
    "image": "https://go-upc.s3.amazonaws.com/images/57380574.jpeg"
  },
  {
    "id": 35,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY BOMP POP BAN FUDG02171",
    "productTitle": "Bomb Pop Banana Fudge Frozen Dairy Confection 12 - 1.75 Fl Oz Pops",
    "image": "https://go-upc.s3.amazonaws.com/images/57796727.png"
  },
  {
    "id": 36,
    "category": "FROZEN ICE CREAM",
    "brandName": "Budget Saver",
    "productTitleShort": "BDGT SVR TROP TWIN POP 1810194",
    "productTitle": "Budget Saver Twin Pops, Tropic",
    "image": "https://go-upc.s3.amazonaws.com/images/52798690.png"
  },
  {
    "id": 37,
    "category": "FROZEN ICE CREAM",
    "brandName": "My/Mochi",
    "productTitleShort": "MYMO STRABERRY ICE CREAM 99616",
    "productTitle": "My/Mochi Ice Cream, Ripe Strawberry, 4 Pack",
    "image": "https://go-upc.s3.amazonaws.com/images/35209870.png"
  },
  {
    "id": 38,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Ribbon",
    "productTitleShort": "BRC RFAT STRAWBERRY02013",
    "productTitle": "Blue Ribbon Classics Strawberry Reduced Fat Ice Cream 48 Fl. Oz. Tub",
    "image": "https://go-upc.s3.amazonaws.com/images/49095307.png"
  },
  {
    "id": 39,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Ribbon",
    "productTitleShort": "BLU BNY VANILLA SAND 16CT01473",
    "productTitle": "Blue Ribbon Classics Vanilla Sandwiches 16 Ct Box",
    "image": "https://go-upc.s3.amazonaws.com/images/49703276.png"
  },
  {
    "id": 40,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Ribbon",
    "productTitleShort": "BRC RFAT BUTTERPECAN02006",
    "productTitle": "Blue Ribbon Classics Butter Pecan Reduced Fat Ice Cream 48 Fl. Oz. Tub",
    "image": "https://go-upc.s3.amazonaws.com/images/50581299.png"
  },
  {
    "id": 41,
    "category": "FROZEN ICE CREAM",
    "brandName": "Nestle",
    "productTitleShort": "DSTK VANILLA 8CT84811",
    "productTitle": "Drumstick 8 Pack The Original Vanilla Dessert Cones 8 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/57356849.jpeg"
  },
  {
    "id": 42,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Ribbon",
    "productTitleShort": "BRC RFAT CKIENCRM02008",
    "productTitle": "Blue Ribbon Classics Ice Cream, Reduced Fat, Cookies N Cream",
    "image": "https://go-upc.s3.amazonaws.com/images/50581282.png"
  },
  {
    "id": 43,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY SMPLY VAN IC SNDW01930",
    "productTitle": "Blue Bunny Sandwiches Simply Vanilla Frozen Dairy Dessert 9 - 4.25 Fl Oz Packs",
    "image": "https://go-upc.s3.amazonaws.com/images/61537988.png"
  },
  {
    "id": 44,
    "category": "FROZEN ICE CREAM",
    "brandName": "La Michoacana",
    "productTitleShort": "LA MIC VRTY MNI IC BARS 103042",
    "productTitle": "La Michoacana Variety Mini Ice Cream Bars",
    "image": "https://images.freshop.com/00767778030423/7de4bf8463d5391afa6ceb6b4055e08a_large.png"
  },
  {
    "id": 45,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY BRC ORANGE DREAM 30012",
    "productTitle": "Blue Ribbon Classics Friends + Family Pack Orange Dream Frozen Dairy Dessert 20 - 2.25 Fl Oz Packs",
    "image": "https://go-upc.s3.amazonaws.com/images/50625887.png"
  },
  {
    "id": 46,
    "category": "FROZEN ICE CREAM",
    "brandName": "Icee",
    "productTitleShort": "ICEE WILD CHERRY FREEZE 403972",
    "productTitle": "Icee Freeze Wild Cherry - 4 CT",
    "image": "https://go-upc.s3.amazonaws.com/images/57495143.png"
  },
  {
    "id": 47,
    "category": "FROZEN ICE CREAM",
    "brandName": "Snickers",
    "productTitleShort": "SNKR IC BAR00051",
    "productTitle": "Snickers Ice Cream Bars 6-Count Box",
    "image": "https://go-upc.s3.amazonaws.com/images/2789686.jpeg"
  },
  {
    "id": 48,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY CLSC VAN SUNDAE C63023",
    "productTitle": "Blue Ribbon Classics Vanilla Sundae Frozen Dairy Dessert 8 - 4.3 Fl Oz Cones",
    "image": "https://go-upc.s3.amazonaws.com/images/57823156.png"
  },
  {
    "id": 49,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY CKI & CRM IC PAIL01159",
    "productTitle": "Blue Ribbon Classics Cookies 'n Cream Frozen Dairy Dessert 1 Gal. Pail",
    "image": "https://go-upc.s3.amazonaws.com/images/52788710.jpeg"
  },
  {
    "id": 50,
    "category": "FROZEN ICE CREAM",
    "brandName": "Icee",
    "productTitleShort": "OB ICEE FRZ CP BLUE RSPBR03973",
    "productTitle": "Icee Freeze Blue Raspberry - 4 CT",
    "image": "https://go-upc.s3.amazonaws.com/images/57495036.png"
  },
  {
    "id": 51,
    "category": "FROZEN ICE CREAM",
    "brandName": "Blue Bunny",
    "productTitleShort": "BLU BNY STRAWBERRY CHSCKE01551",
    "productTitle": "Blue Ribbon Classics Ice Cream Bars, Strawberry Shortcake",
    "image": "https://go-upc.s3.amazonaws.com/images/49992674.png"
  },
  {
    "id": 52,
    "category": "CHIPS & SNACKS",
    "brandName": "Lays",
    "productTitleShort": "LAYS STAX LG BFL RANCH24315",
    "productTitle": "Lay's Stax Potato Crisps Buffalo Wings With Ranch Naturally & Artificially Flavored 5 1/2 Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/45911128.jpg"
  },
  {
    "id": 53,
    "category": "CHIPS & SNACKS",
    "brandName": "Mariani",
    "productTitleShort": "MRNI TROPICAL PINEAPPLE26710",
    "productTitle": "Mariani Premium Pineapple, Tropical",
    "image": "https://go-upc.s3.amazonaws.com/images/61505127.png"
  },
  {
    "id": 54,
    "category": "CHIPS & SNACKS",
    "brandName": "Mariani",
    "productTitleShort": "MRNI BANANA CHIPS20100",
    "productTitle": "Mariani Banana Chips",
    "image": "https://go-upc.s3.amazonaws.com/images/3173915.jpg"
  },
  {
    "id": 55,
    "category": "CHIPS & SNACKS",
    "brandName": "Mariani",
    "productTitleShort": "MRNI THAILAND MANGO31718",
    "productTitle": "Mariani Dried Mango",
    "image": "https://go-upc.s3.amazonaws.com/images/61595709.png"
  },
  {
    "id": 56,
    "category": "CHIPS & SNACKS",
    "brandName": "Mariani",
    "productTitleShort": "MRNI VANILLA YOGURT RAISI30837",
    "productTitle": "Mariani Premium Raisins, Vanilla Yogurt",
    "image": "https://go-upc.s3.amazonaws.com/images/57505494.png"
  },
  {
    "id": 57,
    "category": "CRACKERS",
    "brandName": "Cheez It",
    "productTitleShort": "CHZ IT ORIG CUP57466",
    "productTitle": "Cheez-It Original Baked Snack Crackers Mini Cup - 2.2oz",
    "image": "https://go-upc.s3.amazonaws.com/images/5231149.jpeg"
  },
  {
    "id": 58,
    "category": "CRACKERS",
    "brandName": "Cheez It",
    "productTitleShort": "CHZ IT WH CHD CUP70495",
    "productTitle": "Cheez-It White Cheddar Baked Snack Crackers Mini Cup - 2.2oz",
    "image": "https://go-upc.s3.amazonaws.com/images/57840032.png"
  },
  {
    "id": 59,
    "category": "CRACKERS",
    "brandName": "Nabisco",
    "productTitleShort": "NAB TEDDY GRAHAM HONEY04558",
    "productTitle": "Teddy Grahams Honey Graham Snacks 10 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/1729901.jpeg"
  },
  {
    "id": 60,
    "category": "CRACKERS",
    "brandName": "Nabisco",
    "productTitleShort": "NAB TEDDY GRAHAM CHOC04557",
    "productTitle": "Teddy Grahams Honey Maid Chocolate Graham Snacks 10oz Box",
    "image": "https://go-upc.s3.amazonaws.com/images/58067088.jpeg"
  },
  {
    "id": 61,
    "category": "CRACKERS",
    "brandName": "Nabisco",
    "productTitleShort": "NAB TEDDY GRAHAM CINN04559",
    "productTitle": "Teddy Grahams Cinnamon Graham Snacks 10 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/49583131.jpeg"
  },
  {
    "id": 62,
    "category": "Health drinks",
    "brandName": "Ensure",
    "productTitleShort": "ENSR VAN RTD SHK 6PK57243",
    "productTitle": "Ensure 9g Protein Nutrition Shake Bottles - Vanilla - 8 Fl Oz/6pk",
    "image": "https://go-upc.s3.amazonaws.com/images/57725807.jpeg"
  },
  {
    "id": 63,
    "category": "Health drinks",
    "brandName": "Ensure",
    "productTitleShort": "ENSR STRWB RTD SHK 6PK57234",
    "productTitle": "Ensure Nutrition Shake With 9 Grams Of Protein, Meal Replacement Shakes, Strawberry, 8 Fl Oz, 6 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/44641821.jpg"
  },
  {
    "id": 64,
    "category": "Health drinks",
    "brandName": "Ensure",
    "productTitleShort": "ENSR PLS VAN RTD SHK 6PK57263",
    "productTitle": "Ensure Vanilla Nutrition Shake 6-8 Fl Oz Bottles",
    "image": "https://go-upc.s3.amazonaws.com/images/3780433.jpeg"
  },
  {
    "id": 65,
    "category": "Health drinks",
    "brandName": "Ensure",
    "productTitleShort": "ENSR ACTV HI PRTN VAN RTD64117",
    "productTitle": "Ensure Vanilla Nutrition Shake 6 - 8 Fl Oz Bottles",
    "image": "https://go-upc.s3.amazonaws.com/images/44209835.jpg"
  },
  {
    "id": 66,
    "category": "Health drinks",
    "brandName": "Ensure",
    "productTitleShort": "ENSR PLS STRWB RTD SHK 6P57269",
    "productTitle": "Ensure Nutrition Shake With 13 Grams Of High-quality Protein, Meal Replacement Shakes, Strawberry, 8 Fl Oz, 6 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/57415161.jpeg"
  },
  {
    "id": 67,
    "category": "Health drinks",
    "brandName": "Nestle",
    "productTitleShort": "BOOST CHOC RTD 6PK67536",
    "productTitle": "Boost Original Complete Nutritional Drink - Rich Chocolate - 8oz",
    "image": "https://go-upc.s3.amazonaws.com/images/44209423.jpg"
  },
  {
    "id": 68,
    "category": "Health drinks",
    "brandName": "Nestle",
    "productTitleShort": "BOOST HI PRTN VAN 6PK94136",
    "productTitle": "Boost High Protein Balanced Nutritional Drink, Very Vanilla, 8 Fl",
    "image": "https://go-upc.s3.amazonaws.com/images/44641738.jpg"
  },
  {
    "id": 69,
    "category": "Health drinks",
    "brandName": "Abbott",
    "productTitleShort": "GLCRN VAN RTD SHK 6PK57801",
    "productTitle": "Glucerna Original Homemade Vanilla 6 Bottles 8 Fl Oz Bottle 6 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/44208652.jpg"
  },
  {
    "id": 70,
    "category": "Health drinks",
    "brandName": "Nestle",
    "productTitleShort": "BOOST HI PRTN CHOC 6PK94036",
    "productTitle": "Boost Balanced Rich Chocolate Nutritional Drink 6 - 8 Fl Oz Bottles",
    "image": "https://go-upc.s3.amazonaws.com/images/57367903.jpeg"
  },
  {
    "id": 71,
    "category": "Health drinks",
    "brandName": "Abbott",
    "productTitleShort": "GLCRN CHOC RTD SHK 6PK57804",
    "productTitle": "Glucerna Original Rich Chocolate 6 Bottles 8 Fl Oz Bottle 6 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/44208658.jpg"
  },
  {
    "id": 72,
    "category": "Health drinks",
    "brandName": "Nestle",
    "productTitleShort": "BOOST VAN RTD 6PK67436",
    "productTitle": "Boost Nutritional Drink, Balanced, Very Vanilla, Original",
    "image": "https://go-upc.s3.amazonaws.com/images/44636739.jpg"
  },
  {
    "id": 73,
    "category": "Health drinks",
    "brandName": "Ensure",
    "productTitleShort": "ENSR CHOC RTD SHK 6PK57231",
    "productTitle": "Ensure Milk Chocolate Nutrition Shake 6 - 8 Fl Oz Bottles",
    "image": "https://go-upc.s3.amazonaws.com/images/57362520.jpeg"
  },
  {
    "id": 74,
    "category": "Health drinks",
    "brandName": "Nestle",
    "productTitleShort": "BOOST PLUS CHOC 6PK93236",
    "productTitle": "Boost Complete Nutritional Drink - Rich Chocolate - 8oz/6ct",
    "image": "https://go-upc.s3.amazonaws.com/images/44641744.jpg"
  },
  {
    "id": 75,
    "category": "Health drinks",
    "brandName": "Nestle",
    "productTitleShort": "BOOST STRWB RTD 6PK67636",
    "productTitle": "Boost Nutritional Drink, Balanced, Original, Creamy Strawberry Flavor",
    "image": "https://go-upc.s3.amazonaws.com/images/44208662.jpg"
  },
  {
    "id": 76,
    "category": "Health drinks",
    "brandName": "Atkins",
    "productTitleShort": "ATKIN STRWB RTD SHAKE 4PK06311",
    "productTitle": "Atkins Advantage Ready To Drink Shake (Tetra-Can) Strawberry 1 Pack, 4 Quantity",
    "image": "https://go-upc.s3.amazonaws.com/images/44204732.jpg"
  },
  {
    "id": 77,
    "category": "IMPORTED MEXICAN FOODS",
    "brandName": "Yakult",
    "productTitleShort": "YAKULT DAIRY BEV 5PK +CRV00100",
    "productTitle": "Yakult Light Nonfat Probiotic Drink - U.S.A. Inc",
    "image": "https://go-upc.s3.amazonaws.com/images/44848829.png"
  },
  {
    "id": 78,
    "category": "REF-JUICES-REFRIGERATED",
    "brandName": "Tampico",
    "productTitleShort": "TAMPICO CITRUS01265",
    "productTitle": "Tampico Juice, Citrus Punch",
    "image": "https://go-upc.s3.amazonaws.com/images/34539481.jpg"
  },
  {
    "id": 79,
    "category": "REF-JUICES-REFRIGERATED",
    "brandName": "Sunny D",
    "productTitleShort": "SUN D TANGY SS01641",
    "productTitle": "Sunny D SunnyD Orange Juice Drink - 18pk/6.75 Fl Oz Bottles",
    "image": "https://go-upc.s3.amazonaws.com/images/45209811.jpg"
  },
  {
    "id": 80,
    "category": "REF-JUICES-REFRIGERATED",
    "brandName": "Tampico",
    "productTitleShort": "TAMPICO TROPICAL DRINK01266",
    "productTitle": "Tampico Tropical Punch",
    "image": "https://go-upc.s3.amazonaws.com/images/64426252.jpeg"
  },
  {
    "id": 81,
    "category": "REF-JUICES-REFRIGERATED",
    "brandName": "Tampico",
    "productTitleShort": "TAMPICO BLUE RASPBERRY01264",
    "productTitle": "Tampico Blu Rspbrry",
    "image": "https://go-upc.s3.amazonaws.com/images/64426241.jpeg"
  },
  {
    "id": 82,
    "category": "REF-JUICES-REFRIGERATED",
    "brandName": "Simply Pulp",
    "productTitleShort": "SIMPLY ORNG SS PULP FREE01069",
    "productTitle": "Simply Pulp Free Juice Bottle, 11.5 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/57314186.jpeg"
  },
  {
    "id": 83,
    "category": "WATER",
    "brandName": "Niagara",
    "productTitleShort": "NIAGARA WATER00048",
    "productTitle": "Niagara Water 1 Gal W/ Handle",
    "image": "https://go-upc.s3.amazonaws.com/images/63275858.jpeg"
  },
  {
    "id": 84,
    "category": "WATER",
    "brandName": "Fiji",
    "productTitleShort": "FIJI NAT ART WTR 500ML00004",
    "productTitle": "Fiji Case Of 24 16.9 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/62675115.jpeg"
  },
  {
    "id": 85,
    "category": "WATER",
    "brandName": "Crystal Geyser",
    "productTitleShort": "CRSTL GEYSR SPR PET12514",
    "productTitle": "Crystal Geyser Natural 1 Gal",
    "image": "https://go-upc.s3.amazonaws.com/images/56029654.jpeg"
  },
  {
    "id": 86,
    "category": "WATER",
    "brandName": "Best Yet",
    "productTitleShort": "B YET DISTILLED WTR CRV40443",
    "productTitle": "Best Yet Distilled Water",
    "image": "https://images.freshop.com/00042187404431/c25be3fc1a1176318991070a6c450abc_large.png"
  },
  {
    "id": 87,
    "category": "WATER",
    "brandName": "Nestle",
    "productTitleShort": "NSTL PURE LIFE 28PK .5L73529",
    "productTitle": "Pure Life Nestle Purified Water - 28 Pack Plastic Bottles 473.20 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/45242612.jpg"
  },
  {
    "id": 88,
    "category": "WATER",
    "brandName": "Niagara",
    "productTitleShort": "NIAGARA PURIFIED WATER 2400123",
    "productTitle": "Niagara Drinking Water",
    "image": "https://go-upc.s3.amazonaws.com/images/38327955.jpg"
  },
  {
    "id": 89,
    "category": "WATER",
    "brandName": "Niagara",
    "productTitleShort": "NIAGARA DRINK WATER 60CS00909",
    "productTitle": "Niagara Drinking Water - 32 Pack",
    "image": "https://go-upc.s3.amazonaws.com/images/26656648.jpg"
  },
  {
    "id": 90,
    "category": "WATER",
    "brandName": "Crystal Geyser",
    "productTitleShort": "SHP-DR CRYSTL GYSR RTD+CR71154",
    "productTitle": "Crystal Geyser Natural 1 Gal",
    "image": "https://go-upc.s3.amazonaws.com/images/56029654.jpeg"
  },
  {
    "id": 91,
    "category": "WATER",
    "brandName": "Nestle",
    "productTitleShort": "NATURE CRYTL HIGH PH ALKA70645",
    "productTitle": "Nature's Crystal Alkaline Water",
    "image": "https://images.freshop.com/1564405684703319288/b28ab971b1c45c05b944576b2e28ec8c_large.png"
  },
  {
    "id": 92,
    "category": "WATER",
    "brandName": "Nestle",
    "productTitleShort": "NSTL PURE LIFE PURIFD WTR46333",
    "productTitle": "Pure Life Nestle Water 1 Gallon",
    "image": "https://go-upc.s3.amazonaws.com/images/1479942.jpg"
  },
  {
    "id": 93,
    "category": "WATER",
    "brandName": "Niagara",
    "productTitleShort": "NIAGARA DRINK WATER 32PK00909",
    "productTitle": "Niagara Drinking Water - 32 Pack",
    "image": "https://go-upc.s3.amazonaws.com/images/26656648.jpg"
  },
  {
    "id": 94,
    "category": "WATER",
    "brandName": "Lacroix",
    "productTitleShort": "LA CROIX SPARKLING LIME 140125",
    "productTitle": "Lacroix Lime, 12 Oz. Cans (12 Count)",
    "image": "https://go-upc.s3.amazonaws.com/images/45952791.jpg"
  },
  {
    "id": 95,
    "category": "WATER",
    "brandName": "Lacroix",
    "productTitleShort": "LA CROIX SPRKL PLAIN 12PK40133",
    "productTitle": "Lacroix Pure, 12Oz Cans, 12 Pack, Naturally Essenced, 0 Calories, 0 Sweeteners, 0 Sodium",
    "image": "https://go-upc.s3.amazonaws.com/images/57409023.jpeg"
  },
  {
    "id": 96,
    "category": "WATER",
    "brandName": "San Pellegrino",
    "productTitleShort": "SAN PELL 750ML GLASS81183",
    "productTitle": "San Pellegrino S.Pellegrino Sparkling Natural Mineral Water, 25.3 Fl Oz. Glass Bottle",
    "image": "https://go-upc.s3.amazonaws.com/images/45974967.jpg"
  },
  {
    "id": 97,
    "category": "WATER",
    "brandName": "Lacroix",
    "productTitleShort": "LA CROIX SPRKL LEMON 12PK40130",
    "productTitle": "Lacroix Sparkling Water - Natural Lemon",
    "image": "https://go-upc.s3.amazonaws.com/images/57828123.jpeg"
  },
  {
    "id": 98,
    "category": "WATER",
    "brandName": "Lacroix",
    "productTitleShort": "LA CROIX SPRKL BERRY 12PK40156",
    "productTitle": "Lacroix Sparkling Water Berry 12 Ct",
    "image": "https://go-upc.s3.amazonaws.com/images/57828090.jpeg"
  },
  {
    "id": 99,
    "category": "WATER",
    "brandName": "Lacroix",
    "productTitleShort": "LA CROIX SPRKL GRAPEFRUIT40120",
    "productTitle": "Lacroix Sparkling Water Grapefruit - 12 CT",
    "image": "https://go-upc.s3.amazonaws.com/images/57373628.jpeg"
  },
  {
    "id": 100,
    "category": "WATER",
    "brandName": "Lacroix",
    "productTitleShort": "LA CROIX SPRKL ORANGE 12P61341",
    "productTitle": "Lacroix Orange Sparkling Water 12 - 355 Ml Cans",
    "image": "https://go-upc.s3.amazonaws.com/images/47224736.jpeg"
  },
  {
    "id": 101,
    "category": "WATER",
    "brandName": "Fiji",
    "productTitleShort": "FIJI NAT WTR 2/6PK00012",
    "productTitle": "Fiji Bottles - 6pk/33.8 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/47619126.jpeg"
  },
  {
    "id": 102,
    "category": "WATER",
    "brandName": "Fiji",
    "productTitleShort": "FIJI NAT ART WRT 700ML00067",
    "productTitle": "Fiji Natural Artesian - 23.7 Fl Oz Bottle",
    "image": "https://go-upc.s3.amazonaws.com/images/57360808.jpeg"
  },
  {
    "id": 103,
    "category": "WATER",
    "brandName": "Fiji",
    "productTitleShort": "FIJI NAT WTR 1.5LTR00006",
    "productTitle": "Fiji 1.5 L (50.7 Fl Oz) Bottle",
    "image": "https://go-upc.s3.amazonaws.com/images/62675110.jpeg"
  },
  {
    "id": 104,
    "category": "WATER",
    "brandName": "Lacroix",
    "productTitleShort": "LA CROIX SPRKL CRAN RASP 32341",
    "productTitle": "Lacroix Cranberry Raspberry Sparkling Water 12 Pack",
    "image": "https://go-upc.s3.amazonaws.com/images/45952786.jpg"
  },
  {
    "id": 105,
    "category": "COFFEE",
    "brandName": "Best Yet",
    "productTitleShort": "B YET INSTANT COFFEE REG40643",
    "productTitle": "Best Yet Instant Coffee",
    "image": "https://images.freshop.com/00042187406435/ea89f196cbf5fcc30d2a4ee8d87f5f3e_large.png"
  },
  {
    "id": 106,
    "category": "COFFEE",
    "brandName": "Best Yet",
    "productTitleShort": "B YET K-CUP BREAKFAST BLE42665",
    "productTitle": "Best Yet K-cup Breakfast Blend",
    "image": "https://images.freshop.com/00042187426655/e86f3ed0a2ac80e0dbe43e11002eb839_large.png"
  },
  {
    "id": 107,
    "category": "COFFEE",
    "brandName": "Best Yet",
    "productTitleShort": "B YET K-CUP DONUT42697",
    "productTitle": "Best Yet K-cup Donut Shop",
    "image": "https://images.freshop.com/00042187426976/0db7cdf6266d8ac2f5bd0c957b9d8997_large.png"
  },
  {
    "id": 108,
    "category": "COFFEE",
    "brandName": "Cafe Don",
    "productTitleShort": "CAFE DON PEDRO INST12135",
    "productTitle": "Cafe Don Pedro Instant Coffee, Premium",
    "image": "https://images.freshop.com/00647654121240/b6390e905d0664d4dabfe44924e576e1_large.png"
  },
  {
    "id": 109,
    "category": "COFFEE",
    "brandName": "Best Yet",
    "productTitleShort": "B YET K-CUP COLOMBIAN42664",
    "productTitle": "Best Yet K-cup Colombian",
    "image": "https://images.freshop.com/00042187426648/b4309c60351bb903492ffbd9034e65fd_large.png"
  },
  {
    "id": 110,
    "category": "COFFEE",
    "brandName": "Best Yet",
    "productTitleShort": "B YET K-CUP DECAF42698",
    "productTitle": "Best Yet K-cup Decaf",
    "image": "https://images.freshop.com/00042187426983/ea171599c87f1ff634687ed22d237467_large.png"
  },
  {
    "id": 111,
    "category": "COFFEE",
    "brandName": "Best Yet",
    "productTitleShort": "B YET K-CUP HAZELNUT42695",
    "productTitle": "Best Yet K-Cup Hazelnut",
    "image": "https://images.freshop.com/00042187426952/73dc409f09f1671e3cdc5bcc04381b74_large.png"
  },
  {
    "id": 112,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Jose Ole",
    "productTitleShort": "JO BEEF & CHS CHIMICHANGA89241",
    "productTitle": "Jose Ole Beef & Cheese Chimichanga 5 Oz. Wrapper",
    "image": "https://go-upc.s3.amazonaws.com/images/51223226.jpeg"
  },
  {
    "id": 113,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Tina's",
    "productTitleShort": "TINAS RED HOT BEEF BURRIT91015",
    "productTitle": "Tina's Burrito Red Hot Beef",
    "image": "https://go-upc.s3.amazonaws.com/images/57368012.jpeg"
  },
  {
    "id": 114,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Tina's",
    "productTitleShort": "TINAS GREEN CHILI BURRITO91035",
    "productTitle": "Tina's Beef & Bean Burrito With Green Chili Peppers Frozen 4OZ",
    "image": "https://go-upc.s3.amazonaws.com/images/60528416.png"
  },
  {
    "id": 115,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Tina's",
    "productTitleShort": "TINAS BEAN & CHEESE BURRI91045",
    "productTitle": "Tina's Bean & Cheese Burrito Frozen 4OZ",
    "image": "https://go-upc.s3.amazonaws.com/images/57328402.jpeg"
  },
  {
    "id": 116,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Tina's",
    "productTitleShort": "TINAS BEEF & BEAN BURRITO91025",
    "productTitle": "Tina's Burrito Beef & Bean",
    "image": "https://go-upc.s3.amazonaws.com/images/57359230.jpeg"
  },
  {
    "id": 117,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Jose Ole",
    "productTitleShort": "JO CHICKEN CHIMICHANGAS89243",
    "productTitle": "Jose Ole Chimichanga Chicken & Cheese",
    "image": "https://go-upc.s3.amazonaws.com/images/61116577.png"
  },
  {
    "id": 118,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Tina's",
    "productTitleShort": "TINAS RED HOT BEEF BURRIT02031",
    "productTitle": "Tina's Red Hot Beef Burito",
    "image": "https://go-upc.s3.amazonaws.com/images/57501368.png"
  },
  {
    "id": 119,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CLASSIC SALISBURY ST00730",
    "productTitle": "Banquet Classic Salisbury Steak Frozen Single Serve Meal, 11.88 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57342024.jpeg"
  },
  {
    "id": 120,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT SPAGHETTI&MEAT00722",
    "productTitle": "Banquet Classic Spaghetti And Meatballs Frozen Single Serve Meal, 10 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57366389.jpeg"
  },
  {
    "id": 121,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Tina's",
    "productTitleShort": "TINAS BF&BN GRN CHILE BUR02032",
    "productTitle": "Tina's Burrito, Beef & Bean/Green Chili, Big",
    "image": "https://images.freshop.com/2005116/bf97a8c5242a168f566b62bced3bb155_large.png"
  },
  {
    "id": 122,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CKN FRIED BF STK10938",
    "productTitle": "Banquet Classic Chicken Fried Beef Steak Frozen Single Serve Meal, 10 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57797020.png"
  },
  {
    "id": 123,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT SALISBRY ENTRE11305",
    "productTitle": "Banquet Family Size Salisbury Steaks & Brown Gravy 6 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/3717626.jpeg"
  },
  {
    "id": 124,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CLASSIC MEATLOAF00731",
    "productTitle": "Banquet Classic Meatloaf Frozen Single Serve Meal, 11.88 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57413059.jpeg"
  },
  {
    "id": 125,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT BNLSS WH FRD CHKN10976",
    "productTitle": "Banquet R. Field Wine Company",
    "image": "https://go-upc.s3.amazonaws.com/images/57371938.jpeg"
  },
  {
    "id": 126,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT BREAST NUGGETS67090",
    "productTitle": "Banquet Chicken Breast Nuggets",
    "image": "https://go-upc.s3.amazonaws.com/images/61551047.png"
  },
  {
    "id": 127,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Tina's",
    "productTitleShort": "TINAS BN & CHS BIG BURRIT02033",
    "productTitle": "Tina's Burrito, Bean & Cheese, Big",
    "image": "https://go-upc.s3.amazonaws.com/images/57023182.png"
  },
  {
    "id": 128,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CLASSIC BKYRD BBQ ME00738",
    "productTitle": "Banquet Backyard BBQ Frozen Single Serve Meal, 10.45 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57395592.jpeg"
  },
  {
    "id": 129,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Stouffer's",
    "productTitleShort": "STFR LASAGNA10321",
    "productTitle": "Stouffer's Frozen Lasagna With Meat & Sauce Classics - 10.5oz",
    "image": "https://go-upc.s3.amazonaws.com/images/57333626.jpeg"
  },
  {
    "id": 130,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT SWEET/SOUR CHCKN00736",
    "productTitle": "Banquet Classic Sweet And Sour Chicken",
    "image": "https://go-upc.s3.amazonaws.com/images/57372147.jpeg"
  },
  {
    "id": 131,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CLASSIC CHICKEN STRI00735",
    "productTitle": "Banquet Chicken Strips Meal 8.9 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57796138.png"
  },
  {
    "id": 132,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT HMSTYL GRLD PATTY00716",
    "productTitle": "Banquet Homestyle Patty Meal",
    "image": "https://go-upc.s3.amazonaws.com/images/61418523.png"
  },
  {
    "id": 133,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Jose Ole",
    "productTitleShort": "JO BEEF AND CHEESE BURRIT89191",
    "productTitle": "Jose Ole Beef & Cheese Burrito 5 Oz. Wrapper",
    "image": "https://go-upc.s3.amazonaws.com/images/57639715.png"
  },
  {
    "id": 134,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Zatarain's",
    "productTitleShort": "ZAT SHRIMP ALFREDO01434",
    "productTitle": "Zatarain's Zatarian’s Frozen Shrimp Creamy Alfredo Entree",
    "image": "https://go-upc.s3.amazonaws.com/images/61141808.png"
  },
  {
    "id": 135,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Zatarain's",
    "productTitleShort": "ZAT BL CKN ALFREDO01423",
    "productTitle": "Zatarain's Blackened Chicken Alfredo Frozen Dinner, 10.5 Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/61135918.png"
  },
  {
    "id": 136,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Marie Callender's",
    "productTitleShort": "MC CMPLT FETT/BROC/CHX DN50475",
    "productTitle": "Marie Callender's Frozen Dinner, Fettuccini With Chicken & Broccoli, 13 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57339426.jpeg"
  },
  {
    "id": 137,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Zatarain's",
    "productTitleShort": "ZAT FRZ SSG&CKN GUMBO01421",
    "productTitle": "Zatarain's Frozen Sausage And Chicken Gumbo, 12 Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/50637867.png"
  },
  {
    "id": 138,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CHSY PATTY MEAL80926",
    "productTitle": "Banquet Cheesy Patty & Mashed Potatoes Meal",
    "image": "https://go-upc.s3.amazonaws.com/images/49706259.png"
  },
  {
    "id": 139,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CHKN NUGG & FRIE00708",
    "productTitle": "Banquet Basic Chicken Nuggets And Fries Frozen Single Serve Meal, 4.85 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57344167.jpeg"
  },
  {
    "id": 140,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CLASSIC SWEDISH MEAT00715",
    "productTitle": "Banquet Swedish Meatballs 10.45 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57361014.jpeg"
  },
  {
    "id": 141,
    "category": "FROZEN DINNERS/ENTREES",
    "brandName": "Stouffer's",
    "productTitleShort": "STFR LASAGNA W/MEAT SAUCE55813",
    "productTitle": "Stouffer's CLASSICS Large Size Lasagna With Meat & Sauce 19 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57355803.jpeg"
  },
  {
    "id": 142,
    "category": "FROZEN POT PIES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CHICK VEG POT PIE10101",
    "productTitle": "Banquet Frozen Microwaveable Chicken Pot Pie - 7oz",
    "image": "https://go-upc.s3.amazonaws.com/images/52775809.jpeg"
  },
  {
    "id": 143,
    "category": "FROZEN POT PIES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT PIE VEG S/ TURK10103",
    "productTitle": "Banquet Turkey Pot Pie 7 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57356955.jpeg"
  },
  {
    "id": 144,
    "category": "FROZEN POT PIES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT PIE VEG W/BEEF10102",
    "productTitle": "Banquet Pot Pie, Flaky Crust, Beef",
    "image": "https://go-upc.s3.amazonaws.com/images/57321130.jpeg"
  },
  {
    "id": 145,
    "category": "FROZEN POT PIES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT CNCKY CHKN W/BROC PO10100",
    "productTitle": "Banquet Frozen Pot Pie Dinner, Chicken & Broccoli, 7-Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/61507510.png"
  },
  {
    "id": 146,
    "category": "FROZEN POT PIES",
    "brandName": "Banquet",
    "productTitleShort": "BNQT SLSBRY STK DP DSH PO44995",
    "productTitle": "Banquet Salisbury Steak Deep Dish",
    "image": "https://go-upc.s3.amazonaws.com/images/60907249.png"
  },
  {
    "id": 147,
    "category": "FROZEN POT PIES",
    "brandName": "Swanson",
    "productTitleShort": "SWNSN CHICKEN POT PIE06032",
    "productTitle": "Swanson Chicken Pot Pie 7 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57813094.png"
  },
  {
    "id": 148,
    "category": "FROZEN POT PIES",
    "brandName": "Marie Callender's",
    "productTitleShort": "MC CHIX POT PIE50111",
    "productTitle": "Marie Callender's Frozen Chicken Pot Pie - 10oz",
    "image": "https://go-upc.s3.amazonaws.com/images/61496472.png"
  },
  {
    "id": 149,
    "category": "FROZEN POT PIES",
    "brandName": "Marie Callender's",
    "productTitleShort": "MC CHICKEN POT PIE00063",
    "productTitle": "Marie Callender's Frozen Chicken Pot Pie - 15oz",
    "image": "https://go-upc.s3.amazonaws.com/images/3798395.jpeg"
  },
  {
    "id": 150,
    "category": "FROZEN POT PIES",
    "brandName": "Marie Callender's",
    "productTitleShort": "MC TURKY POT PIE50114",
    "productTitle": "Marie Callender's Frozen Pot Pie Dinner, Turkey, 10 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57329103.jpeg"
  },
  {
    "id": 151,
    "category": "FROZEN POT PIES",
    "brandName": "Swanson",
    "productTitleShort": "SWNSN TURKEY PIE06092",
    "productTitle": "Swanson Turkey Pot Pie 7 Oz. Box",
    "image": "https://go-upc.s3.amazonaws.com/images/57358497.jpeg"
  },
  {
    "id": 152,
    "category": "FROZEN POT PIES",
    "brandName": "Marie Callender's",
    "productTitleShort": "MC TURKEY POT PIE00064",
    "productTitle": "Marie Callender's Turkey Pot Pie, Large Size",
    "image": "https://go-upc.s3.amazonaws.com/images/61498293.png"
  },
  {
    "id": 153,
    "category": "FROZEN POT PIES",
    "brandName": "Marie Callender's",
    "productTitleShort": "MC CHKN POT PIE30150",
    "productTitle": "Marie Callender's Frozen Chicken Pot Pie - 4ct/40oz",
    "image": "https://go-upc.s3.amazonaws.com/images/57386828.jpeg"
  },
  {
    "id": 154,
    "category": "FOILS/WRAPS/MTCH/TTHPCKS",
    "brandName": "Best Yet",
    "productTitleShort": "B YET ALUM FOIL STND ECOB42932",
    "productTitle": "Aluminum Foil 25ft",
    "image": "https://go-upc.s3.amazonaws.com/images/41693478.jpg"
  },
  {
    "id": 155,
    "category": "FOILS/WRAPS/MTCH/TTHPCKS",
    "brandName": "Best Yet",
    "productTitleShort": "B YET ALUM FOIL ECONO ECO42938",
    "productTitle": "Best Yet Aluminum Foil",
    "image": "https://images.freshop.com/00042187403328/cea6c7c2e1dca48e673aadc40cff6ac1_large.png"
  },
  {
    "id": 156,
    "category": "FOILS/WRAPS/MTCH/TTHPCKS",
    "brandName": "Best Yet",
    "productTitleShort": "B YET ALUM FOIL ECO BOX42930",
    "productTitle": "Best Yet Heavy Duty Foil",
    "image": "https://images.freshop.com/00042187403342/21a0afb73f3de05425f95b03beca9c84_large.png"
  },
  {
    "id": 157,
    "category": "FOILS/WRAPS/MTCH/TTHPCKS",
    "brandName": "Best Yet",
    "productTitleShort": "B YET PLASTIC WRAP40323",
    "productTitle": "Best Yet Plastic Wrap",
    "image": "https://images.freshop.com/00042187403236/fae3e2df5f4c59e61c0bdf48a9823ea2_large.png"
  },
  {
    "id": 158,
    "category": "Laundry",
    "brandName": "Ensueno",
    "productTitleShort": "ENSUENO SHEET VIOLET00916",
    "productTitle": "Ensueno Dryer Sheets, Scent Booster, Violet Bouquet 80 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/34441172.jpg"
  },
  {
    "id": 159,
    "category": "Laundry",
    "brandName": "Ensueno",
    "productTitleShort": "ENSUENO SHEET SPRING FRSH00915",
    "productTitle": "Ensueno Dryer Sheets, Scent Booster, Spring Fresh 80 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/52322791.jpeg"
  },
  {
    "id": 160,
    "category": "Laundry",
    "brandName": "Ensueno",
    "productTitleShort": "ENSUENO SPRING FRESH01672",
    "productTitle": "Ensueno Original Spring Fresh Fabric Softener 22 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/45948105.jpg"
  },
  {
    "id": 161,
    "category": "Laundry",
    "brandName": "Ensueno",
    "productTitleShort": "ENSUENO VIOLET BQUET01675",
    "productTitle": "Ensueno Original Violet Bouquet Fabric Softener 22 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/45948089.jpg"
  },
  {
    "id": 162,
    "category": "Laundry",
    "brandName": "Ensueno",
    "productTitleShort": "ENSUENO BEBE FABSOFT01677",
    "productTitle": "Ensueno Baby Powder Fresh Fabric Softener 22 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/45948084.jpg"
  },
  {
    "id": 163,
    "category": "FACIAL TISSUE",
    "brandName": "Puffs",
    "productTitleShort": "PUFFS VICKS CUBE34431",
    "productTitle": "Puffs Facial Tissues, Plus Lotion, 2-Ply 48 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/5213068.jpeg"
  },
  {
    "id": 164,
    "category": "FACIAL TISSUE",
    "brandName": "Fiora",
    "productTitleShort": "FIORA FCL TISS FLAT01093",
    "productTitle": "Paseo Facial Tissues, 2-Ply",
    "image": "https://images.freshop.com/00810326010931/19962eb49c5184b9ddc821a9e59489a9_large.png"
  },
  {
    "id": 165,
    "category": "FACIAL TISSUE",
    "brandName": "Puffs",
    "productTitleShort": "PUFFS FAMILY PLUS LOTION 39346",
    "productTitle": "Puffs Plus Lotion Facial Tissue",
    "image": "https://go-upc.s3.amazonaws.com/images/51108642.jpeg"
  },
  {
    "id": 166,
    "category": "FACIAL TISSUE",
    "brandName": "Fiora",
    "productTitleShort": "FIORA FCL CUBE 4PK.01191",
    "productTitle": "Fiora Facial Tissues, 2-Ply",
    "image": "https://go-upc.s3.amazonaws.com/images/50755428.png"
  },
  {
    "id": 167,
    "category": "FACIAL TISSUE",
    "brandName": "Puffs",
    "productTitleShort": "PUFFS CUBE P4 ULTRA S&S F35669",
    "productTitle": "Puffs Non Lotion White Facial Tissue Ultra Soft & Strong 2 Ply 124CT",
    "image": "https://go-upc.s3.amazonaws.com/images/38448658.jpg"
  },
  {
    "id": 168,
    "category": "FACIAL TISSUE",
    "brandName": "Puffs",
    "productTitleShort": "PUFFS BASIC FAM 180CT87615",
    "productTitle": "Head & Shoulders And Purely Gentle Scalp Care Shampoo 23.7 Fl Oz",
    "image": "https://go-upc.s3.amazonaws.com/images/64420398.jpeg"
  },
  {
    "id": 169,
    "category": "FACIAL TISSUE",
    "brandName": "Puffs",
    "productTitleShort": "PUFFS PLUS FAMILY 3PK 12439363",
    "productTitle": "Puffs Plus Lotion 2 Ply 3 Boxes Facial Tissue 3 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/57396505.jpeg"
  },
  {
    "id": 170,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY 8 7/8 PLT69737",
    "productTitle": "Hefty Soak Proof 8.875 In. 45 Ct Bag",
    "image": "https://go-upc.s3.amazonaws.com/images/38438894.jpg"
  },
  {
    "id": 171,
    "category": "Tableware",
    "brandName": "Best Yet",
    "productTitleShort": "B YET PLASTIC SPOONS HVY 30988",
    "productTitle": "Best Yet Plastic Spoons",
    "image": "https://go-upc.s3.amazonaws.com/images/41693493.jpg"
  },
  {
    "id": 172,
    "category": "Tableware",
    "brandName": "Best Yet",
    "productTitleShort": "B YET FOAM CUP 8OZ41319",
    "productTitle": "Best Yet Cups 24pk/8.5z",
    "image": "https://go-upc.s3.amazonaws.com/images/42496180.png"
  },
  {
    "id": 173,
    "category": "Tableware",
    "brandName": "Best Yet",
    "productTitleShort": "B YET PLASTIC FORKS HVY D30989",
    "productTitle": "Best Yet Plastic Forks",
    "image": "https://go-upc.s3.amazonaws.com/images/42496203.png"
  },
  {
    "id": 174,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY FM BWL 20OZ79347",
    "productTitle": "Hefty Everyday Soak Proof 20 Oz. Bowls 27 Ct Pack",
    "image": "https://go-upc.s3.amazonaws.com/images/61002595.png"
  },
  {
    "id": 175,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY 10-1/4\" COMP28265",
    "productTitle": "Hefty Everyday Plates Soak Proof 10.25 In. Compartment 21 Ct Bag",
    "image": "https://go-upc.s3.amazonaws.com/images/50136700.jpeg"
  },
  {
    "id": 176,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY PLATE20820",
    "productTitle": "Hefty Foam Plates",
    "image": "https://go-upc.s3.amazonaws.com/images/45930853.jpg"
  },
  {
    "id": 177,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY 10 1/4 FLAT PLATE41969",
    "productTitle": "Hefty Soak Proof 10.25 Inches 25 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/50757430.png"
  },
  {
    "id": 178,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY EASY GRIP CUP 18OZ11830",
    "productTitle": "Hefty Party On! 18 Oz. Red Cups 30 Ct Bag",
    "image": "https://go-upc.s3.amazonaws.com/images/52792581.jpeg"
  },
  {
    "id": 179,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY 8 7/8 DLX PLT57113",
    "productTitle": "Hefty Extra Strong & Deep 8.875 In. 36 Ct Bag",
    "image": "https://go-upc.s3.amazonaws.com/images/52804634.jpeg"
  },
  {
    "id": 180,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY 12Z BWL97251",
    "productTitle": "Hefty Soak Proof 12 Oz. 45 Ct Bag",
    "image": "https://go-upc.s3.amazonaws.com/images/38564512.jpg"
  },
  {
    "id": 181,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY SOAK PRF FM PLT08100",
    "productTitle": "Hefty Soak Proof Tableware Foam Plates 8.88\" Dia White 1",
    "image": "https://go-upc.s3.amazonaws.com/images/61005852.png"
  },
  {
    "id": 182,
    "category": "Tableware",
    "brandName": "Best Yet",
    "productTitleShort": "B YET PLASTIC COMPO HDUTY30986",
    "productTitle": "Best Yet Cutlery Combo Pack",
    "image": "https://images.freshop.com/00042187309866/71cb028f56603e09b0b50a4f2f9a27de_large.png"
  },
  {
    "id": 183,
    "category": "Tableware",
    "brandName": "Solo",
    "productTitleShort": "SOLO PARTY CUPS 18OZ60009",
    "productTitle": "Solo Squared Plastic Cups 18 Ounce",
    "image": "https://go-upc.s3.amazonaws.com/images/57374024.jpeg"
  },
  {
    "id": 184,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY FOAM COMP TRAY36804",
    "productTitle": "Hefty Soak Proof Compartment Trays 18 Ea",
    "image": "https://go-upc.s3.amazonaws.com/images/50599663.png"
  },
  {
    "id": 185,
    "category": "Tableware",
    "brandName": "Solo",
    "productTitleShort": "SOLO ALL OCCASIONS PPR PL01738",
    "productTitle": "Solo 8 3/4 All Occasion Paper Plates, 44 Count",
    "image": "https://go-upc.s3.amazonaws.com/images/61703750.png"
  },
  {
    "id": 186,
    "category": "Tableware",
    "brandName": "Best Yet",
    "productTitleShort": "B YET 10.25' DESIGNER PLA30960",
    "productTitle": "Best Yet Designer Series Paper Plates",
    "image": "https://images.freshop.com/00042187309606/1e61e3c260c3bfe500c1b07544bb5a2a_large.png"
  },
  {
    "id": 187,
    "category": "Tableware",
    "brandName": "Solo",
    "productTitleShort": "SOLO PLASTIC CUPS RED/BLU41620",
    "productTitle": "Solo Plastic Cups Square",
    "image": "https://go-upc.s3.amazonaws.com/images/52797061.jpeg"
  },
  {
    "id": 188,
    "category": "Tableware",
    "brandName": "Hefty",
    "productTitleShort": "HFTY DLX PLATE40245",
    "productTitle": "Hefty Extra Strong & Deep, 10-1/4 Inch",
    "image": "https://go-upc.s3.amazonaws.com/images/60925411.png"
  },
  {
    "id": 189,
    "category": "Tableware",
    "brandName": "Best Yet",
    "productTitleShort": "B YET NEON FLEX STRAWS 7 50266",
    "productTitle": "Best Yet Neon Straws",
    "image": "https://images.freshop.com/00042187502663/fd08f64a3d7506db27e614eac38cc1f3_large.png"
  },
  {
    "id": 190,
    "category": "$5 & Below",
    "brandName": "Colgate",
    "productTitleShort": "CLGT MTB EXTR CLN FLL MED55114",
    "productTitle": "CLGT MTB EXTR CLN FLL MED55114",
    "image": "https://go-upc.s3.amazonaws.com/images/41804724.jpeg"
  },
  {
    "id": 191,
    "category": "$5 & Below",
    "brandName": "Colgate",
    "productTitleShort": "CLGT EXTRA CLEAN TB FH S55676",
    "productTitle": "CLGT EXTRA CLEAN TB FH S55676",
    "image": "https://go-upc.s3.amazonaws.com/images/41816074.jpeg"
  },
  {
    "id": 192,
    "category": "$5 & Below",
    "brandName": "Macs",
    "productTitleShort": "MACS ORIG PORKRINDS80775",
    "productTitle": "MACS ORIG PORKRINDS80775",
    "image": "https://go-upc.s3.amazonaws.com/images/45926229.jpg"
  },
  {
    "id": 193,
    "category": "$5 & Below",
    "brandName": "Macs",
    "productTitleShort": "MACS HOT PORKRINDS80776",
    "productTitle": "MACS HOT PORKRINDS80776",
    "image": "https://go-upc.s3.amazonaws.com/images/56884059.jpeg"
  },
  {
    "id": 194,
    "category": "$5 & Below",
    "brandName": "Click & Flame",
    "productTitleShort": "BBQ BUTANE LIGHTER LA14414420",
    "productTitle": "BBQ BUTANE LIGHTER LA14414420",
    "image": "https://go-upc.s3.amazonaws.com/images/46595487.jpeg"
  },
  {
    "id": 195,
    "category": "$5 & Below",
    "brandName": "Macs",
    "productTitleShort": "MACS SALT/PEP PRK SK80780",
    "productTitle": "MACS SALT/PEP PRK SK80780",
    "image": "https://images.freshop.com/00073497004417/0ccd7a48a46dd174ef4850a64204113f_large.png"
  },
  {
    "id": 196,
    "category": "$5 & Below",
    "brandName": "Handy Solutions",
    "productTitleShort": "HNDY SLTN BRUT POCKET COM15005",
    "productTitle": "HNDY SLTN BRUT POCKET COM15005",
    "image": "https://go-upc.s3.amazonaws.com/images/56900063.png"
  },
  {
    "id": 197,
    "category": "$5 & Below",
    "brandName": "Handy Solutions",
    "productTitleShort": "HNDY SLTN CUTEX NAIL CLPR15008",
    "productTitle": "HNDY SLTN CUTEX NAIL CLPR15008",
    "image": "https://go-upc.s3.amazonaws.com/images/64204179.jpeg"
  },
  {
    "id": 198,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU STAINLESS STEEL SCO88310",
    "productTitle": "CU STAINLESS STEEL SCO88310",
    "image": "https://images.freshop.com/00740985883105/057cc159fc7239f38ad94e3c2d5d3b4b_large.png"
  },
  {
    "id": 199,
    "category": "$5 & Below",
    "brandName": "Clean Touch",
    "productTitleShort": "$$ TRRY/NET SCRG SPNG GLD88306",
    "productTitle": "TRRY/NET SCRG SPNG GLD88306",
    "image": "https://go-upc.s3.amazonaws.com/images/57614503.png"
  },
  {
    "id": 200,
    "category": "$5 & Below",
    "brandName": "Trim",
    "productTitleShort": "TRIM SQUARE TWEEZERS53100",
    "productTitle": "TRIM SQUARE TWEEZERS53100",
    "image": "https://go-upc.s3.amazonaws.com/images/44436950.jpg"
  },
  {
    "id": 201,
    "category": "$5 & Below",
    "brandName": "Clean Touch",
    "productTitleShort": "$$ CELLLOSE SPNGE NAIL GU88346",
    "productTitle": "CELLLOSE SPNGE NAIL GU88346",
    "image": "https://go-upc.s3.amazonaws.com/images/57804887.png"
  },
  {
    "id": 202,
    "category": "$5 & Below",
    "brandName": "Trim",
    "productTitleShort": "TRIM SLANT TIP TWEEZERS52900",
    "productTitle": "TRIM SLANT TIP TWEEZERS52900",
    "image": "https://go-upc.s3.amazonaws.com/images/58680815.jpeg"
  },
  {
    "id": 203,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU CLEAN BRUSH W/SCRAP88318",
    "productTitle": "CU CLEAN BRUSH W/SCRAP88318",
    "image": "https://go-upc.s3.amazonaws.com/images/64189318.jpeg"
  },
  {
    "id": 204,
    "category": "$5 & Below",
    "brandName": "Handy Solutions",
    "productTitleShort": "HNDY SLTN EMERY BOARD29764",
    "productTitle": "HNDY SLTN EMERY BOARD29764",
    "image": "https://go-upc.s3.amazonaws.com/images/64204159.jpeg"
  },
  {
    "id": 205,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU MICROFIBER SCRUBBER88345",
    "productTitle": "CU MICROFIBER SCRUBBER88345",
    "image": "https://go-upc.s3.amazonaws.com/images/57614612.png"
  },
  {
    "id": 206,
    "category": "$5 & Below",
    "brandName": "Clean Touch",
    "productTitleShort": "$$ HVY DUTY IRON SCRUB BR88333",
    "productTitle": "HVY DUTY IRON SCRUB BR88333",
    "image": "https://go-upc.s3.amazonaws.com/images/57614585.png"
  },
  {
    "id": 207,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU SOAP PUMP PALM BRUS88325",
    "productTitle": "CU SOAP PUMP PALM BRUS88325",
    "image": "https://go-upc.s3.amazonaws.com/images/1263432.jpg"
  },
  {
    "id": 208,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU CELLULOSE SPNGE IN 88349",
    "productTitle": "CU CELLULOSE SPNGE IN 88349",
    "image": "https://go-upc.s3.amazonaws.com/images/38526183.jpg"
  },
  {
    "id": 209,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU SCOURING PADS 10 PK88314",
    "productTitle": "CU SCOURING PADS 10 PK88314",
    "image": "https://go-upc.s3.amazonaws.com/images/1263419.jpg"
  },
  {
    "id": 210,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU MULTIPURPOSE SCOURE88315",
    "productTitle": "CU MULTIPURPOSE SCOURE88315",
    "image": "https://go-upc.s3.amazonaws.com/images/1263383.jpg"
  },
  {
    "id": 211,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU BOTTLE BRUSH AND SP88326",
    "productTitle": "CU BOTTLE BRUSH AND SP88326",
    "image": "https://go-upc.s3.amazonaws.com/images/52614768.png"
  },
  {
    "id": 212,
    "category": "$5 & Below",
    "brandName": "Clean Up",
    "productTitleShort": "$$ CU LGHT DUTY SCOURER P88304",
    "productTitle": "CU LGHT DUTY SCOURER P88304",
    "image": "https://go-upc.s3.amazonaws.com/images/1263435.jpg"
  }
  


]


const BrandProducts = () => {
    const { brandName } = useParams();
    // console.log(brandName)
    // const [items, setItems] = useState([])
    // const [filteredItems, setFilteredItems] = useState([]);
    // useEffect(() => {
    //     fetch('/public/products.json')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setItems(data);
    //             const filtered = data.filter((item) => item.brandName === brandName);
    //             setFilteredItems(filtered);
    //         })
    //         .catch((error) => console.error("Error fetching data:", error));
    // }, [brandName]);

    const filtered = items.filter((item) => item.brandName === brandName);
    // console.log(filteredItems)
    const [search, setSearch] = useState("")

    console.log(search)
    return (
        <div className='md:pt-[118px]'>
            <div className="relative ">
                <img
                    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="absolute inset-x-0 bottom-0">
                        <svg
                            viewBox="0 0 224 12"
                            fill="currentColor"
                            className="w-full -mb-1 text-white"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                        </svg>
                    </div>
                    <div className="px-4 pb-4 md:pb-16 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">


                            <h2 className=" font-sans tracking-tight text-white  sm:leading-none text-3xl md:text-[62px] font-extrabold text-center mt-16  md:mt-0 inter-font ">

                                {brandName}<span className='text-[#F26B24] md:leading-relaxed'> Brand</span>

                            </h2>
                            <p className=" md:text-[26px] font-medium text-gray-200 inter-font px-3 text-center mt-3 md:px-0">
                                One-stop destination for high-quality wholesale products at unbeatable prices.
                            </p>

                            <div className="form-control  pt-2 pb-3 my-4">
                                <div className="join">
                                    <input
                                        onChange={(e) => { setSearch(e.target.value.toLocaleLowerCase()) }}
                                        type="text" placeholder="Search…" className="flex-grow  w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline" />
                                    <a href="#searchP">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-[#F26B24]"
                                        >
                                            Search
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* <a
                                href=""
                                aria-label="Scroll down"
                                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 hover:bg-[#F26B24] mt-5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="currentColor"
                                >
                                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[380px] md:max-w-3xl lg:max-w-[1550px] mx-auto my-4 md:my-16">
                {
                    filtered.filter((product) => {
                        const isSearchValue = search.toLowerCase() === ""
                            ? product
                            : product.productTitle.toLowerCase().includes(search);

                        // console.log(search.toLowerCase())
                        // const isCategoryValue = category.toLowerCase() === ""
                        //     ? product
                        //     : product.category.includes(category);
                        return isSearchValue 
                    }).map(product => <Product key={product.id} product={product}></Product>)
                }


                {/* {
                    filtered.map(product => <Product key={product.id} product={product}></Product>)
                } */}
            </div>
        </div>
    );
};

export default BrandProducts;