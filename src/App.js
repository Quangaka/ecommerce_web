import React, {useState, useEffect} from 'react'
import {commerce} from './Library/commerce'
import {Products, Navbar, Cart} from './Components'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productID, quantity) => {
        const item = await commerce.cart.add(productID, quantity)

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    return(
        <div>
            <Navbar totalItems={cart.total_items} />
            {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App

