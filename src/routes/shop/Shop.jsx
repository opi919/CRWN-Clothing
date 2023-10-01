import React, { useContext } from "react"
import { ProductContext } from "../../components/context/ProductsContext"
import ProductCard from "../../components/product/ProductCard"
import "./Shop.scss"

export default function Shop() {
  const { products } = useContext(ProductContext)
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}
