import React from "react";
import "./NanoNeedling.css";
import "../../treatments/card_styling.css";

const NanoNeedlingRemovedNotification = (props) => {
  return (
    <div className="notification_removed_container">
      <img src="https://media.osram.info/im/img/osram-dam-2222182/c,x,0,y,223,w,1746,h,970/s,x,1260,y,0/ZELION_HL300_Large_Greenhouse_Application-Grow-crop_7d36fdbe-8366-43ed-b92c-3cb73e025424.jpeg"

        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "31%"
              : "40%"
            : props.currentScreenSize >= 1800
            ? "31%"
            : "40%"
        }

        viewBox="0 0 56.356 56.356"
      />

      <div className="notification_text_container">
        <h3
          style={{
            fontSize:
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "1.5rem"
                  : "0.9rem"
                : props.currentScreenSize >= 1800
                ? "1.5rem"
                : "0.9rem",
          }}
        >
          Horticulture Lighting Removed
        </h3>

      </div>
    </div>
  );
};

export default NanoNeedlingRemovedNotification;
