import React from "react";
import "./Microcurrent.css";
import "../../treatments/card_styling.css";

const MicrocurrentRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7ZFMGMBhLM3UQD3zg2jtBzgimPznLCB0Aw&usqp=CAU" width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "21%"
              : "29%"
            : props.currentScreenSize >= 1800
            ? "21%"
            : "29%"
        }


        viewBox="0 0 56.356 56.356" />
      <div className="notification_text_container">
        <h3>Manure, Fertilisers, and Pesticides Removed</h3>

      </div>
    </div>
  );
};

export default MicrocurrentRemovedNotification;
