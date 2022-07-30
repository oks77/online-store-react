import React, {useState} from "react";
import {Product} from "../card/Card";

export const OpenCart = ({setOpenCart, product} : {setOpenCart:(value:boolean) => void, product: Product[]}) => {
    const [amount, setAmount] = useState<number>(1);
    return (
            <div className="modal" id="modal">
                <div className="close-button" id="close-button"
                onClick={(e) =>
                    setOpenCart(false)
                }>
                    <i className="bi bi-x-lg"></i></div>
                <div className="cart-container">
                    <div className="item-container">
                        {product.map(value =>
                        <div className="item">
                            <div className="image"
                                 style={{backgroundImage: `url(${value.images[0]}`}}/>
                                <p className="name-item">{value.title}</p>
                                <i className="bi bi-dash-circle"
                                    onClick={() => setAmount(amount-1)}></i>
                                <div className="amount">{amount}</div>
                                <i className="bi bi-plus-circle"
                                   onClick={() => setAmount(amount+1)}></i>
                                <div className="price">{value.price}</div>
                        </div>
                    )}</div>
                    <div className="total" id="total">Total: {product.reduce(
                        (acc, value) => acc + +value.price,0)}</div>
                    <div className="button-order">
                        <button className="order">ORDER</button>
                    </div>
                </div>
            </div>
    )
}