import React from "react";



export const Cart = ({setOpenCart} : {setOpenCart:(value:boolean) => void}) => {
    return (
        <div>
            <div className="main-cart-button" id="open-cart"
            onClick={(e) =>
              setOpenCart(true)
            }>
                <i className="bi bi-cart-plus"></i>
                CART
            </div>
        </div>
    )


}
