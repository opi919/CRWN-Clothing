import React, { useContext } from "react"
import "./CartIcon.scss"
import ShoppingBagIcon from "../../assets/shopping-bag.svg?react"
import { CartContext } from "../context/CartContext"

export default function CartIcon() {
  const { isCartOpen, setCartOpen } = useContext(CartContext)
  const toggleCartDropdown = () => setCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingBagIcon className="cart-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
