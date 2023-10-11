import React, { useContext } from "react"
import "./CheckoutItem.scss"
import { CartContext } from "../context/CartContext"

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem
  const { removeProductFromCart, addItemToCart, remoteItemFromCart } = useContext(CartContext)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => remoteItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeProductFromCart(cartItem)}>
        &#10060;
      </div>
    </div>
  )
}
