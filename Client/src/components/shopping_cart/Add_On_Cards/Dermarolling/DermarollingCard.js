import React from "react";
import { useDispatch } from "react-redux";
import ACTION_DERMAROLLING_NOT_IN_CART from "../../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import "../../CartCard.css";

const DermarollingCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_DERMAROLLING_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());

    props.resetAllCartStatesExceptTreatments();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <img src = "https://uploads-ssl.webflow.com/61a503785b6ce52e8fbf3b6d/61b87c518515900934480312_Livestock-and-its-Influence-on-Human-Beings.jpeg" viewBox="0 0 56.356 56.356" width="100%"  />
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Livestock</h3>
          <p className="shopping_cart_duration"></p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">Rs 50,000</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DermarollingCard;
