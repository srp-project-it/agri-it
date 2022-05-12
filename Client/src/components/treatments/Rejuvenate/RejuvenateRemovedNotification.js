import React from "react";
import "./Rejuvenate.css";
import "../../treatments/card_styling.css";

const RejuvenateRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoucOJ4O36DK-Q8xd74xGLotHi1OCD8eYvQ&usqp=CAU" viewBox="0 0 56.356 56.356"  width={
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
        <h3>Harvesting and storage management removed</h3>
      </div>
    </div>
  );
};

export default RejuvenateRemovedNotification;
