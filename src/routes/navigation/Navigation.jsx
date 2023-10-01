import React, { useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import CrownLogo from "../../assets/crown.svg?react"
import "./Navigation.scss"
import { UserContext } from "../../components/context/UserContext"
import { signOutUser } from "../../utils/firebase/Firebase"
import CartIcon from "../../components/cart/CartIcon"
import CartDropdown from "../../components/cart/CartDropdown"
import { CartContext } from "../../components/context/CartContext"

export default function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </>
  )
}
