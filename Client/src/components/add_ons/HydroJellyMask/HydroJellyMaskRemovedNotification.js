import React from "react";
import "./HydroJellyMask.css";
import "../../treatments/card_styling.css";

const HydroJellyMaskRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDiUzpV7jlwdKuNdbcQVHlf5xO4YQ-4lJEw&usqp=CAU" viewBox="0 0 56.356 56.356"  width={
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
        <h3>Tool kits removed</h3>
      </div>
    </div>
  );
};

export default HydroJellyMaskRemovedNotification;
