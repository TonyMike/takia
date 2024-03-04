export const categories = [
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
export const safetyTips = [
  "Don't send any prepayments",
  "A public place is a good place to meet the seller",
  "Verify what you're buying to make sure it's the right thing",
  "Verify all documents and only pay if you're satisfiedjdjdjjdjdjdjd d"
]

export const getProduct = async (productId) => {
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