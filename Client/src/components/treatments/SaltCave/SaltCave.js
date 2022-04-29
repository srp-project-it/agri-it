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
                         
                         <img src = "data:image/jpeg;base64,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">
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
                        <h2 style={{ fontWeight: 400 }}>Manure Consultation</h2>
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
                        Halotherapy
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
