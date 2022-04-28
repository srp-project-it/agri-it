import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSquare,
  faClock,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import ACTION_DERMAROLLING_TOGGLE from "../../../actions/AddOns/Dermarolling/ACTION_DERMAROLLING_TOGGLE";
import ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET from "../../../actions/AddOns/ExtraExtractions/ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET";
import ACTION_HYDRO_JELLY_TOGGLE_RESET from "../../../actions/AddOns/HydroJellyMask/ACTION_HYDRO_JELLY_TOGGLE_RESET";
import ACTION_LED_THERAPY_TOGGLE_RESET from "../../../actions/AddOns/LEDTherapy/ACTION_LED_THERAPY_TOGGLE_RESET";
import ACTION_MICROCURRENT_TOGGLE_RESET from "../../../actions/AddOns/Microcurrent/ACTION_MICROCURRENT_TOGGLE_RESET";
import ACTION_MICRODERMABRASION_TOGGLE_RESET from "../../../actions/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_TOGGLE_RESET";
import ACTION_DERMAROLLING_TOGGLE_RESET from "../../../actions/AddOns/Dermarolling/ACTION_DERMAROLLING_TOGGLE_RESET";
import ACTION_NANONEEDLING_TOGGLE_RESET from "../../../actions/AddOns/Nanoneedling/ACTION_NANONEEDLING_TOGGLE_RESET";
import ACTION_GUASHA_TOGGLE_RESET from "../../../actions/AddOns/GuaSha/ACTION_GUASHA_TOGGLE_RESET";
import ACTION_BEARD_TOGGLE_RESET from "../../../actions/AddOns/Beard/ACTION_BEARD_TOGGLE_RESET";
import ACTION_DERMAROLLING_IN_CART from "../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_IN_CART";
import ACTION_DERMAROLLING_NOT_IN_CART from "../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import { toast } from "react-toastify";
import DermarollingNotification from "./DermarollingNotification";
import DermarollingRemovedNotification from "./DermarollingRemovedNotification";
import AddOnsChemPeelErrorNotification from "../AddOnsChemPeelErrorNotification";
import AddOnsMicroneedlingErrorNotification from "../AddOnsMicroneedlingErrorNotification";
import "./Dermarolling.css";
import "../../treatments/card_styling.css";

const Dermarolling = (props) => {
  const extraExtractionsToggle = useSelector(
    (state) => state.extraExtractionsToggle.toggle
  );
  const hydroJellyToggle = useSelector(
    (state) => state.hydroJellyToggle.toggle
  );
  const ledTherapyToggle = useSelector(
    (state) => state.ledTherapyToggle.toggle
  );
  const microcurrentToggle = useSelector(
    (state) => state.microcurrentToggle.toggle
  );
  const microdermabrasionToggle = useSelector(
    (state) => state.microdermabrasionToggle.toggle
  );
  const dermarollingToggle = useSelector(
    (state) => state.dermarollingToggle.toggle
  );
  const nanoneedlingToggle = useSelector(
    (state) => state.nanoneedlingToggle.toggle
  );
  const guashaToggle = useSelector((state) => state.guashaToggle.toggle);
  const beardToggle = useSelector((state) => state.beardToggle.toggle);

  // In Cart states
  const dermarollingInCart = useSelector(
    (state) => state.dermarollingInCart.in_cart
  );
  const microneedleInCart = useSelector(
    (state) => state.microneedleInCart.in_cart
  );
  const chemicalPeelInCart = useSelector(
    (state) => state.chemicalPeelInCart.in_cart
  );
  const saltCaveInCart = useSelector((state) => state.saltCaveInCart.in_cart);

  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!dermarollingToggle) {
      dispatch(ACTION_DERMAROLLING_TOGGLE());
      if (extraExtractionsToggle) {
        dispatch(ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET());
      }
      if (hydroJellyToggle) {
        dispatch(ACTION_HYDRO_JELLY_TOGGLE_RESET());
      }
      if (ledTherapyToggle) {
        dispatch(ACTION_LED_THERAPY_TOGGLE_RESET());
      }
      if (microcurrentToggle) {
        dispatch(ACTION_MICROCURRENT_TOGGLE_RESET());
      }
      if (microdermabrasionToggle) {
        dispatch(ACTION_MICRODERMABRASION_TOGGLE_RESET());
      }
      if (nanoneedlingToggle) {
        dispatch(ACTION_NANONEEDLING_TOGGLE_RESET());
      }
      if (guashaToggle) {
        dispatch(ACTION_GUASHA_TOGGLE_RESET());
      }
      if (beardToggle) {
        dispatch(ACTION_BEARD_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_DERMAROLLING_TOGGLE_RESET());
    }
  };
/*
  const cardDescriptionHandler = () => {
    if (dermarollingToggle) {
      return (
        <>
          <div className="card_description_add_on_paragraph_toggle">
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>10 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$15</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          This painless procedure uses a device covered with tiny needles to
          create holes in the skin's surface. These stimulate collagen
          production, contributing to a younger look.
        </p>
      );
    }
  };
*/
  const PlusBounce = Keyframes.Spring({
    plusBounce: [
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 100 },
      },
      {
        marginTop: "-9px",
        color: "rgb(155, 98, 107)",
        config: { duration: 300 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-6",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-4px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
    ],
  });

  const checkMark = () => {
    return (
      <Spring from={{ x: 100 }} to={{ x: 0 }} config={{ duration: 2000 }}>
        {(styles) => (
          <svg
            width={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "2rem"
                  : props.initialScreenSize >= 1400
                  ? "1rem"
                  : props.initialScreenSize >= 1200
                  ? "1rem"
                  : "100%"
                : props.currentScreenSize >= 1800
                ? "2rem"
                : props.currentScreenSize >= 1400
                ? "1rem"
                : props.currentScreenSize >= 1200
                ? "1rem"
                : "100%"
            }
            height={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 2200
                  ? "2rem"
                  : props.initialScreenSize >= 1800
                  ? "1.3rem"
                  : props.initialScreenSize >= 1600
                  ? "1.3rem"
                  : props.initialScreenSize >= 1200
                  ? "1.1rem"
                  : props.initialScreenSize >= 360
                  ? "2rem"
                  : "1rem"
                : props.currentScreenSize >= 2200
                ? "2rem"
                : props.currentScreenSize >= 1800
                ? "1.3rem"
                : props.currentScreenSize >= 1600
                ? "1.3rem"
                : props.currentScreenSize >= 1200
                ? "1.1rem"
                : props.currentScreenSize >= 360
                ? "2rem"
                : "1rem"
            }
            style={{
              marginTop:
                props.currentScreenSize === ""
                  ? props.initialScreenSize >= 2200
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1800
                    ? "0"
                    : props.initialScreenSize >= 1600
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1200
                    ? "-0.1rem"
                    : props.initialScreenSize >= 360
                    ? "-0.5rem"
                    : "0rem"
                  : props.currentScreenSize >= 2200
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1800
                  ? "0"
                  : props.currentScreenSize >= 1600
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1200
                  ? "-0.1rem"
                  : props.currentScreenSize >= 360
                  ? "-0.5rem"
                  : "0rem",
              display: dermarollingInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (dermarollingInCart ? `${styles.x}` : 0) : 0
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        )}
      </Spring>
    );
  };

  const chemPeelAddOnErrorToastId = "chem_peel_add_on_error";
  const microneedlingAddOnErrorToastId = "microneedling_add_on_error";

  const addToCart = () => {
    if (chemicalPeelInCart || saltCaveInCart) {
      if (!toast.isActive(chemPeelAddOnErrorToastId)) {
        toast.dismiss();
        toast(
          <AddOnsChemPeelErrorNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_error_container",
            toastId: chemPeelAddOnErrorToastId,
          }
        );
      }
    } else {
      if (microneedleInCart) {
        if (!toast.isActive(microneedlingAddOnErrorToastId)) {
          toast.dismiss();
          toast(
            <AddOnsMicroneedlingErrorNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_error_container",
              toastId: microneedlingAddOnErrorToastId,
            }
          );
        }
      } else {
        if (dermarollingInCart) {
          toast.dismiss();
          dispatch(ACTION_DERMAROLLING_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());

          props.resetAllCartStatesExceptTreatments();
          toast(
            <DermarollingRemovedNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_removed_container",
            }
          );
        } else {
          toast.dismiss();
          dispatch(ACTION_DERMAROLLING_IN_CART());
          dispatch(ACTION_INCREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());
          changeCartClicked(true);
          setTimeout(() => changeCartClicked(false), 200);

          props.resetAllCartStatesExceptTreatments();
          toast(
            <DermarollingNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />
          );
        }
      }
    }
  };

  const addOnBounce = () => {
    return (
      <PlusBounce state="plusBounce">
        {(styles) => (
          <span
            className="fa-layers fa-fw"
            style={
              dermarollingToggle
                ? dermarollingInCart
                  ? { position: "relative" }
                  : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? { position: "relative" }
                  : styles
                : { position: "relative" }
            }
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon
              color={
                dermarollingToggle
                  ? dermarollingInCart
                    ? "rgb(119, 221, 119, 0.6)"
                    : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                    ? "rgb(211, 211, 211)"
                    : "rgba(0, 129, 177, 0.4)"
                  : dermarollingInCart
                  ? "rgba(119, 221, 119, 0.6)"
                  : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? "rgb(211, 211, 211)"
                  : "rgba(0, 129, 177, 0.3)"
              }
              transform={
                !props.currentScreenSize
                  ? props.initialScreenSize >= 360
                    ? "grow-20"
                    : "grow-10"
                  : props.currentScreenSize >= 360
                  ? "grow-20"
                  : "grow-10"
              }
              icon={faSquare}
            />
            {checkMark()}
            <FontAwesomeIcon
              className="small_screen_card_description_plus"
              style={{ display: dermarollingInCart ? "none" : "block" }}
              color={
                microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? "rgb(151, 151, 151)"
                  : "rgb(0, 129, 177)"
              }
              icon={faPlus}
            />
          </span>
        )}
      </PlusBounce>
    );
  };
/*
  const bigScreenBottomWrapperRender = () => {
    return (
      <div className="big_screen_entire_bottom_wrapper">
        <div className="big_screen_price_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faTag}
          />
          <p className="big_screen_price">$15</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration">10 minutes</p>
        </div>
      </div>
    );
  };
*//*
  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: dermarollingToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {dermarollingToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {addOnBounce()}
      </div>
    );
  };
*/
  const dynamicScreenSizeBottomCardRender = () => {
    if (props.currentScreenSize === "") {
      if (props.initialScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    } else {
      if (props.currentScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    }
  };
/*
  const renderAddOnButton = () => {
    if (dermarollingInCart) {
      return (
        <>
          {checkMark()}
          <p className="big_screen_in_cart">IN CART</p>
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon
            className="big_screen_card_description_suitcase"
            icon={faPlus}
          />
          <p className="big_screen_card_add_on_button">ADD TO FACIAL</p>
        </>
      );
    }
  };
*/
  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="card_container"
          ref={ref}
          style={{ display: props.dermarollingRendered }}
        >
          {inView ? (
            <Spring
              from={{ position: "relative", opacity: 0 }}
              to={{ position: "relative", opacity: 1 }}
              config={{ duration: 1000 }}
            >
              {(styleprops) => (
                <section className="card" style={styleprops}>
                  <div
                    className="card_image"
                    style={{
                      backgroundColor: dermarollingToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: dermarollingToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 100, fill: "#fff" }}
                      to={{ x: 0, fill: "#000" }}
                      config={{ duration: 3000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? dermarollingInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : dermarollingInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? dermarollingInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : dermarollingInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? dermarollingInCart
                                  ? "rgb(0, 0, 0)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : dermarollingInCart
                                ? "rgb(0, 0, 0)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(141, 141, 141)"
                                : "rgb(0, 129, 177)",
                              cursor:
                                microneedleInCart |
                                chemicalPeelInCart |
                                saltCaveInCart
                                  ? "auto"
                                  : "pointer",
                              transition: "all 0.5s ease",
                            }}
                            onMouseEnter={() =>
                              changeBookNowButtonHovered(true)
                            }
                            onMouseLeave={() =>
                              changeBookNowButtonHovered(false)
                            }
                          >
                            {renderAddOnButton()}
                          </div>
                        
                          <img src = "data:image/jpeg;base64,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">
                        </>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: dermarollingToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: dermarollingToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.1)",
                      boxShadow: dermarollingToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>DERMAROLLING</h2>
                      {cardDescriptionHandler()}
                      {dynamicScreenSizeBottomCardRender()}
                    </div>
                  </div>
                </section>
              )}
            </Spring>
          ) : null}
        </div>
      )}
    </InView>
  );
};

export default Dermarolling;
