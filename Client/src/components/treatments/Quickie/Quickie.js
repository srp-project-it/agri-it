import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import ACTION_QUICKIE_TOGGLE from "../../../actions/Treatments/Quickie/ACTION_QUICKIE_TOGGLE";
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
import ACTION_QUICKIE_IN_CART from "../../../actions/InCart/Treatments/Quickie/ACTION_QUICKIE_IN_CART";
import ACTION_QUICKIE_NOT_IN_CART from "../../../actions/InCart/Treatments/Quickie/ACTION_QUICKIE_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_AVAILABILITY_RESET from "../../../actions/AvailabilityClicked/ACTION_AVAILABILITY_RESET";
import ACTION_SELECTED_DAY_RESET from "../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import ACTION_REFORMATTED_DAY_RESET from "../../../actions/SelectedDay/ReformattedDay/ACTION_REFORMATTED_DAY_RESET";
import ACTION_SELECTED_TIME_RESET from "../../../actions/SelectedTime/ACTION_SELECTED_TIME_RESET";

import { toast } from "react-toastify";
import QuickieNotification from "./QuickieNotification";
import QuickieRemovedNotification from "./QuickieRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./Quickie.css";
import ACTION_JET_HYDRO_PEEL_TOGGLE_RESET from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE_RESET";

const Quickie = (props) => {
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

  // Cart States
  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);
  const reformattedDay = useSelector(
    (state) => state.reformattedDay.reformattedDay
  );
  const selectedTime = useSelector((state) => state.selectedTime.selectedTime);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!quickieToggle) {
      dispatch(ACTION_QUICKIE_TOGGLE());
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
      dispatch(ACTION_QUICKIE_TOGGLE_RESET());
    }
  };
/*
  const cardDescriptionHandler = () => {
    if (quickieToggle) {
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
                <p>30 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$50</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          Quickie is an all-encompassing, fast, focused treatment meant to give
          you a boost for a night out or big event.
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
              display: quickieInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (quickieInCart ? `${styles.x}` : 0) : 0
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
      unsureInCart
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
      if (quickieInCart) {
        toast.dismiss();
        dispatch(ACTION_QUICKIE_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_AVAILABILITY_RESET());
        dispatch(ACTION_SELECTED_DAY_RESET());
        dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        if (reformattedDay) {
          dispatch(ACTION_REFORMATTED_DAY_RESET());
        }
        if (selectedTime) {
          dispatch(ACTION_SELECTED_TIME_RESET());
        }
        toast(
          <QuickieRemovedNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_removed_container",
          }
        );
      } else {
        toast.dismiss();
        dispatch(ACTION_QUICKIE_IN_CART());
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(
          <QuickieNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />
        );
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
              quickieToggle
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
                    rejuvenateInCart || unsureInCart
                  ? { position: "relative" }
                  : styles
                : { position: "relative" }
            }
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon
              color={
                quickieToggle
                  ? quickieInCart
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
                        glowInCart || unsureInCart
                    ? "rgba(211, 211, 211, 0.8"
                    : "rgba(0, 129, 177, 0.4)"
                  : quickieInCart
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
                      glowInCart || unsureInCart
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
              style={{ display: quickieInCart ? "none" : "block" }}
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
                  glowInCart || unsureInCart
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
/*
  const bigScreenBottomWrapperRender = () => {
    return (
      <div className="big_screen_entire_bottom_wrapper">
        <div className="big_screen_price_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faTag}
          />
          <p className="big_screen_price">$50</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration">30 minutes</p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: quickieToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {quickieToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {bookButtonBounce()}
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
  const bigScreenAddToCartButton = () => {
    if (quickieInCart) {
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
*/
  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="card_container"
          ref={ref}
          style={{ display: props.quickieChemPeelRendered }}
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
                      backgroundColor: quickieToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: quickieToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 200, fill1: "white", fill2: "white" }}
                      to={{
                        x: 0,
                        fill1: "rgba(255, 179, 71, 0.4)",
                        fill2: "rgba(255, 179, 71, 0.9)",
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
                                ? quickieInCart
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
                                      glowInCart || unsureInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : quickieInCart
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
                                    glowInCart || unsureInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? quickieInCart
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
                                      glowInCart || unsureInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : quickieInCart
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
                                    glowInCart || unsureInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? quickieInCart
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
                                      glowInCart || unsureInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : quickieInCart
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
                                    glowInCart || unsureInCart
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
                                  glowInCart || unsureInCart
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
                        borderRight: quickieToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: quickieToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: quickieToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>QUICKIE</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Speedy Results
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

export default Quickie;
