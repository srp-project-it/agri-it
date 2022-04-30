import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import ACTION_CALM_TOGGLE_RESET from "../../../actions/Treatments/Calm/ACTION_CALM_TOGGLE_RESET";
import ACTION_CLARIFY_TOGGLE_RESET from "../../../actions/Treatments/Clarify/ACTION_CLARIFY_TOGGLE_RESET";
import ACTION_BACIAL_TOGGLE_RESET from "../../../actions/Treatments/Bacial/ACTION_BACIAL_TOGGLE_RESET";
import ACTION_GLOW_TOGGLE_RESET from "../../../actions/Treatments/Glow/ACTION_GLOW_TOGGLE_RESET";
import ACTION_REJUVENATE_TOGGLE_RESET from "../../../actions/Treatments/Rejuvenate/ACTION_REJUVENATE_TOGGLE_RESET";
import ACTION_QUENCH_TOGGLE_RESET from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE_RESET";
import ACTION_CHEMICAL_PEEL_TOGGLE_RESET from "../../../actions/Treatments/ChemicalPeel/ACTION_CHEMICAL_PEEL_TOGGLE_RESET";
import ACTION_DERMAPLANING_TOGGLE_RESET from "../../../actions/Treatments/Dermaplaning/ACTION_DERMAPLANING_TOGGLE_RESET";
import ACTION_CBD_TOGGLE_RESET from "../../../actions/Treatments/CBD/ACTION_CBD_TOGGLE_RESET";
import ACTION_MICRONEEDLE_TOGGLE_RESET from "../../../actions/Treatments/Microneedle/ACTION_MICRONEEDLE_TOGGLE_RESET";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import { toast } from "react-toastify";
import SaltCaveNotification from "./SaltCaveNotification";
import SaltCaveRemovedNotification from "./SaltCaveRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./SaltCave.css";
import ACTION_SALT_CAVE_TOGGLE from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE";
import ACTION_SALT_CAVE_TOGGLE_RESET from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE_RESET";
import ACTION_SALT_CAVE_NOT_IN_CART from "../../../actions/InCart/Treatments/SaltCave/ACTION_SALT_CAVE_NOT_IN_CART";
import ACTION_SALT_CAVE_IN_CART from "../../../actions/InCart/Treatments/SaltCave/ACTION_SALT_CAVE_IN_CART";
import { FormGroup, Input } from "reactstrap";
import ACTION_SELECTED_SALT_CAVE_DURATION from "../../../actions/Treatments/SaltCave/SaltCaveDuration/ACTION_SELECTED_SALT_CAVE_DURATION";
import ACTION_BEARD_NOT_IN_CART from "../../../actions/InCart/AddOns/Beard/ACTION_BEARD_NOT_IN_CART";
import ACTION_DERMAROLLING_NOT_IN_CART from "../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_NOT_IN_CART";
import ACTION_EXTRACTION_NOT_IN_CART from "../../../actions/InCart/AddOns/ExtraExtractions/ACTION_EXTRACTION_NOT_IN_CART";
import ACTION_GUASHA_NOT_IN_CART from "../../../actions/InCart/AddOns/GuaSha/ACTION_GUASHA_NOT_IN_CART";
import ACTION_HYDROJELLY_NOT_IN_CART from "../../../actions/InCart/AddOns/HydroJellyMask/ACTION_HYDROJELLY_NOT_IN_CART";
import ACTION_LED_NOT_IN_CART from "../../../actions/InCart/AddOns/LEDTherapy/ACTION_LED_NOT_IN_CART";
import ACTION_MICROCURRENT_NOT_IN_CART from "../../../actions/InCart/AddOns/Microcurrent/ACTION_MICROCURRENT_NOT_IN_CART";
import ACTION_MICRODERMABRASION_NOT_IN_CART from "../../../actions/InCart/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_NOT_IN_CART";
import ACTION_NANONEEDLING_NOT_IN_CART from "../../../actions/InCart/AddOns/NanoNeedling/ACTION_NANONEEDLING_NOT_IN_CART";
import ACTION_JET_HYDRO_PEEL_TOGGLE_RESET from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE_RESET";

const SaltCave = (props) => {
  // "Learn More" states
  const calmToggle = useSelector((state) => state.calmToggle.toggle);
  const clarifyToggle = useSelector((state) => state.clarifyToggle.toggle);
  const bacialToggle = useSelector((state) => state.bacialToggle.toggle);
  const glowToggle = useSelector((state) => state.glowToggle.toggle);
  const rejuvenateToggle = useSelector(
    (state) => state.rejuvenateToggle.toggle
  );
  const quenchToggle = useSelector((state) => state.quenchToggle.toggle);
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
  const selectedSaltCaveDuration = useSelector(
    (state) => state.selectedSaltCaveDuration.duration
  );

  // Cart States
  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

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
  const ledInCart = useSelector((state) => state.ledInCart.in_cart);
  const microcurrentInCart = useSelector(
    (state) => state.microcurrentInCart.in_cart
  );
  const microdermabrasionInCart = useSelector(
    (state) => state.microdermabrasionInCart.in_cart
  );
  const nanoneedlingInCart = useSelector(
    (state) => state.nanoneedlingInCart.in_cart
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!saltCaveToggle) {
      dispatch(ACTION_SALT_CAVE_TOGGLE());
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
      if (chemicalpeelToggle) {
        dispatch(ACTION_CHEMICAL_PEEL_TOGGLE_RESET());
      }
      if (dermaplaningToggle) {
        dispatch(ACTION_DERMAPLANING_TOGGLE_RESET());
      }
      if (cbdToggle) {
        dispatch(ACTION_CBD_TOGGLE_RESET());
      }
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
      if (jetHydroPeelToggle) {
        dispatch(ACTION_JET_HYDRO_PEEL_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_SALT_CAVE_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (saltCaveToggle) {
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
              <FormGroup className="salt_cave_time_formgroup">
                <div className="salt_cave_time_formgroup_dropdown_input_field">
                  <FontAwesomeIcon
                    className="salt_cave_time_formgroup_dropdown_icon"
                    icon={faChevronCircleDown}
                  />
                  <Input
                    className="salt_cave_time_formgroup_input"
                    type="select"
                    name="select"
                    id="salt_cave_time_preference"
                    value={selectedSaltCaveDuration.toString() + " minutes"}
                    disabled={
                      calmInCart |
                        cbdInCart |
                        chemicalPeelInCart |
                        clarifyInCart |
                        dermaplaningInCart |
                        bacialInCart |
                        microneedleInCart |
                        rejuvenateInCart |
                        quenchInCart |
                        glowInCart ||
                      unsureInCart ||
                      quickieInCart ||
                      saltCaveInCart
                    }
                    onChange={(e) => {
                      dispatch(
                        ACTION_SELECTED_SALT_CAVE_DURATION(
                          Number(e.target.value.slice(0, 2))
                        )
                      );

                      if (saltCaveInCart) {
                        props.resetAllCartStates();
                        dispatch(
                          ACTION_SELECTED_SALT_CAVE_DURATION(
                            Number(e.target.value.slice(0, 2))
                          )
                        );
                      }
                    }}
                  >
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                  </Input>
                </div>
              </FormGroup>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value salt_cave_ios_price">
                <p>${selectedSaltCaveDuration}</p>
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
              display: saltCaveInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (saltCaveInCart ? `${styles.x}` : 0) : 0
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
        microneedleInCart |
        rejuvenateInCart |
        quenchInCart |
        glowInCart ||
      unsureInCart ||
      quickieInCart
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
      if (saltCaveInCart) {
        toast.dismiss();
        dispatch(ACTION_SALT_CAVE_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_SELECTED_DAY_RESET());
        dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());

        props.resetAllCartStates();
        toast(
          <SaltCaveRemovedNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_removed_container",
          }
        );
      } else {
        toast.dismiss();
        dispatch(ACTION_SALT_CAVE_IN_CART(selectedSaltCaveDuration));
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(
          <SaltCaveNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />
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
        if (ledInCart) {
          dispatch(ACTION_LED_NOT_IN_CART());
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
              saltCaveToggle
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
                saltCaveToggle
                  ? saltCaveInCart
                    ? "rgba(119, 221, 119, 0.6)"
                    : calmInCart |
                        cbdInCart |
                        chemicalPeelInCart |
                        clarifyInCart |
                        dermaplaningInCart |
                        bacialInCart |
                        microneedleInCart |
                        rejuvenateInCart |
                        quenchInCart |
                        glowInCart ||
                      unsureInCart ||
                      quickieInCart
                    ? "rgba(211, 211, 211, 0.8"
                    : "rgba(0, 129, 177, 0.4)"
                  : saltCaveInCart
                  ? "rgba(119, 221, 119, 0.6)"
                  : calmInCart |
                      cbdInCart |
                      chemicalPeelInCart |
                      clarifyInCart |
                      dermaplaningInCart |
                      bacialInCart |
                      microneedleInCart |
                      rejuvenateInCart |
                      quenchInCart |
                      glowInCart ||
                    unsureInCart ||
                    quickieInCart
                  ? "rgba(211, 211, 211, 0.8"
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
              style={{ display: saltCaveInCart ? "none" : "block" }}
              color={
                calmInCart |
                  cbdInCart |
                  chemicalPeelInCart |
                  clarifyInCart |
                  dermaplaningInCart |
                  bacialInCart |
                  microneedleInCart |
                  rejuvenateInCart |
                  quenchInCart |
                  glowInCart ||
                unsureInCart ||
                quickieInCart
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
          <p className="big_screen_price">${selectedSaltCaveDuration}</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <FormGroup className="salt_cave_time_formgroup">
            <div className="salt_cave_time_formgroup_dropdown_input_field">
              <FontAwesomeIcon
                className="salt_cave_time_formgroup_dropdown_icon"
                icon={faChevronCircleDown}
              />
              <Input
                className="salt_cave_time_formgroup_input"
                type="select"
                name="select"
                id="salt_cave_time_preference"
                value={selectedSaltCaveDuration.toString() + " minutes"}
                disabled={
                  calmInCart |
                    cbdInCart |
                    chemicalPeelInCart |
                    clarifyInCart |
                    dermaplaningInCart |
                    bacialInCart |
                    microneedleInCart |
                    rejuvenateInCart |
                    quenchInCart |
                    glowInCart ||
                  unsureInCart ||
                  quickieInCart ||
                  saltCaveInCart
                }
                onChange={(e) => {
                  dispatch(
                    ACTION_SELECTED_SALT_CAVE_DURATION(
                      Number(e.target.value.slice(0, 2))
                    )
                  );

                  if (saltCaveInCart) {
                    props.resetAllCartStates();
                    dispatch(
                      ACTION_SELECTED_SALT_CAVE_DURATION(
                        Number(e.target.value.slice(0, 2))
                      )
                    );
                  }
                }}
              >
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>60 minutes</option>
              </Input>
            </div>
          </FormGroup>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: saltCaveToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {saltCaveToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
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
    if (saltCaveInCart) {
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
          style={{ display: props.saltCaveChemPeelRendered }}
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
                      backgroundColor: saltCaveToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: saltCaveToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{
                        x: 200,
                        fill1: "white",
                        fill2: "white",
                        fill3: "white",
                      }}
                      to={{
                        x: 0,
                        fill1: "#fbbbbc",
                        fill2: "#ec989a",
                        fill3: "#d29270",
                      }}
                      config={{ duration: 2000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? saltCaveInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quenchInCart |
                                      glowInCart ||
                                    unsureInCart ||
                                    quickieInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : saltCaveInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart ||
                                  unsureInCart ||
                                  quickieInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? saltCaveInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quenchInCart |
                                      glowInCart ||
                                    unsureInCart ||
                                    quickieInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : saltCaveInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart ||
                                  unsureInCart ||
                                  quickieInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? saltCaveInCart
                                  ? "rgb(0, 0, 0)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quenchInCart |
                                      glowInCart ||
                                    unsureInCart ||
                                    quickieInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : saltCaveInCart
                                ? "rgb(0, 0, 0)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart ||
                                  unsureInCart ||
                                  quickieInCart
                                ? "rgb(141, 141, 141)"
                                : "rgb(0, 129, 177)",
                              cursor:
                                calmInCart |
                                  cbdInCart |
                                  chemicalPeelInCart |
                                  clarifyInCart |
                                  dermaplaningInCart |
                                  bacialInCart |
                                  microneedleInCart |
                                  rejuvenateInCart |
                                  quenchInCart |
                                  glowInCart ||
                                unsureInCart ||
                                quickieInCart
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
                         
                         <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPMhIMUY1v3hopK1Wt_dm9X38F2K8C7Rmpw&usqp=CAU" />
                        </>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: saltCaveToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: saltCaveToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: saltCaveToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <div className="salt_cave_card_new_wrapper">
                        <h2 style={{ fontWeight: 400 }}>Poultry management</h2>
                        <h2
                          className="salt_cave_card_new"
                          style={{
                            fontWeight: 600,
                            color: saltCaveToggle
                              ? "rgba(0, 54, 102, 0.7)"
                              : "rgba(25, 79, 127, 0.6)",
                            transition: "ease all 0.5s",
                          }}
                        >
                          NEW!
                        </h2>
                      </div>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
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

export default SaltCave;
