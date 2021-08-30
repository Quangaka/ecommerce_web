import React from 'react'
import {Grid} from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

// const  products = [
//     { id: '1', name: 'Shoes', description: 'Running shoes', price: '$5', image:'https://it.basketzone.net/zdjecia/2019/01/19/1101/18/NIKE_AIR_JORDAN_LEGACY_312_OLYMPIC_DREAM_TEAM-mini.jpg'},
//     { id: '2', name: 'Macbook', description: 'Apple Macbook', price: '$10', image:'https://cdn.mediamart.vn/Product/apple-macbook-air-2020-m1-mgnd3-flxJ9b.jpg'},
//     { id: '3', name: 'Laptop', description: 'Lenovo ThinkPad', price: '$9', image:'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/Lenovo-ThinkPad-X1-Nano-8.jpg'}
// ]

const Products = ({products}) => {
    const classes = useStyles()
    
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/> 
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
