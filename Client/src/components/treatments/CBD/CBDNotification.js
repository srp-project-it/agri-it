import React from "react";
import "./CBD.css";
import "../../treatments/card_styling.css";

const CBDNotification = (props) => {
  return (
    <div className="notification_container">
     <img src="https://i0.wp.com/newsfie.in/wp-content/uploads/2021/07/Self-Sufficiency-in-Production-of-Oilseeds-and-Pulses.jpg?fit=512%2C322&ssl=1"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "19%"
              : "25%"
            : props.currentScreenSize >= 1800
            ? "19%"
            : "25%"
        }

        viewBox="0 0 50.006 50.006"
      />

      <div className="notification_text_container">
        <h3>Seed consultation Added</h3>

      </div>
    </div>
  );
};

export default CBDNotification;
