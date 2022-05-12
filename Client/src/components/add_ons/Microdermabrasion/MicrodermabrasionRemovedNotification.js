import React from "react";
import "./Microdermabrasion.css";
import "../../treatments/card_styling.css";

const MicrodermabrasionRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://image.made-in-china.com/43f34j00LmztpecBgWkE/HDPE-Anti-UV-Anti-Bird-Net.jpg"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "28%"
              : "33%"
            : props.currentScreenSize >= 1800
            ? "28%"
            : "33%"
        }

        viewBox="0 0 56.356 56.356"
      />

      <div className="notification_text_container">
        <h3>Bird Nets Removed</h3>

      </div>
    </div>
  );
};

export default MicrodermabrasionRemovedNotification;
