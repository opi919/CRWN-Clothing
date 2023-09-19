import React from "react"
import CategoryItem from "../category-item/CategoryItem"
import "./Directory.scss"

export default function Directory({categories}) {

  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}
