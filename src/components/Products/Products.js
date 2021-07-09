import styles from './Products.module.css'
import Link from 'next/Link'
import Product from '../Product/Product'
import { Grid } from '@material-ui/core'




export const Products = ({ products, onAddToCart }) => {
    return (
        <div>
            <Grid container justify="center" spacing={4}>

                {products.map((product) => (
                   
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
               

                ))}

            </Grid>
        </div>

    );
};

export default Products;
