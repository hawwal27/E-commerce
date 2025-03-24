import React, { useContext } from "react";
import './Productdisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from "../../Context/ShopContext";

 
const Productdisplay =(props) => {
    const {product} =props;
    const {addToCart} = useContext(ShopContext);

    return(
        <div className="Productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img  className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdispaly-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                   But was lines to weary it his. This olden few and third alas weary grace. Vulgar felt of save oh begun time. Day glare it earth he where a the. Revel wight to a venerable, drugged the one him youth seemed to was known. These he thy vast into known. 
                </div>
                <div className="productdisplay-right-size">
                    <h1>select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className="prodcutdisplay-right-category"><span>Category:</span>Women, T-shirt, Crop Top </p>
                <p className="prodcutdisplay-right-category"><span>Tags:</span>Modern, Latest </p>

            </div>
        </div>
    )
}

export default Productdisplay