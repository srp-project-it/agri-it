import React from "react";
import { useDispatch } from "react-redux";
import ACTION_CHEM_PEEL_NOT_IN_CART from "../../../../actions/InCart/Treatments/ChemicalPeel/ACTION_CHEM_PEEL_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import "../../CartCard.css";

const ChemicalPeelCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_CHEM_PEEL_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());
    dispatch(ACTION_SELECTED_DAY_RESET());
    dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());

    props.resetAllCartStates();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
      <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8N0z_8zMyiG1AMaa80F2wjoaohSxL8TrAzaFuliEunss-QcOVfVGeWdyhtX1jNRWBX_w&usqp=CAU" width="100%"  viewBox="0 0 66.146 66.146"/>

      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Land development</h3>
          <p className="shopping_cart_duration">Duration: 30 minutes</p>
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

export default ChemicalPeelCard;
