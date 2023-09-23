import React from "react"
import { Outlet, Link } from "react-router-dom"
import CrownLogo from "../../assets/crown.svg?react"
import "./Navigation.scss"

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign in
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  )
}
