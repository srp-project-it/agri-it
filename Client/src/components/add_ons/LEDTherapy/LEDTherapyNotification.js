import React from "react";
import "./LEDTherapy";
import "../../treatments/card_styling.css";

const LEDTherapyNotification = (props) => {
  return (
    <div className="notification_container">

        <img src="https://5.imimg.com/data5/IM/RP/UN/GLADMIN-4732238/crop-spraying-drone-500x500.jpg" viewBox="0 0 56.356 56.356"  width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "20%"
              : "29%"
            : props.currentScreenSize >= 1800
            ? "20%"
            : "29%"
        }
      />

      <div className="notification_text_container">
        <h3>drone facility Added</h3>

      </div>
    </div>
  );
};

export default LEDTherapyNotification;
