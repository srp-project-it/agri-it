import React from "react";
import "./Dermarolling";
import "../../treatments/card_styling.css";

const DermarollingNotification = (props) => {
  return (
    <div className="notification_container">
      <img src="https://uploads-ssl.webflow.com/61a503785b6ce52e8fbf3b6d/61b87c518515900934480312_Livestock-and-its-Influence-on-Human-Beings.jpeg" viewBox="0 0 56.356 56.356"  width={
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
        <h3>Livestock added</h3>
      </div>
    </div>
  );
};

export default DermarollingNotification;
