import React from "react";
import "./ChemicalPeel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "../../treatments/card_styling.css";

const ChemicalPeelNotification = (props) => {
  return (
    <div className="notification_container">
      <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8N0z_8zMyiG1AMaa80F2wjoaohSxL8TrAzaFuliEunss-QcOVfVGeWdyhtX1jNRWBX_w&usqp=CAU"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "25%"
              : "31%"
            : props.currentScreenSize >= 1800
            ? "25%"
            : "31%"
        }

        viewBox="0 0 66.146 66.146"
      />

      <div className="notification_text_container">
        <h3>Land development Added</h3>

      </div>
    </div>
  );
};

export default ChemicalPeelNotification;
