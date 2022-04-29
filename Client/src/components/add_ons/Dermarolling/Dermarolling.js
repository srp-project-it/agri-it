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
                <p></p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p> Rs 50k </p>
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

  const bigScreenBottomWrapperRender = () => {
    return (
      <div className="big_screen_entire_bottom_wrapper">
        <div className="big_screen_price_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faTag}
          />
          <p className="big_screen_price"> Rs 50L </p>
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
    if (dermarollingInCart) {
      return (
        <>
          {checkMark()}
          <p className="big_screen_in_cart"></p>
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon
            className="big_screen_card_description_suitcase"
            icon={faPlus}
          />
          <p className="big_screen_card_add_on_button"></p>
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
                      <h2 style={{ fontWeight: 400 }}>Livestock</h2>
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
