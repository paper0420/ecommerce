import React from 'react'
import styles from './Navbar.module.css'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import Image from 'next/image'
import Link from 'next/link'


export const Navbar = ({totalItems}) => {
    return (
        <div>
            <AppBar position="fixed" className={styles.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={styles.title} color="inherit">
                    <Image src="/sumij.png" alt="sumij" width="30" height="30" />
                        Sumi J
                    </Typography>
                    <div className={styles.grow} />
                    <div className={styles.button}>
                    <Link href="/about">
                    
                    <IconButton  aria-label="Show cart items" color="inherit">
                            <ShoppingCart/>
                            <Badge badgeContent={totalItems} color="secondary"></Badge>
                         
                        </IconButton>
                    </Link>
               
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
