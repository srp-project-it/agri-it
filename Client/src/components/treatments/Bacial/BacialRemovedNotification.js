import React from "react";
import "./Bacial.css";
import "../../treatments/card_styling.css";

const BacialRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://www.souriau.com/en-en/system/files/zapp2photo-shutterstock_645059614_-_copie-min.jpg"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "24%"
              : "26%"
            : props.currentScreenSize >= 1800
            ? "24%"
            : "26%"
        }

        viewBox="0 0 56 56"
      />

      <div className="notification_text_container">
        <h3>Lighting consultation  Removed</h3>

      </div>
    </div>
  );
};

export default BacialRemovedNotification;
