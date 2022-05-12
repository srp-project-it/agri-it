import React from "react";
import "./Microneedle.css";
import "../../treatments/card_styling.css";

const MicroneedleRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIDk-aqPrriAasCRWx4vXrbXVkcV11_VvqQ&usqp=CAU" viewBox="0 0 56.356 56.356"  width={
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
        <h3>Livestock consultation removed</h3>
      </div>
    </div>
  );
};

export default MicroneedleRemovedNotification;
