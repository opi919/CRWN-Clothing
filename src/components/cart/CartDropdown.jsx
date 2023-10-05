import "./CartDropdown.scss"
import React, { useContext } from "react"
import Button from "../button/Button"
import CartItem from "./CartItem"
import { CartContext } from "../context/CartContext"

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  )
}
