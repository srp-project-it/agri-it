import React from "react";
import "./ExtraExtractions.css";
import "../../treatments/card_styling.css";

const ExtraExtractionsNotification = (props) => {
  return (
    <div className="notification_container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96jicWO7oZanL-ogg0sJ90AoO2k0W617ccg&usqp=CAU" viewBox="0 0 56.356 56.356"  width={
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
        <h3>Seed packs added</h3>
      </div>
    </div>
  );
};

export default ExtraExtractionsNotification;
