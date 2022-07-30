import React, {useEffect, useState} from "react";
import {Card, Product} from "../card/Card";


export const CardList = ({activePage, brand, category, search, setCart}: {
    activePage: number;
    brand: string[];
    category: string[];
    search: string
    setCart: (value: Product) => void    }) => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    function getData() {
        const url = new URL('https://online-store.bootcamp.place/api/products');
        url.searchParams.append('_page', activePage.toString());
        url.searchParams.append('_limit', (9).toString());
        console.log(brand, category);
        if (search) {
            url.searchParams.append('q', search)
        }
        if (brand.length) {
            brand.forEach(b => url.searchParams.append('brand', b))
        }
        if (category.length) {
            category.forEach(b => url.searchParams.append('category', b))
        }
        fetch(url)
            .then(response => response.json())
            .then(products => setAllProducts(products))
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        getData()
    }, [activePage, brand, category, search]);

    return (
        (<div className="os-products-list">{
            allProducts.map((product) =>
                <Card
                    id={product.id}
                    brand={product.brand}
                    category={product.category}
                    images={product.images}
                    price={product.price}
                    rating={product.rating}
                    title={product.title}
                    setCart={setCart}
                />)}
        </div>)
    )
}