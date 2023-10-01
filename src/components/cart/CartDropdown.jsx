import "./CartDropdown.scss"
import React from "react"
import Button from "../button/Button"

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>CHECKOUT</Button>
    </div>
  )
}
