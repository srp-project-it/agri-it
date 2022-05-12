import React from "react";
import { useDispatch } from "react-redux";
import ACTION_MICRODERMABRASION_NOT_IN_CART from "../../../../actions/InCart/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import "../../CartCard.css";

const MicrodermabrasionCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_MICRODERMABRASION_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());

    props.resetAllCartStatesExceptTreatments();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <img src="https://image.made-in-china.com/43f34j00LmztpecBgWkE/HDPE-Anti-UV-Anti-Bird-Net.jpg" width="100%"  viewBox="0 0 56.356 56.356" />


      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Bird Nets</h3>
          <p className="shopping_cart_duration"></p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">Rs 2500</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrodermabrasionCard;
