import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput/SearchInput'
import { useState, useEffect } from 'react'
import Products from '../components/Products/Products'
import { commerce } from '../lib/commerce.js'
import Navbar from '../components/Navbar/Navbar'
import Cart from '../components/Cart/Cart'


export default function Home() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})  
    

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () =>{
        const cart = await commerce.cart.retrieve();

        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity)=>{
        const item = await commerce.cart.add(productId,quantity);

        setCart(item.cart);

    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart)

    const [keyword, setKeyword] = useState("");

    const filteredName = products.filter(c => c.name.toLowerCase().includes(keyword));

    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }

    return (
        <Layout>

            <Navbar totalItems={cart.total_items} />
            <SearchInput
                placeholder="Filter by name"
                onChange={onInputChange} />
                <Cart cart={cart}/>
            {/* <Products products={filteredName} onAddToCart={handleAddToCart} /> */}


        </Layout>
    );
}


