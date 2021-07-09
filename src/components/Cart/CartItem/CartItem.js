import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import styles from './CartItem.module.css'

const CartItem = ({ item }) => {
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={styles.media} />
            <CardContent className={styles.CardContent}>
                <Typography variant="h10">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.farmatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={styles.CardActions}>
                <div className={styles.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>

                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>

            </CardActions>

        </Card>
    )
}

export default CartItem
