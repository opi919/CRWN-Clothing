import React from "react"
import './CategoryItem.scss'

export default function CategoryItem({ category }) {
  const { title, imagePath } = category
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imagePath})` }}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
