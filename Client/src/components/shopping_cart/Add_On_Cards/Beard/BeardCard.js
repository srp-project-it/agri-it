import React from "react";
import { useDispatch } from "react-redux";
import ACTION_BEARD_NOT_IN_CART from "../../../../actions/InCart/AddOns/Beard/ACTION_BEARD_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import "../../CartCard.css";

const BeardCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_BEARD_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());

    props.resetAllCartStatesExceptTreatments();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
      <img src = "https://resources.altair.com/corp/images/Altair_Solutions_Page_Heavy-Equipment_Social-Share.jpg" viewBox="0 0 56.356 56.356" width="100%"  />
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Heavy Equipment</h3>
          <p className="shopping_cart_duration"></p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">Rs 2.5L</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeardCard;