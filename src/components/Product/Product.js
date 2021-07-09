
import styles from './Product.module.css'
import Link from 'next/Link'
import {Card, CardMedia, CardContent, CardActions, Typography,IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

export const Product = ({ product, onAddToCart }) => {


    return (
       <Card className={styles.root}>
       <a href= {product.thank_you_url}>
       <CardMedia className={styles.media} image={product.media.source} title={product.name}/>
       </a>
          
           <CardContent className={styles.cardContent}>
               <div>
                   <Typography variant="h5">
                       {product.name}
                   </Typography>
                   <Typography variant="h2">
                       {product.price.formatted_with_symbol}
                   </Typography>
               </div>
               {/* <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary"/>
                    */}
           </CardContent>
           <CardActions disableSpacing className={styles.cardActions}>
               <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)}>
                   <AddShoppingCart/>
               </IconButton>
           </CardActions>
       </Card>
    )
}

export default Product;
