import React from "react";
const category = [
    {
        value: "monitors",
        text: "Monitors",
    },
    {
        value: "laptops",
        text: "Laptops",
    },
    {
        value: "video_cards",
        text: "Video cards",
    },
    {
        value: "gaming_keyboards",
        text: "Gaming keyboards",
    },
    {
        value: "computer_mouse",
        text: "Computer mouse",
    },
    {
        value: "ssd",
        text: "SSD",
    },
    {
        value: "sounds_cards",
        text: "Sounds cards",
    },
    {
        value: "ram",
        text: "RAM",
    },
];


const brand = [
    {
        value: "asus",
        text: "Asus",
    },
    {
        value: "acer",
        text: "Acer",
    },
    {
        value: "apple",
        text: "Apple",
    },
    {
        value: "dell",
        text: "Dell",
    },
    {
        value: "dynamode",
        text: "Dynamode",
    },
    {
        value: "gigabyte",
        text: "Gigabyte",
    },
    {
        value: "kingston",
        text: "Kingston",
    },
    {
        value: "lenovo",
        text: "Lenovo",
    },
    {
        value: "logitech",
        text: "Logitech",
    },
    {
        value: "msi",
        text: "MSI",
    },
    {
        value: "benq",
        text: "BenQ",
    },
    {
        value: "a4tech",
        text: "A4Tech",
    },
];

export const SideBar = ({setBrand, setCategory} : {setBrand:(value:string) => void, setCategory:(value:string) => void}) => {
    return (
        <div className="side-bar">

            <div className="price-container">
                <p className="category-styles">Price</p>
            </div>
            <div className="range-slider">
                <span data-element="from">0 UAH</span>
                <div data-element="inner" className="range-slider__inner">
                    <span data-element="progress" className="range-slider__progress"
                          style={{left: '0%', right: '0%'}}></span>
                    <span data-element="thumbLeft" className="range-slider__thumb-left" style={{left: '0%'}}></span>
                    <span data-element="thumbRight" className="range-slider__thumb-right" style={{right: '0%'}}></span>
                </div>
                <span data-element="to">85000 UAH</span>
            </div>
            <div className="category-container">
                <p className="category-styles">Category</p>
            </div>
            <ul className="all-category">
                {category.map((num) =>
                    <li className="name-category">
                        <input className="box-form" type="checkbox"
                               onChange={(e) => setCategory(num.value)}/>
                               {num.text}</li>
                )

                }
            </ul>
            <div className="line-solid"></div>
            <p className="category-styles">Brand</p>
            <ul className="all-category">
                {brand.map((num) =>
                        <li className="name-category">
                            <input className="box-form" type="checkbox"
                                   onChange={(e) => setBrand(num.value)}/>
                                   {num.text}</li>
                )
                }
            </ul>
            <div className="line-solid"></div>
            <p className="category-styles">Rating</p>
            <div className="range-slider">
                <span data-element="from">0</span>
                <div data-element="inner" className="range-slider__inner">
                    <span data-element="progress" className="range-slider__progress"
                          style={{left: '0%', right: '0%'}}></span>
                    <span data-element="thumbLeft" className="range-slider__thumb-left" style={{left: '0%'}}></span>
                    <span data-element="thumbRight" className="range-slider__thumb-right" style={{right: '0%'}}></span>
                </div>
                <span data-element="to">5</span>
            </div>
        </div>
    )
}