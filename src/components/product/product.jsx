import React from 'react'
import styles from './product.module.css'
import { useParams } from 'react-router-dom'

const Product = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === +id)

  return (
    <div className={styles.Product}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
  )
}

export default Product;