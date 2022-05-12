import React from "react";
import "./Beard";
import "../../treatments/card_styling.css";

const BeardNotification = (props) => {
  return (
    <div className="notification_container">
      <img src="https://resources.altair.com/corp/images/Altair_Solutions_Page_Heavy-Equipment_Social-Share.jpg" viewBox="0 0 56.356 56.356"  width={
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
        <h3> Heavy Equipment added </h3>
        
      </div>
    </div>
  );
};

export default BeardNotification;
