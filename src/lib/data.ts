import { categoryProp } from "../@types/types";


export const categoriesOptions: string[] = [
  'Phones & tablets',
  'Electronics',
  'Computers',
  'Fashion',
  'Sport & outdoor',
  'Arts',
  'Furnitures',
  'Beauty',
  'Home Appliances',
  'vehicles',
  'Properties',
  'Musical Instrument'
];
export const conditionOptions: string[] = ['New', 'Used'];

export const categories:categoryProp[] = [
  {
    category: "phoness & tablets",
    icon: '/icons/smartphone.png'
  },
  {
    category: "Electronics",
    icon: '/icons/electronics.png'
  },
  {
    category: "Computers",
    icon: '/icons/computer.png'
  },
  {
    category: "Fashion",
    icon: '/icons/fashion.png'
  },
  {
    category: "Sport & outdoor",
    icon: '/icons/sport.png'
  },
  {
    category: "arts",
    icon: '/icons/arts.png',
  },
  {
    category: "Furnitures",
    icon: '/icons/furnitures.png'
  },
  {
    category: 'beauty',
    icon: '/icons/beauty.png'
  },

  {
    category: "Home Appliances",
    icon: '/icons/home-appliance.png'
  },
  {
    category: "vehicles",
    icon: '/icons/vehicles.png'
  },
  {
    category: "Properties",
    icon: '/icons/house.png'
  },
  {
    category: "Musical Instrument",
    icon: '/icons/musical-instrument.png'
  },

]
export const safetyTips = [
  "Don't send any prepayments",
  "A public place is a good place to meet the seller",
  "Verify what you're buying to make sure it's the right thing",
  "Verify all documents and only pay if you're satisfiedjdjdjjdjdjdjd d"
]

export const getProduct = async (productId:{productId:Object}) => {
  try {
    const data = await fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(data => data)
    return data
  } catch (error) {
    return {
      error: "something went wrong"
    }
  }
}


