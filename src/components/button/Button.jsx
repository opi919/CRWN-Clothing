import React from "react"
import "./Button.scss"

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
}

export default function Button({ child, buttonType, ...otherProps }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {child}
    </button>
  )
}
