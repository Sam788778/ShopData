import React from 'react';
import styles from './products.module.css';
import { NavLink } from 'react-router-dom';

const Products = ({ products }) => {
    return (
        <div className={styles.products}>
            {products.map((product) => (
                <NavLink to={`/products/${product.id}`} key={product.id} className={styles.product}>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.title}</h2>
                </NavLink>
            ))}
        </div>
    );
};

export default Products;