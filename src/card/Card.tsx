import React from "react";

export type Product = {
    id:string;
    images: string[];
    title:string;
    rating:number;
    price:number;
    category:string;
    brand:string;

}
type Props = Product & {setCart: (value: Product)=>void}
export const Card = (product : Props) => {
    return (
        <div className="os-product-card">
        <div className="os-product-img" style={{backgroundImage: `url(${product.images[0]}`}}/>
        <div className="os-product-content">
            <div className="os-product-price-wrapper">
                <div className="os-product-rating">
                    <span>{product.rating}</span>
                    <i className="bi bi-star"></i>
                </div>
                <div className="os-product-price">{product.price}</div>
            </div>
            <h5 className="os-product-title">{product.title}</h5>
            <p className="os-product-description">{product.category}</p>
        </div>
        <footer className="os-product-footer">
            <button className="os-btn-primary addToCartButton" data-element="addToCartBtn" data-id="{id}"
            onClick={() => product.setCart(product)}>
                Add To Cart
            </button>
        </footer>
    </div>
    );

}


