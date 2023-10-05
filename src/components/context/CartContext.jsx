import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
})

const addCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find((item) => item.id === product.id)

  if (existingProduct) {
    return cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  return [...cartItems, { ...product, quantity: 1 }]
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => (total += cartItem.quantity), 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product))
  }

  const value = { isCartOpen, setCartOpen, addItemToCart, cartItems, setCartItems, cartCount }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
