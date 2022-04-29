import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { InView } from "react-intersection-observer";
import ACTION_CALM_TOGGLE from "../../../actions/Treatments/Calm/ACTION_CALM_TOGGLE";
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
import ACTION_CALM_IN_CART from "../../../actions/InCart/Treatments/Calm/ACTION_CALM_IN_CART";
import ACTION_CALM_NOT_IN_CART from "../../../actions/InCart/Treatments/Calm/ACTION_CALM_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import CalmNotification from "./CalmNotification";
import CalmRemovedNotification from "./CalmRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./Calm.css";
import "../../treatments/card_styling.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { sticky } from "tippy.js";
import ACTION_SALT_CAVE_TOGGLE_RESET from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE_RESET";
import ACTION_JET_HYDRO_PEEL_TOGGLE_RESET from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE_RESET";
import NotSurePopUp from "../../treatments_pages/Page_2/NotSurePopUp/NotSurePopUp";
import ACTION_UNSURE_POP_UP_TRIGGERED from "../../../actions/UnsurePopUp/ACTION_UNSURE_POP_UP_TRIGGERED";
import { useLocation } from "react-router-dom";

const Calm = (props) => {
  const BookNowButtonRef = useRef(null);

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
  const cartIsActive = useSelector((state) => state.cartIsActive.cartIsActive);
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
  const counter = useSelector((state) => state.counterReducer.counter);

  const unsurePopUpTriggered = useSelector(
    (state) => state.unsurePopUpTriggered.unsure_pop_up_triggered
  );

  // Cart States
  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  // Pop-Up States
  const [calmClicked, changeCalmClicked] = useState(false);
  const [scrollFreeze, changeScrollFreeze] = useState("");
  const [tooltipShow, changeTooltipShow] = useState(true);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleToggle = () => {
    if (!calmToggle) {
      dispatch(ACTION_CALM_TOGGLE());
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
      dispatch(ACTION_CALM_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (calmToggle) {
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
                <p>$105</p>
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
        color: "rgb(45, 38, 27)",
        config: { duration: 100 },
      },
      {
        marginTop: "-9px",
        color: "rgb(45, 38, 27)",
        config: { duration: 300 },
      },
      {
        marginTop: "0px",
        color: "rgb(45, 38, 27)",
        config: { duration: 200 },
      },
      {
        marginTop: "-6",
        color: "rgb(45, 38, 27)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(45, 38, 27)",
        config: { duration: 200 },
      },
      {
        marginTop: "-4px",
        color: "rgb(45, 38, 27)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(45, 38, 27)",
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
              display: calmInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (calmInCart ? `${styles.x}` : 0) : 0
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

  const resetStates = props.resetAllCartStates;

  const addToCart = useCallback(() => {
    if (
      bacialInCart |
        cbdInCart |
        chemicalPeelInCart |
        clarifyInCart |
        dermaplaningInCart |
        glowInCart |
        microneedleInCart |
        quenchInCart |
        quickieInCart |
        rejuvenateInCart ||
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
      if (calmInCart) {
        toast.dismiss();
        dispatch(ACTION_CALM_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_SELECTED_DAY_RESET());
        dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());

        resetStates();
        toast(
          <CalmRemovedNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_removed_container",
          }
        );
      } else {
        toast.dismiss();
        dispatch(ACTION_CALM_IN_CART());
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(
          <CalmNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />
        );
      }
    }
  }, [
    bacialInCart,
    calmInCart,
    cbdInCart,
    chemicalPeelInCart,
    clarifyInCart,
    dermaplaningInCart,
    unsureInCart,
    dispatch,
    glowInCart,
    microneedleInCart,
    props.currentScreenSize,
    props.initialScreenSize,
    quenchInCart,
    quickieInCart,
    rejuvenateInCart,
    resetStates,
  ]);

  const bookButtonBounce = () => {
    return (
      <SuitcaseBounce state="suitcaseBounce">
        {(styles) => (
          <span
            className="fa-layers fa-fw calm_suitcase_wrapping calm_suitcase_selector"
            style={
              calmToggle
                ? calmInCart |
                    bacialInCart |
                    cbdInCart |
                    chemicalPeelInCart |
                    clarifyInCart |
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
            onClick={addToCart}
          >
            <FontAwesomeIcon
              color={
                calmToggle
                  ? calmInCart
                    ? "rgba(119, 221, 119, 0.6)"
                    : bacialInCart |
                        cbdInCart |
                        chemicalPeelInCart |
                        clarifyInCart |
                        dermaplaningInCart |
                        glowInCart |
                        microneedleInCart |
                        quenchInCart |
                        quickieInCart |
                        rejuvenateInCart ||
                      unsureInCart ||
                      saltCaveInCart
                    ? "rgba(211, 211, 211, 0.8)"
                    : "rgba(0, 129, 177, 0.4)"
                  : calmInCart
                  ? "rgba(119, 221, 119, 0.6)"
                  : bacialInCart |
                      cbdInCart |
                      chemicalPeelInCart |
                      clarifyInCart |
                      dermaplaningInCart |
                      glowInCart |
                      microneedleInCart |
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
              style={{ display: calmInCart ? "none" : "block" }}
              color={
                bacialInCart |
                  cbdInCart |
                  chemicalPeelInCart |
                  clarifyInCart |
                  dermaplaningInCart |
                  glowInCart |
                  microneedleInCart |
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
          <p className="big_screen_price">Rs 500</p>
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
          color: calmToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {calmToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        <div className="book_button_bounce_container" ref={BookNowButtonRef}>
          {bookButtonBounce()}
        </div>
        <Tippy
          // options
          content="Click here to book now"
          placement="bottom-end"
          showOnCreate={true}
          sticky={true}
          animation="fade"
          arrow={true}
          trigger="manual"
          className={tooltipShow ? "tooltip_shown" : "tooltip_not_shown"}
          reference={BookNowButtonRef}
          zIndex={100}
          hideOnClick={true}
          delay={2000}
          plugins={[sticky]}
          onAfterUpdate={() => {
            if (scrollFreeze !== "") {
              if (props.scrollValue !== scrollFreeze || counter > 0) {
                changeTooltipShow(false);
              }
            } else {
              if (counter > 0) {
                changeTooltipShow(false);
              }
            }
          }}
          onShown={() => changeScrollFreeze(props.scrollValue)}
          popperOptions={{
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: ["bottom"],
                },
              },
              {
                name: "preventOverflow",
                options: {
                  enabled: false,
                  rootBoundary: "document",
                },
              },
              {
                name: "hide",
                options: {
                  enabled: false,
                },
              },
            ],
          }}
        />
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
    if (calmInCart) {
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

  const handleCalmClicked = (e) => {
    if (!calmClicked) {
      changeCalmClicked(true);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      if (unsurePopUpTriggered === 1) {
        if (
          !calmInCart &&
          !bacialInCart &&
          !cbdInCart &&
          !chemicalPeelInCart &&
          !clarifyInCart &&
          !dermaplaningInCart &&
          !glowInCart &&
          !microneedleInCart &&
          !quenchInCart &&
          !quickieInCart &&
          !rejuvenateInCart &&
          !unsureInCart &&
          !saltCaveInCart &&
          !cartIsActive &&
          location.pathname === "/"
        ) {
          toast.dismiss();
          const unsureToastDeployDelay = setTimeout(() => {
            toast(
              <NotSurePopUp
                currentScreenSize={props.currentScreenSize}
                initialScreenSize={props.initialScreenSize}
              />,
              {
                className: "toast_container",
                autoClose: false,
                closeButton: false,
              }
            );
          }, 3000);

          return () => {
            clearTimeout(unsureToastDeployDelay);
          };
        } else {
          dispatch(ACTION_UNSURE_POP_UP_TRIGGERED());
        }
      }
    } else {
      toast.dismiss();
    }
  }, [
    bacialInCart,
    calmInCart,
    cbdInCart,
    chemicalPeelInCart,
    clarifyInCart,
    dermaplaningInCart,
    glowInCart,
    microneedleInCart,
    unsureInCart,
    props.currentScreenSize,
    props.initialScreenSize,
    quenchInCart,
    quickieInCart,
    rejuvenateInCart,
    unsurePopUpTriggered,
    cartIsActive,
    saltCaveInCart,
    dispatch,
    location.pathname,
  ]);

  return (
    <InView
      threshold={0.2}
      triggerOnce={true}
      onChange={(inView) => {
        if (inView) {
          if (unsurePopUpTriggered < 2) {
            dispatch(ACTION_UNSURE_POP_UP_TRIGGERED());
          }
        }
      }}
    >
      {({ inView, ref }) => (
        <div className="card_container" ref={ref} onClick={handleCalmClicked}>
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
                      backgroundColor: calmToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: calmToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 500, fill: "white" }}
                      to={{ x: 0, fill: "rgba(186, 225, 253, 0.7)" }}
                      config={{ delay: 300, duration: 3000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? calmInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : bacialInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      glowInCart |
                                      microneedleInCart |
                                      quenchInCart |
                                      quickieInCart |
                                      rejuvenateInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : calmInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : bacialInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    glowInCart |
                                    microneedleInCart |
                                    quenchInCart |
                                    quickieInCart |
                                    rejuvenateInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? calmInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : bacialInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      glowInCart |
                                      microneedleInCart |
                                      quenchInCart |
                                      quickieInCart |
                                      rejuvenateInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : calmInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : bacialInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    glowInCart |
                                    microneedleInCart |
                                    quenchInCart |
                                    quickieInCart |
                                    rejuvenateInCart ||
                                  unsureInCart ||
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? calmInCart
                                  ? "rgb(0, 0, 0)"
                                  : bacialInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      glowInCart |
                                      microneedleInCart |
                                      quenchInCart |
                                      quickieInCart |
                                      rejuvenateInCart ||
                                    unsureInCart ||
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : calmInCart
                                ? "rgb(0, 0, 0)"
                                : bacialInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    glowInCart |
                                    microneedleInCart |
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
                                  clarifyInCart |
                                  dermaplaningInCart |
                                  glowInCart |
                                  microneedleInCart |
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
                          <img src="https://image.shutterstock.com/image-photo/crystal-clear-water-being-flush-260nw-201130814.jpg" /></>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: calmToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: calmToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.3)",
                      boxShadow: calmToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>Water Management</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.7 }}
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

export default Calm;
