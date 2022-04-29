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
import ACTION_QUENCH_TOGGLE from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE";
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
import ACTION_QUENCH_IN_CART from "../../../actions/InCart/Treatments/Quench/ACTION_QUENCH_IN_CART";
import ACTION_QUENCH_NOT_IN_CART from "../../../actions/InCart/Treatments/Quench/ACTION_QUENCH_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";

import { toast } from "react-toastify";
import QuenchNotification from "./QuenchNotification";
import QuenchRemovedNotification from "./QuenchRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./Quench.css";
import "../../treatments_pages/Page_2/TreatmentsPage2.css";
import ACTION_SALT_CAVE_TOGGLE_RESET from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE_RESET";
import ACTION_JET_HYDRO_PEEL_TOGGLE_RESET from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE_RESET";

const Quench = (props) => {
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

  // Cart States
  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!quenchToggle) {
      dispatch(ACTION_QUENCH_TOGGLE());
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
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
      if (saltCaveToggle) {
        dispatch(ACTION_SALT_CAVE_TOGGLE_RESET());
      }
      if (jetHydroPeelToggle) {
        dispatch(ACTION_JET_HYDRO_PEEL_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_QUENCH_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (quenchToggle) {
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
                <p>50 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>Rs105</p>
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
              display: quenchInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (quenchInCart ? `${styles.x}` : 0) : 0
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
        quickieInCart |
        glowInCart ||
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
      if (quenchInCart) {
        toast.dismiss();
        dispatch(ACTION_QUENCH_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_SELECTED_DAY_RESET());
        dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());

        props.resetAllCartStates();
        toast(
          <QuenchRemovedNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_removed_container",
          }
        );
      } else {
        toast.dismiss();
        dispatch(ACTION_QUENCH_IN_CART());
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(
          <QuenchNotification
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
              quenchToggle
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
                quenchToggle
                  ? quenchInCart
                    ? "rgba(119, 221, 119, 0.6)"
                    : calmInCart |
                        cbdInCart |
                        chemicalPeelInCart |
                        clarifyInCart |
                        dermaplaningInCart |
                        bacialInCart |
                        microneedleInCart |
                        rejuvenateInCart |
                        quickieInCart |
                        glowInCart ||
                      unsureInCart ||
                      saltCaveInCart
                    ? "rgba(211, 211, 211, 0.8"
                    : "rgba(0, 129, 177, 0.4)"
                  : quenchInCart
                  ? "rgba(119, 221, 119, 0.6)"
                  : calmInCart |
                      cbdInCart |
                      chemicalPeelInCart |
                      clarifyInCart |
                      dermaplaningInCart |
                      bacialInCart |
                      microneedleInCart |
                      rejuvenateInCart |
                      quickieInCart |
                      glowInCart ||
                    unsureInCart ||
                    saltCaveInCart
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
              style={{ display: quenchInCart ? "none" : "block" }}
              color={
                calmInCart |
                  cbdInCart |
                  chemicalPeelInCart |
                  clarifyInCart |
                  dermaplaningInCart |
                  bacialInCart |
                  microneedleInCart |
                  rejuvenateInCart |
                  quickieInCart |
                  glowInCart ||
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
          <p className="big_screen_price">Rs105</p>
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
          color: quenchToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {quenchToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
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
    if (quenchInCart) {
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
          style={{ display: props.quenchRendered }}
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
                      backgroundColor: quenchToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: quenchToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 200 }}
                      to={{ x: 0 }}
                      config={{ delay: 300, duration: 4000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? quenchInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quickieInCart |
                                      glowInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : quenchInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quickieInCart |
                                    glowInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? quenchInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quickieInCart |
                                      glowInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : quenchInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quickieInCart |
                                    glowInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? quenchInCart
                                  ? "rgb(0, 0, 0)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quickieInCart |
                                      glowInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : quenchInCart
                                ? "rgb(0, 0, 0)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quickieInCart |
                                    glowInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
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
                                  quickieInCart |
                                  glowInCart ||
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
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: quenchToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: quenchToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: quenchToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>Consultation for seeds</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Hydrating
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

export default Quench;
