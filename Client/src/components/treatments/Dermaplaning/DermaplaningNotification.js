import React from "react";
import "./Dermaplaning";
import "../../treatments/card_styling.css";

const DermaplaningNotification = (props) => {
  return (
    <div className="notification_container">
      <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz3hGkWxWorHaAHoHY4M2AI4fnlTolXp9Pg&usqp=CAU"
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "26%"
              : "31%"
            : props.currentScreenSize >= 1800
            ? "26%"
            : "31%"
        }

        viewBox="0 0 50.006 50.006"
      />

      <div className="notification_text_container">
        <h3>Nutrients management Added</h3>
        </div>
    </div>
  );
};

export default DermaplaningNotification;
