import React from "react";
import { useDispatch } from "react-redux";
import ACTION_CBD_NOT_IN_CART from "../../../../actions/InCart/Treatments/CBD/ACTION_CBD_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import "../../CartCard.css";

const CBDCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_CBD_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());
    dispatch(ACTION_SELECTED_DAY_RESET());
    dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());

    props.resetAllCartStates();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
      <img src="https://i0.wp.com/newsfie.in/wp-content/uploads/2021/07/Self-Sufficiency-in-Production-of-Oilseeds-and-Pulses.jpg?fit=512%2C322&ssl=1"  width="100%" viewBox="0 0 50.006 50.006"/>

      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Seed consultation</h3>
          <p className="shopping_cart_duration">Duration: 1 hour</p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">Rs 1000</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBDCard;
