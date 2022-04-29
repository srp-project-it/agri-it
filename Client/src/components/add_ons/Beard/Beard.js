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
import ACTION_BEARD_TOGGLE from "../../../actions/AddOns/Beard/ACTION_BEARD_TOGGLE";
import ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET from "../../../actions/AddOns/ExtraExtractions/ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET";
import ACTION_HYDRO_JELLY_TOGGLE_RESET from "../../../actions/AddOns/HydroJellyMask/ACTION_HYDRO_JELLY_TOGGLE_RESET";
import ACTION_LED_THERAPY_TOGGLE_RESET from "../../../actions/AddOns/LEDTherapy/ACTION_LED_THERAPY_TOGGLE_RESET";
import ACTION_MICROCURRENT_TOGGLE_RESET from "../../../actions/AddOns/Microcurrent/ACTION_MICROCURRENT_TOGGLE_RESET";
import ACTION_MICRODERMABRASION_TOGGLE_RESET from "../../../actions/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_TOGGLE_RESET";
import ACTION_DERMAROLLING_TOGGLE_RESET from "../../../actions/AddOns/Dermarolling/ACTION_DERMAROLLING_TOGGLE_RESET";
import ACTION_NANONEEDLING_TOGGLE_RESET from "../../../actions/AddOns/Nanoneedling/ACTION_NANONEEDLING_TOGGLE_RESET";
import ACTION_GUASHA_TOGGLE_RESET from "../../../actions/AddOns/GuaSha/ACTION_GUASHA_TOGGLE_RESET";
import ACTION_BEARD_TOGGLE_RESET from "../../../actions/AddOns/Beard/ACTION_BEARD_TOGGLE_RESET";
import ACTION_BEARD_IN_CART from "../../../actions/InCart/AddOns/Beard/ACTION_BEARD_IN_CART";
import ACTION_BEARD_NOT_IN_CART from "../../../actions/InCart/AddOns/Beard/ACTION_BEARD_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import { toast } from "react-toastify";
import BeardNotification from "./BeardNotification";
import BeardRemovedNotification from "./BeardRemovedNotification";
import AddOnsChemPeelErrorNotification from "../AddOnsChemPeelErrorNotification";
import AddOnsMicroneedlingErrorNotification from "../AddOnsMicroneedlingErrorNotification";
import "./Beard.css";
import "../../treatments/card_styling.css";

const Beard = (props) => {
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
  const beardInCart = useSelector((state) => state.beardInCart.in_cart);
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
    if (!beardToggle) {
      dispatch(ACTION_BEARD_TOGGLE());
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
      if (dermarollingToggle) {
        dispatch(ACTION_DERMAROLLING_TOGGLE_RESET());
      }
      if (nanoneedlingToggle) {
        dispatch(ACTION_NANONEEDLING_TOGGLE_RESET());
      }
      if (guashaToggle) {
        dispatch(ACTION_GUASHA_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_BEARD_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (beardToggle) {
      return (
        <>
          <div className="card_description_paragraph_toggle">
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
                <p> Rs 2.5L </p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
        </p>
      );
    }
  };

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
              display: beardInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (beardInCart ? `${styles.x}` : 0) : 0
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
        if (beardInCart) {
          toast.dismiss();
          dispatch(ACTION_BEARD_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());

          props.resetAllCartStatesExceptTreatments();
          toast(
            <BeardRemovedNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_removed_container",
            }
          );
        } else {
          toast.dismiss();
          dispatch(ACTION_BEARD_IN_CART());
          dispatch(ACTION_INCREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());

          props.resetAllCartStatesExceptTreatments();
          changeCartClicked(true);
          setTimeout(() => changeCartClicked(false), 200);
          toast(
            <BeardNotification
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
              beardToggle
                ? beardInCart
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
                beardToggle
                  ? beardInCart
                    ? "rgb(119, 221, 119, 0.6)"
                    : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                    ? "rgb(211, 211, 211)"
                    : "rgba(0, 129, 177, 0.4)"
                  : beardInCart
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
              style={{ display: beardInCart ? "none" : "block" }}
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

  const bigScreenBottomWrapperRender = () => {
    return (
      <div className="big_screen_entire_bottom_wrapper">
        <div className="big_screen_price_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faTag}
          />
          <p className="big_screen_price">$30</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration"></p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: beardToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {beardToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {addOnBounce()}
      </div>
    );
  };

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

  const renderAddOnButton = () => {
    if (beardInCart) {
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

  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="card_container"
          ref={ref}
          style={{ display: props.beardRendered }}
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
                      backgroundColor: beardToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: beardToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 100, fill: "#fff" }}
                      to={{ x: 0, fill: "#000" }}
                      config={{ duration: 2500 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? beardInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : beardInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? beardInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : beardInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? beardInCart
                                  ? "rgb(0, 0, 0)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : beardInCart
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
                        borderRight: beardToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: beardToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.1)",
                      boxShadow: beardToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>Heavy Equipment</h2>
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

export default Beard;
