import React from "react";
import { useDispatch } from "react-redux";
import ACTION_NANONEEDLING_NOT_IN_CART from "../../../../actions/InCart/AddOns/NanoNeedling/ACTION_NANONEEDLING_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import "../../CartCard.css";

const NanoNeedlingCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_NANONEEDLING_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());

    props.resetAllCartStatesExceptTreatments();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <img src="https://media.osram.info/im/img/osram-dam-2222182/c,x,0,y,223,w,1746,h,970/s,x,1260,y,0/ZELION_HL300_Large_Greenhouse_Application-Grow-crop_7d36fdbe-8366-43ed-b92c-3cb73e025424.jpeg" width="100%" viewBox="0 0 56.356 56.356" />

      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Horticulture Lighting</h3>

        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">Rs 15,000</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NanoNeedlingCard;
