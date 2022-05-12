import React from "react";
import "./LEDTherapy.css";
import "../../treatments/card_styling.css";

const LEDTherapyRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
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
        <h3>Drone facility Removed</h3>
      </div>
    </div>
  );
};

export default LEDTherapyRemovedNotification;
