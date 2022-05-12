import React from "react";
import "./Calm.css";
import "../../treatments/card_styling.css";

const CalmRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://image.shutterstock.com/image-photo/crystal-clear-water-being-flush-260nw-201130814.jpg"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "24%"
              : "25%"
            : props.currentScreenSize >= 1800
            ? "24%"
            : "25%"
        }

        viewBox="0 0 56.356 56.356"
      />

      <div className="notification_text_container">
        <h3>Water Management Removed</h3>

      </div>
    </div>
  );
};

export default CalmRemovedNotification;
