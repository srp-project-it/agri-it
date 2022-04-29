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
import ACTION_EXTRA_EXTRACTIONS_TOGGLE from "../../../actions/AddOns/ExtraExtractions/ACTION_EXTRA_EXTRACTIONS_TOGGLE";
import ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET from "../../../actions/AddOns/ExtraExtractions/ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET";
import ACTION_HYDRO_JELLY_TOGGLE_RESET from "../../../actions/AddOns/HydroJellyMask/ACTION_HYDRO_JELLY_TOGGLE_RESET";
import ACTION_LED_THERAPY_TOGGLE_RESET from "../../../actions/AddOns/LEDTherapy/ACTION_LED_THERAPY_TOGGLE_RESET";
import ACTION_MICROCURRENT_TOGGLE_RESET from "../../../actions/AddOns/Microcurrent/ACTION_MICROCURRENT_TOGGLE_RESET";
import ACTION_MICRODERMABRASION_TOGGLE_RESET from "../../../actions/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_TOGGLE_RESET";
import ACTION_DERMAROLLING_TOGGLE_RESET from "../../../actions/AddOns/Dermarolling/ACTION_DERMAROLLING_TOGGLE_RESET";
import ACTION_NANONEEDLING_TOGGLE_RESET from "../../../actions/AddOns/Nanoneedling/ACTION_NANONEEDLING_TOGGLE_RESET";
import ACTION_GUASHA_TOGGLE_RESET from "../../../actions/AddOns/GuaSha/ACTION_GUASHA_TOGGLE_RESET";
import ACTION_BEARD_TOGGLE_RESET from "../../../actions/AddOns/Beard/ACTION_BEARD_TOGGLE_RESET";
import ACTION_EXTRACTION_IN_CART from "../../../actions/InCart/AddOns/ExtraExtractions/ACTION_EXTRACTION_IN_CART";
import ACTION_EXTRACTION_NOT_IN_CART from "../../../actions/InCart/AddOns/ExtraExtractions/ACTION_EXTRACTION_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import { toast } from "react-toastify";
import ExtraExtractionsNotification from "./ExtraExtractionsNotification";
import ExtraExtractionsRemovedNotification from "./ExtraExtractionsRemovedNotification";
import AddOnsChemPeelErrorNotification from "../AddOnsChemPeelErrorNotification";
import AddOnsMicroneedlingErrorNotification from "../AddOnsMicroneedlingErrorNotification";
import "./ExtraExtractions.css";
import "../../treatments/card_styling.css";

const ExtraExtractions = (props) => {
  // "Learn More" states
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
  const extraExtractionsInCart = useSelector(
    (state) => state.extraExtractionsInCart.in_cart
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
    if (!extraExtractionsToggle) {
      dispatch(ACTION_EXTRA_EXTRACTIONS_TOGGLE());
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
      if (beardToggle) {
        dispatch(ACTION_BEARD_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (extraExtractionsToggle) {
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
                <p>Rs10</p>
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
              display: extraExtractionsInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (extraExtractionsInCart ? `${styles.x}` : 0) : 0
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
        if (extraExtractionsInCart) {
          toast.dismiss();
          dispatch(ACTION_EXTRACTION_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());

          props.resetAllCartStatesExceptTreatments();
          toast(
            <ExtraExtractionsRemovedNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_removed_container",
            }
          );
        } else {
          toast.dismiss();
          dispatch(ACTION_EXTRACTION_IN_CART());
          dispatch(ACTION_INCREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());
          changeCartClicked(true);
          setTimeout(() => changeCartClicked(false), 200);

          props.resetAllCartStatesExceptTreatments();
          toast(
            <ExtraExtractionsNotification
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
              extraExtractionsToggle
                ? extraExtractionsInCart
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
                extraExtractionsToggle
                  ? extraExtractionsInCart
                    ? "rgb(119, 221, 119, 0.6)"
                    : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                    ? "rgb(211, 211, 211)"
                    : "rgba(0, 129, 177, 0.4)"
                  : extraExtractionsInCart
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
              style={{ display: extraExtractionsInCart ? "none" : "block" }}
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
          <p className="big_screen_price">Rs10</p>
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
          color: extraExtractionsToggle
            ? "rgb(0, 104, 152)"
            : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {extraExtractionsToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
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
    if (extraExtractionsInCart) {
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
        <div className="card_container" ref={ref}>
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
                      backgroundColor: extraExtractionsToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: extraExtractionsToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 400 }}
                      to={{ x: 0 }}
                      config={{ duration: 3000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? extraExtractionsInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : extraExtractionsInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? extraExtractionsInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : extraExtractionsInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? extraExtractionsInCart
                                  ? "rgb(0, 0, 0)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : extraExtractionsInCart
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
                        borderRight: extraExtractionsToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: extraExtractionsToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.1)",
                      boxShadow: extraExtractionsToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>Seeds</h2>
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

export default ExtraExtractions;
