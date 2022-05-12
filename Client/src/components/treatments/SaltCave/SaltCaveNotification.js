import React from "react";
import "./SaltCave.css";
import "../../treatments/card_styling.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const SaltCaveNotification = (props) => {
  return (
    <div className="notification_container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPMhIMUY1v3hopK1Wt_dm9X38F2K8C7Rmpw&usqp=CAU" viewBox="0 0 56.356 56.356"  width={
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
        <h3>Poultry management added</h3>
      </div>
    </div>
  );
};

export default SaltCaveNotification;
