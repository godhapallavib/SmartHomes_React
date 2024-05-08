let all_product = [
    {
      id: "Blink Doorbell Black",
      name: "Blink Doorbell Black",
      price: 199.99,
      image: "blinkdoorbell.jpeg",
      category: "smartdoorbell",
      manufacturer: "Blink",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "5 Pack Doorbell Removal Pin",
          "Adapter Transformer Compatible"
        ]
      }
    },
    {
      id: "White Blink Doorbell",
      name: "White Blink Doorbell",
      price: 100.99,
      image: "blinkdoorbell2.jpeg",
      category: "smartdoorbell",
      manufacturer: "Blink",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Arlo Wired Smart Video Doorbell",
          "Cabel Doorbell Transformer"
        ]
      }
    },
    {
      id: "Black Eufy Doorbell",
      name: "Black Eufy Doorbell",
      price: 150.99,
      image: "eufydoorbell.jpeg",
      category: "smartdoorbell",
      manufacturer: "Eufy",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "charger",
          "Doorbell Camera Angle Mount",
          "Doorbell Removal Pin Release Key"
        ]
      }
    },
    {
      id: "White Eufy Doorbell",
      name: "White Eufy Doorbell",
      price: 100.99,
      image: "eufydoorbell2.jpeg",
      category: "smartdoorbell",
      manufacturer: "Eufy",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Wireless Doorbells for Home Compatible"
        ]
      }
    },
    {
      id: "Ring Doorbell",
      name: "Ring Doorbell",
      price: 120.99,
      image: "ringdoorbell.png",
      category: "smartdoorbell",
      manufacturer: "Ring",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Extension Cable Video Doorbell"
        ]
      }
    },
    {
      id: "Lifx Lightning",
      name: "Lifx Lightning",
      price: 30.99,
      image: "lifxlight.jpeg",
      category: "smartlighting",
      manufacturer: "Lifx",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Tapo Lightning",
      name: "Tapo Lightning",
      price: 29.99,
      image: "tapolight.jpeg",
      category: "smartlighting",
      manufacturer: "Tapo",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Tapo Lightning set of two",
      name: "Tapo Lightning set of two",
      price: 25.99,
      image: "tapolight2.jpeg",
      category: "smartlighting",
      manufacturer: "Tapo",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Wipro Lightning",
      name: "Wipro Lightning",
      price: 45.99,
      image: "wiprolight.jpeg",
      category: "smartlighting",
      manufacturer: "Wipro",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Wipro Lightning set of three",
      name: "Wipro Lightning set of three",
      price: 50.99,
      image: "wiprolight2.jpeg",
      category: "smartlighting",
      manufacturer: "Wipro",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Basic Elemake Doorlock",
      name: "Basic Elemake Doorlock",
      price: 99.99,
      image: "elemakedoorlock.jpeg",
      category: "smartdoorlock",
      manufacturer: "Elemake",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Advanced Elemake Doorlock",
      name: "Advanced Elemake Doorlock",
      price: 25.99,
      image: "elemakedoorlock2.jpeg",
      category: "smartdoorlock",
      manufacturer: "Elemake",
      condition: "New",
      discount: 15.0
    },
    {
      id: "White Kwikset Doorlock",
      name: "White Kwikset Doorlock",
      price: 45.99,
      image: "kwiksetdoorlock.png",
      category: "smartdoorlock",
      manufacturer: "Kwikset",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Black Kwikset Doorlock",
      name: "Black Kwikset Doorlock",
      price: 50.99,
      image: "kwiksetdoorlock.png",
      category: "smartdoorlock",
      manufacturer: "Kwikset",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Wyze Doorlock",
      name: "Wyze Doorlock",
      price: 30.99,
      image: "wyzedoorlock.jpeg",
      category: "smartdoorlock",
      manufacturer: "Wyze",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Amazon Thermostat",
      name: "Amazon Thermostat",
      price: 30.99,
      image: "amazonthermostat.jpeg",
      category: "smartthermostat",
      manufacturer: "Amazon",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Basic Ecobee Smart Thermostat",
      name: "Basic Ecobee Smart Thermostat",
      price: 150.99,
      image: "ecobeethermostat.jpeg",
      category: "smartthermostat",
      manufacturer: "Ecobee",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Advanced Ecobee Smart Thermostat",
      name: "Advanced Ecobee Smart Thermostat",
      price: 199.99,
      image: "ecobeethermostat2.jpeg",
      category: "smartthermostat",
      manufacturer: "Ecobee",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Google Nest Learning Thermostat",
      name: "Google Nest Learning Thermostat",
      price: 125.99,
      image: "googlethermostat.jpeg",
      category: "smartthermostat",
      manufacturer: "Google",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Google Nest Thermostat",
      name: "Google Nest Thermostat",
      price: 145.99,
      image: "googlethermostat2.jpeg",
      category: "smartthermostat",
      manufacturer: "Google",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Alexa Speaker",
      name: "Alexa Speaker",
      price: 89.99,
      image: "alexaspeaker.jpeg",
      category: "smartspeaker",
      manufacturer: "Alexa",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Alexa Speaker Mini",
      name: "Alexa Speaker Mini",
      price: 99.99,
      image: "alexaspeakermini.jpeg",
      category: "smartspeaker",
      manufacturer: "Alexa",
      condition: "New",
      discount: 20.0
    },
    {
      id: "White Echodot Speaker",
      name: "White Echodot Speaker",
      price: 59.99,
      image: "echodotspeaker.jpeg",
      category: "smartspeaker",
      manufacturer: "Echodot",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Black Echodot Speaker",
      name: "Black Echodot Speaker",
      price: 89.99,
      image: "echodotspeaker2.jpeg",
      category: "smartspeaker",
      manufacturer: "Echodot",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Google Speaker",
      name: "Google Speaker",
      price: 50.99,
      image: "googlespeaker.jpeg",
      category: "smartspeaker",
      manufacturer: "Google",
      condition: "New",
      discount: 15.0
    },
    {
      id: "5 Pack Doorbell Removal Pin",
      name: "5 Pack Doorbell Removal Pin",
      price: 9.99,
      image: "5 Pack Doorbell Removal Pin.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Adapter Transformer Compatible",
      name: "Adapter Transformer Compatible",
      price: 10.99,
      image: "Adapter Transformer Compatible.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Arlo Wired Smart Video Doorbell",
      name: "Arlo Wired Smart Video Doorbell",
      price: 49.99,
      image: "Arlo Wired Smart Video Doorbell.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Cabel Doorbell Transformer",
      name: "Cabel Doorbell Transformer",
      price: 19.99,
      image: "Cabel Doorbell Transformer.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "charger",
      name: "charger",
      price: 19.99,
      image: "charger1.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Doorbell Camera Angle Mount",
      name: "Doorbell Camera Angle Mount",
      price: 15.99,
      image: "Doorbell Camera Angle Mount.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Doorbell Removal Pin Release Key",
      name: "Doorbell Removal Pin Release Key",
      price: 9.99,
      image: "Doorbell Removal Pin Release Key.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Doorbell Screws",
      name: "Doorbell Screws",
      price: 9.99,
      image: "Doorbell Screws.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Electronic Door Chime Kit",
      name: "Electronic Door Chime Kit",
      price: 89.99,
      image: "Electronic Door Chime Kit.png",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Entry sensor",
      name: "Entry sensor",
      price: 29.99,
      image: "Entry sensor.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Hardwired Transformer",
      name: "Hardwired Transformer",
      price: 19.99,
      image: "Hardwired Transformer.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Lithium Coin Cell Battery",
      name: "Lithium Coin Cell Battery",
      price: 89.99,
      image: "Lithium Coin Cell Battery.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
        id: "Newhouse Hardware Door Chime",
        name: "Newhouse Hardware Door Chime",
        price: 89.99,
        image: "Newhouse Hardware Door Chime.jpg",
        category: "accessory",
        manufacturer: "Google",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Wireless Doorbells for Home Compatible",
        name: "Wireless Doorbells for Home Compatible",
        price: 89.99,
        image: "Wireless Doorbells for Home Compatible.jpg",
        category: "accessory",
        manufacturer: "Lorex",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Extension Cable Video Doorbell",
        name: "Extension Cable Video Doorbell",
        price: 89.99,
        image: "Extension Cable Video Doorbell.jpg",
        category: "accessory",
        manufacturer: "Lorex",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Power Adapter for Video Doorbell",
        name: "Power Adapter for Video Doorbell",
        price: 89.99,
        image: "Pwer Adapter for Video Doorbell.jpg",
        category: "accessory",
        manufacturer: "Ring",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Siding Nailer Adapter Kit",
        name: "Siding Nailer Adapter Kit",
        price: 89.99,
        image: "Siding Nailer Adapter Kit.jpg",
        category: "accessory",
        manufacturer: "Ring",
        condition: "New",
        discount: 40.0
      }
];

export default all_product;