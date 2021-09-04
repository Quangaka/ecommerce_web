import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
    const classes = useStyles()

    return (
        <div>
            <Card>
                <CardMedia component="img" image={item.media.source} alt={item.name} className={classes.cardMedia} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartItem
