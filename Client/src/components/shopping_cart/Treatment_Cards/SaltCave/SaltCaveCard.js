import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTION_SALT_CAVE_NOT_IN_CART from "../../../../actions/InCart/Treatments/SaltCave/ACTION_SALT_CAVE_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import "../../CartCard.css";
import ACTION_SELECTED_SALT_CAVE_DURATION_RESET from "../../../../actions/Treatments/SaltCave/SaltCaveDuration/ACTION_SELECTED_SALT_CAVE_DURATION_RESET";

const RejuvenateCard = (props) => {
  const dispatch = useDispatch();

  const selectedSaltCaveDuration = useSelector(
    (state) => state.selectedSaltCaveDuration.duration
  );

  const handleRemove = () => {
    dispatch(ACTION_SALT_CAVE_NOT_IN_CART());
    dispatch(ACTION_SELECTED_SALT_CAVE_DURATION_RESET());
    dispatch(ACTION_DECREMENT_COUNTER());
    dispatch(ACTION_SELECTED_DAY_RESET());
    dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());

    props.resetAllCartStates();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPMhIMUY1v3hopK1Wt_dm9X38F2K8C7Rmpw&usqp=CAU" viewBox="0 0 56.356 56.356" width="100%" />
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Poultry management</h3>
          <p className="shopping_cart_duration">
            Duration: {selectedSaltCaveDuration} minutes
          </p>
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

export default RejuvenateCard;
