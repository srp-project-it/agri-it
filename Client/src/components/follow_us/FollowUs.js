import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Spring } from "react-spring/renderprops";
import { useInView } from "react-intersection-observer";
import "./FollowUs.css";
import "./Instagram.css";
import composeRefs from "@seznam/compose-react-refs";
import FrontDecal from "../../images/FollowUsImages/FrontDecal.jpg";
import FrontCouch from "../../images/FollowUsImages/FrontCouch.jpg";
import FrontDesk from "../../images/FollowUsImages/FrontDesk.jpg";
import SaltCave from "../../images/FollowUsImages/SaltCave.jpg";
import LED from "../../images/FollowUsImages/LED.jpg";
import DimRoom from "../../images/FollowUsImages/DimRoom.jpg";
import NeonSign from "../../images/FollowUsImages/NeonSign.jpg";
import Dermaplaning from "../../images/FollowUsImages/Dermaplaning.jpg";

const FollowUs = React.forwardRef((props, ref) => {
  const { InstagramRef, initialScreenSize, name } = props;
  const followUsHeaderRef = useRef(null);

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: initialScreenSize >= 1200 ? 0.3 : 0.2,
  });

  return (
    <div
      className="follow_us_container"
      id={name}
      ref={composeRefs(InstagramRef, inViewRef)}
    >
      {inView ? (
        <>
          <header className="follow_us_sub_container_header">
            <Spring
              from={{
                opacity: 0,
              }}
              to={{
                opacity: 1,
              }}
              config={{ duration: 1000 }}
            >
              {(styles) => (
                <>
                  <h1
                    style={{
                      opacity: `${styles.opacity}`,
                    }}
                    ref={followUsHeaderRef}
                  >
                    FOLLOW US
                  </h1>
                  <span
                    style={{
                      opacity: `${styles.opacity}`,
                      width: followUsHeaderRef.current
                        ? followUsHeaderRef.current.clientWidth + "px"
                        : "0px",
                    }}
                    className="follow_us_underline"
                  />
                </>
              )}
            </Spring>
          </header>
          <Spring
            from={{
              opacity: 0,
            }}
            to={{
              opacity: 1,
            }}
            config={{ duration: 1000 }}
          >
            {(propstyles) => (
              <>
                <div
                  className="follow_us_sub_container_left"
                  style={{
                    opacity: `${propstyles.opacity}`,
                  }}
                >
                  <div className="insta_photo_1">
                    <img
                      alt="Front_Decal"
                      src="https://notesread.com/wp-content/uploads/2019/12/Agricultural-Consultant.jpg"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                  <div className="insta_photo_2">
                    <img
                      alt="Front_Couch"
                      src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/14/w1200X800/tnagriculturebudget.jpg"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                  <div className="insta_photo_3">
                    <img
                      alt="Front_Desk"
                      src="https://image.shutterstock.com/image-photo/tractor-spraying-pesticides-on-soybean-260nw-653708227.jpg"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                  <div className="insta_photo_4">
                    <img
                      alt="Salt_Cave"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-jajiaY7MlESIfd6eMcugQ5mwDsnz9Y9OA&usqp=CAU"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                </div>

                <div
                  className="follow_us_sub_container_middle"
                  style={{
                    opacity: `${propstyles.opacity}`,
                  }}
                >
                  <p>
                    Connect with us on <br />
                    Instagram <br />
                     <br />

                    <br />
                  </p>
                  <FontAwesomeIcon
                    className="instagram_icon"
                    icon={faInstagram}
                    onClick={() =>
                      window.open("https://instagram.com/", "_blank")
                    }
                  />
                  <p></p>
                </div>

                <div
                  className="follow_us_sub_container_right"
                  style={{
                    opacity: `${propstyles.opacity}`,
                  }}
                >
                  <div className="insta_photo_5">
                    <img
                      alt="LED"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulCdChD1HCj59QrPb-6JMcih9X28xgL2yQg&usqp=CAU"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                  <div className="insta_photo_6">
                    <img
                      alt="Dim_Room"
                      src="https://media.osram.info/im/img/osram-dam-2222182/c,x,0,y,223,w,1746,h,970/s,x,1260,y,0/ZELION_HL300_Large_Greenhouse_Application-Grow-crop_7d36fdbe-8366-43ed-b92c-3cb73e025424.jpeg"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                  <div className="insta_photo_7">
                    <img
                      alt="Neon_Sign"
                      src="https://media.osram.info/im/img/osram-dam-2222182/c,x,0,y,223,w,1746,h,970/s,x,1260,y,0/ZELION_HL300_Large_Greenhouse_Application-Grow-crop_7d36fdbe-8366-43ed-b92c-3cb73e025424.jpeg"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                  <div className="insta_photo_8">
                    <img
                      alt="Dermaplaning"
                      src="https://4.imimg.com/data4/FR/XF/MY-27291509/agriculture-sprinkler-500x500.jpg"
                      style={{
                        opacity: `${propstyles.opacity}`,
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </Spring>
        </>
      ) : null}
    </div>
  );
});

export default FollowUs;
