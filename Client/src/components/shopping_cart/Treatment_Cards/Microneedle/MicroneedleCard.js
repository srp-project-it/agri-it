import React from "react";
import { useDispatch } from "react-redux";
import ACTION_MICRO_NOT_IN_CART from "../../../../actions/InCart/Treatments/Microneedle/ACTION_MICRO_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import "../../CartCard.css";

const MicroneedleCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_MICRO_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());
    dispatch(ACTION_SELECTED_DAY_RESET());
    dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());

    props.resetAllCartStates();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIDk-aqPrriAasCRWx4vXrbXVkcV11_VvqQ&usqp=CAU" viewBox="0 0 56.356 56.356" width="100%" />
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3 style={{ fontSize: "1.2rem" }}>Livestock Consultation</h3>
          <p className="shopping_cart_duration">Duration: 50 minutes</p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">Rs 1,000</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroneedleCard;
