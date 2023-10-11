import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  remoteItemFromCart: () => {},
  removeProductFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const addCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find((item) => item.id === product.id)

  if (existingProduct) {
    return cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  return [...cartItems, { ...product, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingProduct = cartItems.find((item) => item.id === cartItemToRemove.id)

  if (existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
}

const removeProduct = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const remoteItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const removeProductFromCart = (productToRemove) => {
    setCartItems(removeProduct(cartItems, productToRemove))
  }

  const value = { isCartOpen, setCartOpen, addItemToCart, cartItems, setCartItems, cartCount, remoteItemFromCart, removeProductFromCart, cartTotal }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
