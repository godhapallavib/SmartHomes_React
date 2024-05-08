import p1 from '../Assets/accessories/5 Pack Doorbell Removal Pin.jpg'
import p2 from '../Assets/accessories/Adapter Transformer Compatible.jpg'
import p3 from '../Assets/accessories/Arlo Wired Smart Video Doorbell.jpg';
import p4 from '../Assets/accessories/Cabel Doorbell Transformer.jpg';
import p5 from '../Assets/accessories/charger1.jpg';
import p6 from '../Assets/accessories/Doorbell Camera Angle Mount.jpg';
import p7 from '../Assets/accessories/Doorbell Removal Pin Release Key.jpg';
import p8 from '../Assets/accessories/Doorbell Screws.jpg';
import p9 from '../Assets/accessories/Electronic Door Chime Kit.jpg';
import p10 from '../Assets/accessories/Entry sensor.jpg';
import p11 from '../Assets/accessories/Hardwired Transformer.jpg';
import p12 from '../Assets/accessories/Lithium Coin Cell Battery.jpg';
import p13 from '../Assets/accessories/Newhouse Hardware Door Chime.jpg';
import p14 from '../Assets/accessories/Wireless Doorbells for Home Compatible.jpg';
import p15 from '../Assets/accessories/Extension Cable Video Doorbell.jpg';
import p16 from '../Assets/accessories/Pwer Adapter for Video Doorbell.jpg';
import p17 from '../Assets/accessories/Siding Nailer Adapter Kit.jpg';
let data_product = [
  {
    id: "5 Pack Doorbell Removal Pin",
    name: "5 Pack Doorbell Removal Pin",
    price: 9.99,
    image: p1, // Use the imported image variable p1
    category: "accessory",
    manufacturer: "Google",
    condition: "New",
    discount: 40.0
  },
  // {
  //   id: "Adapter Transformer Compatible",
  //   name: "Adapter Transformer Compatible",
  //   price: 10.99,
  //   image: p2, // Use the imported image variable p2
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Arlo Wired Smart Video Doorbell",
  //   name: "Arlo Wired Smart Video Doorbell",
  //   price: 49.99,
  //   image: p3, // Use the imported image variable p3
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Cabel Doorbell Transformer",
  //   name: "Cabel Doorbell Transformer",
  //   price: 19.99,
  //   image: p4, // Use the imported image variable p4
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "charger",
  //   name: "charger",
  //   price: 19.99,
  //   image: p5, // Use the imported image variable p5
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Doorbell Camera Angle Mount",
  //   name: "Doorbell Camera Angle Mount",
  //   price: 15.99,
  //   image: p6, // Use the imported image variable p6
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Doorbell Removal Pin Release Key",
  //   name: "Doorbell Removal Pin Release Key",
  //   price: 9.99,
  //   image: p7, // Use the imported image variable p7
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Doorbell Screws",
  //   name: "Doorbell Screws",
  //   price: 9.99,
  //   image: p8, // Use the imported image variable p8
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Electronic Door Chime Kit",
  //   name: "Electronic Door Chime Kit",
  //   price: 89.99,
  //   image: p9, // Use the imported image variable p9
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Entry sensor",
  //   name: "Entry sensor",
  //   price: 29.99,
  //   image: p10, // Use the imported image variable p10
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Hardwired Transformer",
  //   name: "Hardwired Transformer",
  //   price: 19.99,
  //   image: p11, // Use the imported image variable p11
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Lithium Coin Cell Battery",
  //   name: "Lithium Coin Cell Battery",
  //   price: 89.99,
  //   image: p12, // Use the imported image variable p12
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Newhouse Hardware Door Chime",
  //   name: "Newhouse Hardware Door Chime",
  //   price: 89.99,
  //   image: p13, // Use the imported image variable p13
  //   category: "accessory",
  //   manufacturer: "Google",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Wireless Doorbells for Home Compatible",
  //   name: "Wireless Doorbells for Home Compatible",
  //   price: 89.99,
  //   image: p14, // Use the imported image variable p14
  //   category: "accessory",
  //   manufacturer: "Lorex",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Extension Cable Video Doorbell",
  //   name: "Extension Cable Video Doorbell",
  //   price: 89.99,
  //   image: p15, // Use the imported image variable p15
  //   category: "accessory",
  //   manufacturer: "Lorex",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Power Adapter for Video Doorbell",
  //   name: "Power Adapter for Video Doorbell",
  //   price: 89.99,
  //   image: p16, // Use the imported image variable p16
  //   category: "accessory",
  //   manufacturer: "Ring",
  //   condition: "New",
  //   discount: 40.0
  // },
  // {
  //   id: "Siding Nailer Adapter Kit",
  //   name: "Siding Nailer Adapter Kit",
  //   price: 89.99,
  //   image: p17, // Use the imported image variable p17
  //   category: "accessory",
  //   manufacturer: "Ring",
  //   condition: "New",
  //   discount: 40.0
  // }
];

export default data_product;
