import React, {useState} from 'react';
import './App.css';
import {CardList} from "./card-list/Card-list";
import {Cart} from "./cart/Cart";
import {Pagination} from "./pagination/Pagination";
import {Search} from "./search/Search";
import {SideBar} from "./side-bar/Side-bar";
import {OpenCart} from "./open-cart/Open-cart";
import {Product} from "./card/Card";

function App() {
    const [activePage, setActivePage] = useState(1);
    const [brand, setBrand] = useState<string[]>([]);
    const [category, setCategory] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');
    const [cart, setCart] = useState<Product[]>([]);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const updateCardList = (product: Product) => {
        setCart([...cart, product])
    }

    const getBrand = (item:string) => {
        if(brand.includes(item)){
            setBrand(brand.filter(v => v !== item))
        }else{
            setBrand([...brand,item])
        }
    }

    const getCategory = (item:string) => {
        if(category.includes(item)){
            setCategory(category.filter(v => v !== item))
        }else{
            setCategory([...category,item])
        }
    }

    return (
    <div className="main-container">
            <div className="top-part">
                <p className="online-store-name">Online Store</p>
                <Cart setOpenCart={setOpenCart}/>
                {openCart? <OpenCart setOpenCart = {setOpenCart} product={cart}/>: null}
            </div>
            <div className="content">
                <SideBar setCategory = {getCategory} setBrand = {getBrand}/>
                <div className="central-part">
                    <Search setSearch = {setSearch}/>
                    <CardList activePage = {activePage} brand = {brand} category = {category} search = {search}
                    setCart = {updateCardList}/>
                    <div className="bottom-part">
                        <Pagination activePage = {activePage} totalPages = {12} setActivePage = {setActivePage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
