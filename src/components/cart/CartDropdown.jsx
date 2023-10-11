import "./CartDropdown.scss"
import React, { useContext } from "react"
import Button from "../button/Button"
import CartItem from "./CartItem"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function CartDropdown() {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)

  const goToCheckout = () => navigate("/checkout")

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </div>
  )
}
