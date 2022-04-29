import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag,
  faGem,
} from "@fortawesome/free-solid--icons";
import { InView } from "react-intersection-observer";
import ACTION_MICRONEEDLE_TOGGLE from "../../../actions/Treatments/Microneedle/ACTION_MICRONEEDLE_TOGGLE";
import ACTION_CALM_TOGGLE_RESET from "../../../actions/Treatments/Calm/ACTION_CALM_TOGGLE_RESET";
import ACTION_CLARIFY_TOGGLE_RESET from "../../../actions/Treatments/Clarify/ACTION_CLARIFY_TOGGLE_RESET";
import ACTION_BACIAL_TOGGLE_RESET from "../../../actions/Treatments/Bacial/ACTION_BACIAL_TOGGLE_RESET";
import ACTION_GLOW_TOGGLE_RESET from "../../../actions/Treatments/Glow/ACTION_GLOW_TOGGLE_RESET";
import ACTION_REJUVENATE_TOGGLE_RESET from "../../../actions/Treatments/Rejuvenate/ACTION_REJUVENATE_TOGGLE_RESET";
import ACTION_QUENCH_TOGGLE_RESET from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE_RESET";
import ACTION_QUICKIE_TOGGLE_RESET from "../../../actions/Treatments/Quickie/ACTION_QUICKIE_TOGGLE_RESET";
import ACTION_CHEMICAL_PEEL_TOGGLE_RESET from "../../../actions/Treatments/ChemicalPeel/ACTION_CHEMICAL_PEEL_TOGGLE_RESET";
import ACTION_DERMAPLANING_TOGGLE_RESET from "../../../actions/Treatments/Dermaplaning/ACTION_DERMAPLANING_TOGGLE_RESET";
import ACTION_CBD_TOGGLE_RESET from "../../../actions/Treatments/CBD/ACTION_CBD_TOGGLE_RESET";
import ACTION_MICRONEEDLE_TOGGLE_RESET from "../../../actions/Treatments/Microneedle/ACTION_MICRONEEDLE_TOGGLE_RESET";
import ACTION_MICRO_IN_CART from "../../../actions/InCart/Treatments/Microneedle/ACTION_MICRO_IN_CART";
import ACTION_MICRO_NOT_IN_CART from "../../../actions/InCart/Treatments/Microneedle/ACTION_MICRO_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";

// Add-Ons Reset Actions
import ACTION_BEARD_NOT_IN_CART from "../../../actions/InCart/AddOns/Beard/ACTION_BEARD_NOT_IN_CART";
import ACTION_DERMAROLLING_NOT_IN_CART from "../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_NOT_IN_CART";
import ACTION_EXTRACTION_NOT_IN_CART from "../../../actions/InCart/AddOns/ExtraExtractions/ACTION_EXTRACTION_NOT_IN_CART";
import ACTION_GUASHA_NOT_IN_CART from "../../../actions/InCart/AddOns/GuaSha/ACTION_GUASHA_NOT_IN_CART";
import ACTION_HYDROJELLY_NOT_IN_CART from "../../../actions/InCart/AddOns/HydroJellyMask/ACTION_HYDROJELLY_NOT_IN_CART";
import ACTION_MICROCURRENT_NOT_IN_CART from "../../../actions/InCart/AddOns/Microcurrent/ACTION_MICROCURRENT_NOT_IN_CART";
import ACTION_MICRODERMABRASION_NOT_IN_CART from "../../../actions/InCart/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_NOT_IN_CART";
import ACTION_NANONEEDLING_NOT_IN_CART from "../../../actions/InCart/AddOns/NanoNeedling/ACTION_NANONEEDLING_NOT_IN_CART";

import { toast } from "react-toastify";
import MicroneedleNotification from "./MicroneedleNotification";
import MicroneedleRemovedNotification from "./MicroneedleRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./Microneedle.css";
import ACTION_SALT_CAVE_TOGGLE_RESET from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE_RESET";
import ACTION_JET_HYDRO_PEEL_TOGGLE_RESET from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE_RESET";

const Microneedle = (props) => {
  // "Learn More" states
  const calmToggle = useSelector((state) => state.calmToggle.toggle);
  const clarifyToggle = useSelector((state) => state.clarifyToggle.toggle);
  const bacialToggle = useSelector((state) => state.bacialToggle.toggle);
  const glowToggle = useSelector((state) => state.glowToggle.toggle);
  const rejuvenateToggle = useSelector(
    (state) => state.rejuvenateToggle.toggle
  );
  const quenchToggle = useSelector((state) => state.quenchToggle.toggle);
  const quickieToggle = useSelector((state) => state.quickieToggle.toggle);
  const chemicalpeelToggle = useSelector(
    (state) => state.chemicalpeelToggle.toggle
  );
  const dermaplaningToggle = useSelector(
    (state) => state.dermaplaningToggle.toggle
  );
  const cbdToggle = useSelector((state) => state.cbdToggle.toggle);
  const microneedleToggle = useSelector(
    (state) => state.microneedleToggle.toggle
  );
  const saltCaveToggle = useSelector((state) => state.saltCaveToggle.toggle);
  const jetHydroPeelToggle = useSelector(
    (state) => state.jetHydroPeelToggle.toggle
  );

  // In Cart states
  const calmInCart = useSelector((state) => state.calmInCart.in_cart);
  const clarifyInCart = useSelector((state) => state.clarifyInCart.in_cart);
  const bacialInCart = useSelector((state) => state.bacialInCart.in_cart);
  const glowInCart = useSelector((state) => state.glowInCart.in_cart);
  const cbdInCart = useSelector((state) => state.cbdInCart.in_cart);
  const chemicalPeelInCart = useSelector(
    (state) => state.chemicalPeelInCart.in_cart
  );
  const dermaplaningInCart = useSelector(
    (state) => state.dermaplaningInCart.in_cart
  );
  const microneedleInCart = useSelector(
    (state) => state.microneedleInCart.in_cart
  );
  const quenchInCart = useSelector((state) => state.quenchInCart.in_cart);
  const quickieInCart = useSelector((state) => state.quickieInCart.in_cart);
  const rejuvenateInCart = useSelector(
    (state) => state.rejuvenateInCart.in_cart
  );
  const unsureInCart = useSelector((state) => state.unsureInCart.in_cart);
  const saltCaveInCart = useSelector((state) => state.saltCaveInCart.in_cart);

  // Add-Ons
  const beardInCart = useSelector((state) => state.beardInCart.in_cart);
  const dermarollingInCart = useSelector(
    (state) => state.dermarollingInCart.in_cart
  );
  const extraExtractionsInCart = useSelector(
    (state) => state.extraExtractionsInCart.in_cart
  );
  const guashaInCart = useSelector((state) => state.guashaInCart.in_cart);
  const hydroJellyInCart = useSelector(
    (state) => state.hydroJellyInCart.in_cart
  );
  const microcurrentInCart = useSelector(
    (state) => state.microcurrentInCart.in_cart
  );
  const microdermabrasionInCart = useSelector(
    (state) => state.microdermabrasionInCart.in_cart
  );
  const nanoneedlingInCart = useSelector(
    (state) => state.nanoneedlingInCart.in_cart
  );

  // Cart States
  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!microneedleToggle) {
      dispatch(ACTION_MICRONEEDLE_TOGGLE());
      if (calmToggle) {
        dispatch(ACTION_CALM_TOGGLE_RESET());
      }
      if (clarifyToggle) {
        dispatch(ACTION_CLARIFY_TOGGLE_RESET());
      }
      if (bacialToggle) {
        dispatch(ACTION_BACIAL_TOGGLE_RESET());
      }
      if (glowToggle) {
        dispatch(ACTION_GLOW_TOGGLE_RESET());
      }
      if (rejuvenateToggle) {
        dispatch(ACTION_REJUVENATE_TOGGLE_RESET());
      }
      if (quenchToggle) {
        dispatch(ACTION_QUENCH_TOGGLE_RESET());
      }
      if (quickieToggle) {
        dispatch(ACTION_QUICKIE_TOGGLE_RESET());
      }
      if (chemicalpeelToggle) {
        dispatch(ACTION_CHEMICAL_PEEL_TOGGLE_RESET());
      }
      if (dermaplaningToggle) {
        dispatch(ACTION_DERMAPLANING_TOGGLE_RESET());
      }
      if (cbdToggle) {
        dispatch(ACTION_CBD_TOGGLE_RESET());
      }
      if (saltCaveToggle) {
        dispatch(ACTION_SALT_CAVE_TOGGLE_RESET());
      }
      if (jetHydroPeelToggle) {
        dispatch(ACTION_JET_HYDRO_PEEL_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
    }
  };
  
  const cardDescriptionHandler = () => {
    if (microneedleToggle) {
      return (
        <>
          <div className="card_description_microneedle_toggle">
            <div
              className="card_description_icon_wrapper_container"
              style={{
                paddingTop:
                  props.currentScreenSize === ""
                    ? props.initialScreenSize >= 600 &&
                      props.initialScreenSize <= 1200
                      ? microneedleToggle
                        ? "0.2rem"
                        : "0.7rem"
                      : "0rem"
                    : props.currentScreenSize >= 600 &&
                      props.currentScreenSize <= 1200
                    ? microneedleToggle
                      ? "0.2rem"
                      : "0.7rem"
                    : "0rem",
              }}
            >
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value microneedle_paragraph_value">
                <p>50 minutes</p>
              </div>
              <div
                className="card_description_paragraph_icon_wrapper"
                style={{ paddingTop: "0px" }}
              >
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$Rs200</p>
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
*/
  const SuitcaseBounce = Keyframes.Spring({
    suitcaseBounce: [
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
              display: microneedleInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (microneedleInCart ? `${styles.x}` : 0) : 0
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

  const inCartToastId = "facial_already_in_cart";

  const addToCart = () => {
    if (
      calmInCart |
        cbdInCart |
        chemicalPeelInCart |
        clarifyInCart |
        dermaplaningInCart |
        bacialInCart |
        glowInCart |
        quenchInCart |
        quickieInCart |
        rejuvenateInCart ||
      unsureInCart ||
      saltCaveInCart
    ) {
      if (!toast.isActive(inCartToastId)) {
        toast.dismiss();
        toast(
          <FacialInCartErrorNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_error_container",
            toastId: inCartToastId,
          }
        );
      }
    } else {
      if (microneedleInCart) {
        toast.dismiss();
        dispatch(ACTION_MICRO_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_SELECTED_DAY_RESET());
        dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());

        props.resetAllCartStates();
        toast(
          <MicroneedleRemovedNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_removed_container",
          }
        );
      } else {
        toast.dismiss();
        dispatch(ACTION_MICRO_IN_CART());
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(
          <MicroneedleNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          { autoClose: 6000 }
        );
        if (beardInCart) {
          dispatch(ACTION_BEARD_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (dermarollingInCart) {
          dispatch(ACTION_DERMAROLLING_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (extraExtractionsInCart) {
          dispatch(ACTION_EXTRACTION_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (guashaInCart) {
          dispatch(ACTION_GUASHA_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (hydroJellyInCart) {
          dispatch(ACTION_HYDROJELLY_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (microcurrentInCart) {
          dispatch(ACTION_MICROCURRENT_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (microdermabrasionInCart) {
          dispatch(ACTION_MICRODERMABRASION_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (nanoneedlingInCart) {
          dispatch(ACTION_NANONEEDLING_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
      }
    }
  };

  const bookButtonBounce = () => {
    return (
      <SuitcaseBounce state="suitcaseBounce">
        {(styles) => (
          <span
            className="fa-layers fa-fw"
            style={
              microneedleToggle
                ? clarifyInCart |
                    bacialInCart |
                    cbdInCart |
                    chemicalPeelInCart |
                    calmInCart |
                    dermaplaningInCart |
                    glowInCart |
                    microneedleInCart |
                    quenchInCart |
                    quickieInCart |
                    rejuvenateInCart ||
                  unsureInCart ||
                  saltCaveInCart
                  ? { position: "relative" }
                  : styles
                : { position: "relative" }
            }
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon
              color={
                microneedleToggle
                  ? microneedleInCart
                    ? "rgba(119, 221, 119, 0.6)"
                    : bacialInCart |
                        cbdInCart |
                        chemicalPeelInCart |
                        calmInCart |
                        dermaplaningInCart |
                        clarifyInCart |
                        glowInCart |
                        quenchInCart |
                        quickieInCart |
                        rejuvenateInCart ||
                      unsureInCart ||
                      saltCaveInCart
                    ? "rgba(211, 211, 211, 0.8"
                    : "rgba(0, 129, 177, 0.4)"
                  : microneedleInCart
                  ? "rgba(119, 221, 119, 0.6)"
                  : bacialInCart |
                      cbdInCart |
                      chemicalPeelInCart |
                      calmInCart |
                      dermaplaningInCart |
                      clarifyInCart |
                      glowInCart |
                      quenchInCart |
                      quickieInCart |
                      rejuvenateInCart ||
                    unsureInCart ||
                    saltCaveInCart
                  ? "rgba(211, 211, 211, 0.8)"
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
              className="small_screen_card_description_suitcase"
              style={{ display: microneedleInCart ? "none" : "block" }}
              color={
                bacialInCart |
                  cbdInCart |
                  chemicalPeelInCart |
                  calmInCart |
                  dermaplaningInCart |
                  clarifyInCart |
                  glowInCart |
                  quenchInCart |
                  quickieInCart |
                  rejuvenateInCart ||
                unsureInCart ||
                saltCaveInCart
                  ? "rgb(151, 151, 151)"
                  : "rgb(0, 129, 177)"
              }
              icon={faSuitcase}
            />
          </span>
        )}
      </SuitcaseBounce>
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
          <p className="big_screen_price">Rs200</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration">50 minutes</p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: microneedleToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          paddingTop:
            props.currentScreenSize === ""
              ? props.initialScreenSize >= 600 &&
                props.initialScreenSize <= 1200
                ? microneedleToggle
                  ? "0.2rem"
                  : "0.7rem"
                : "0rem"
              : props.currentScreenSize >= 600 &&
                props.currentScreenSize <= 1200
              ? microneedleToggle
                ? "0.2rem"
                : "0.7rem"
              : "0rem",
          transition: "color 0.5s ease",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {microneedleToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {bookButtonBounce()}
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

  const bigScreenAddToCartButton = () => {
    if (microneedleInCart) {
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
            icon={faSuitcase}
          />
          <p>BOOK NOW</p>
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
          style={{ display: props.cbdMicroneedlingRendered }}
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
                      backgroundColor: microneedleToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: microneedleToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faGem}
                      className="facial_advanced_treatment_icon"
                      style={{
                        color: microneedleToggle
                          ? "rgb(0, 0, 0)"
                          : "rgb(111, 111, 111)",
                      }}
                    />
                    <Spring
                      from={{ x: 300, fill: "white" }}
                      to={{ x: 0, fill: "rgba(253, 253, 150, 0.3)" }}
                      config={{ delay: 300, duration: 1000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? microneedleInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : bacialInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      calmInCart |
                                      dermaplaningInCart |
                                      clarifyInCart |
                                      glowInCart |
                                      quenchInCart |
                                      quickieInCart |
                                      rejuvenateInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : microneedleInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : bacialInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    calmInCart |
                                    dermaplaningInCart |
                                    clarifyInCart |
                                    glowInCart |
                                    quenchInCart |
                                    quickieInCart |
                                    rejuvenateInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? microneedleInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : bacialInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      calmInCart |
                                      dermaplaningInCart |
                                      clarifyInCart |
                                      glowInCart |
                                      quenchInCart |
                                      quickieInCart |
                                      rejuvenateInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : microneedleInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : bacialInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    calmInCart |
                                    dermaplaningInCart |
                                    clarifyInCart |
                                    glowInCart |
                                    quenchInCart |
                                    quickieInCart |
                                    rejuvenateInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? microneedleInCart
                                  ? "rgb(0, 0, 0)"
                                  : bacialInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      calmInCart |
                                      dermaplaningInCart |
                                      clarifyInCart |
                                      glowInCart |
                                      quenchInCart |
                                      quickieInCart |
                                      rejuvenateInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : microneedleInCart
                                ? "rgb(0, 0, 0)"
                                : bacialInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    calmInCart |
                                    dermaplaningInCart |
                                    clarifyInCart |
                                    glowInCart |
                                    quenchInCart |
                                    quickieInCart |
                                    rejuvenateInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
                                ? "rgb(141, 141, 141)"
                                : "rgb(0, 129, 177)",
                              cursor:
                                bacialInCart |
                                  cbdInCart |
                                  chemicalPeelInCart |
                                  calmInCart |
                                  dermaplaningInCart |
                                  clarifyInCart |
                                  glowInCart |
                                  quenchInCart |
                                  quickieInCart |
                                  rejuvenateInCart ||
                                unsureInCart ||
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
                            {bigScreenAddToCartButton()}
                          </div>
                          
                          
                          <img src = "data:image/jpeg;base64,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">
                        </>
                      )}
                    </Spring>
                    <p
                      className="facial_advanced_treatment_designation"
                      style={{
                        color: microneedleToggle
                          ? "rgb(0, 0, 0)"
                          : "rgb(111, 111, 111)",
                      }}
                    >
                      Advanced Treatment
                    </p>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: microneedleToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: microneedleToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: microneedleToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>Livestock Consultation
                      
                      
                      </h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Repairing
                      </p>
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

export default Microneedle;
