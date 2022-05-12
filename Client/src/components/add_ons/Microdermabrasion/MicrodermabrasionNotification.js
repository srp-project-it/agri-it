import React from "react";
import "./Microdermabrasion";
import "../../treatments/card_styling.css";

const MicrodermabrasionNotification = (props) => {
  return (
    <div className="notification_container">
      <img src="https://image.made-in-china.com/43f34j00LmztpecBgWkE/HDPE-Anti-UV-Anti-Bird-Net.jpg"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "26%"
              : "33%"
            : props.currentScreenSize >= 1800
            ? "26%"
            : "33%"
        }

        viewBox="0 0 56.356 56.356"
      />

      <div className="notification_text_container">
        <h3>Bird Nets Added</h3>

      </div>
    </div>
  );
};

export default MicrodermabrasionNotification;
