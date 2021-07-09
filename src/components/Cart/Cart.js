import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem'


const Cart = ({cart}) => {


    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your Shopping cart start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>

            <div className={styles.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={styles.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={styles.checkoutButton} size="large" type="button" variant="contained" color="primary">checkout</Button>
                </div>

            </div>

        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={styles.toolbar} />
            <Typography className={styles.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
