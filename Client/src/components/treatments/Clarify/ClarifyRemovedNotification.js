import React from "react";
import "./Clarify.css";
import "../../treatments/card_styling.css";

const ClarifyRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTys4AlOtJJEryS-BWLIpGkF00mb_AP2DPyaQ&usqp=CAU"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "24%"
              : "26%"
            : props.currentScreenSize >= 1800
            ? "24%"
            : "26%"
        }
        viewBox="0 0 50.006 50.006"
      />

      <div className="notification_text_container">
        <h3>Insect Pest Management Removed</h3>

      </div>
    </div>
  );
};

export default ClarifyRemovedNotification;
