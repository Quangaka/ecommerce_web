import React, {useState, useEffect} from 'react'
import {commerce} from './Library/commerce'
import {Products, Navbar} from './Components'

const App = () => {
    const [products, setProducts] = useState([])
    
    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)

    return(
        <div>
            <Navbar/>
            <Products products={products}/>
        </div>
    )
}

export default App

