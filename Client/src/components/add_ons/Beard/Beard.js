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
/*
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
                <p>$30</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          Purify your skin while invigorating and conditioning your beard!
          Ingrown hairs will be removed, skin hydrated, and hair cleansed.
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
/*
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
*//*
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
*//*
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
*/
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
                         
                          <img src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRQZGBgaGxwcGhobGxodGxobHRsaGRkbGxsbIS0kGx0qHxgYJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHzMqIyozMzMzNTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAgMFBgABBwj/xAA9EAACAQMCBAQFAwIFAwMFAAABAhEAAyEEEgUxQVEGImFxEzKBkcGhsfBC0QcjUuHxFBZyFWKCJDNDkqL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAgMBAAICAwEAAAAAAAAAAQIRAyExEkFRBCITMmFC/9oADAMBAAIRAxEAPwBOv4WbTCeRqc0vCFNtXA5ZpfiTV27gG0ipPwu4e3t7YooCHuXJuADpzqz6Y4FVvielKXhHI1YNO3lB9K5cqqR1YX+rM1Ymo/UFV96kvWofXsoljB9+X2FYs6ojI1Kn+mR6A/gU3cuIZyR6Go6/r7znbaVQveP2pdjw7qbvmuX9nsM0U2U4VtsNsX0H9VGrqFbkRPpVe4xw86ZN3xN8c9wifqKrNjxfaDQwK9zH5FUlIltLdnR271jMD1/4qu8P48l0eV1antPxBzO5cDkwPP6Rg0rAJ4gQoJ2kjoAOZ5Afembl/YAvaN3ufwBW7epLsOy+Y+48q/rn6UxqbW7nnmT+P56UrRVDtoAmQPx0xWOjJcDphu4MTPeKe0Fo8z06fz+Yp/R2mu3CqD5eZPQ04p3omVU7BtN4juI+3UcicOBy/wDID9xU4Lm7zAyDkEdRQnEOHhlO4gxzMQR/eqkOL3dFcS2xQ2XdcvIFtWMMQRy5zBHTpXVCbumcWTGuova5rWo0+4QRipLTaOeRB9iDGJz9CPvTt3QGMmtjnIJFCiAKReJ6UZqVW382Pem1QOJXIosKAVIinE2981q7om/pxWtPw5l5yTSGY9wCOtE6fWlG5YoYWNskjNNXb3agCX13FiV2jrUG7Gc1q5qAvzVhcc6pIljep0yOIZQZqG/7fCtuXl2qecQK0j/WiUU1TCMnF6BLd1LYAIg08vF05TTtzTq4yKiNTwQjKH6Vxz/HfUztx/kR5JE/Y1AeiRaHMVX9Hf8Ah4fBoq5xhAOdcrjWmdC3wl3bFRutvADNRd7j46VX9fxkludHhtlppdJ8OvOibPE0UVT/AP1AnrQur18DnW0YMynJM6dwO98Qm4OQO1ffqanPaKifCWnNvR2wwKuQWMiCCx6g+kVKgTUPoHKdPqietWnwzxT4bwT5W/euZ2OJDvU9oNXuGDmvRR5zR07i7BtrjpmidO0opHYVVtDxkNbCMcjBq1cKIayp9KxzLhv+O6bE3t0QKAPDGuGWOPv+tTVu3nNEXbqqMwPSudRvp2+60iL0/DlSMR+aZ4rxFbSHMRnnQfG+OqgJ3YFcz8QcfuXiVtgkct3T6d6O6RaXyxfibxMHYjcSIwOeaody5JJPUzRGpsESWOaHRSTA5murHFRWjz/yJOUraomuG2kLrsLAqu5iGIk4gY+pqw6HjjIQt3cYmHQGSJjzr1OKr2h067Tbc7cg/NEt5gBNSFq6gRAwDHacx5iGxMDMSQTRKKl0UJyjwtq8XZRNtN6vEkcxzx+oqY4W5uCSpB7HpHL+9cr0V65aclXYKSBBPMmIJB7ciavXBvEighbp2EQCTyJPr0OK55464dMMqlplpvXAi84/vVj8M2QlreRl8k+nT+etVpra3BKsCJmRFSun4idnwxAgAfpTxunZU16VBjWFfdMEGZBHMH0qhf4i8OAEwCGhQAORz16z+K6BpsLmPpVS8b8URbTAkEgE+x6fWtLM5Kzj3CuM3tNeW7auMGU9zDDkQZ6EYr0h4U8S2eIWVuW2AaPPb3AuhkjzDsYweteXbjSSalfDviDUaK78XTvtbkwIlWEztYdRj3rZaOR7Z6X4rwVL67XmPQx+1bt8NW2gW2IAoPwh4qta7SjUYtkNsuKzCFcQYDHodwI96kNJx7S3bps27yPcAJKqZiCAcjEiRTtEbE29CJzRf/Sr2onbWE1QEFxXh67W6Yqo29PsESTnrVu4/rAqwOdVRrsiSIpAIuWQ3zDlWiQByrYuqeTAn3rTkHFUSaRprFAHKnLaRSiBToDLRmnwlN1H8Z4wunt7iQT0E1L0NbLNpeD2tQpW4PsY/aq3xT/Dy8CzWrwZeitz9pFVS9401MhkYJiMZmgP+6dcZ/8AqXzzyKwklL4N4uUeMZ1y3LTtbuAqy4I/nOgXeaES1qtTcIRXusWALKpaCe5Agc66Bpv8NLpj4mpVRAJ8hLT25gVLil01jNsrPBeF39Xc+HYTcR8zHCIO7N09uZ7V07w54KtaZhceLt0cnIwp/wDYOnvzqb4Fwy1pbS2bYhR8xHzO3VnPUmpRWzgVDdlb+RkWMGaXbsQMZFOCfakkkVNILZ5PDVI6HijWz6VG1ldhxlx4fxtWYZrqHg7iYuW2Scof05j8/auAo0Gat/gzxF8HUru+R4Rj2k+U/f8AeoyK0a4pVI7up6gUJxSyAhZ8k9Og+lP6a7gTSuIAMsn6dprl6jui2pIpqcEW42+95h/SkQoHcjrSeKWLSLtS2MdABUxfu4yINR+udAhJj39ah8pGq/tbKPxDgq3CggZYbj+4moDinD0t6hVQFczA7jlVj1+vW3IgtAJB6T9aqdzXG5c+IRBAMGdomORPtJrbF6MPyfFf6P3S1xhbWdweWI/pVCQCO5zWrNx7l4q3lkAZHODP0mSf0prQ6tRLOcljAU7SJ59jEKKJOoUGEDNMhSTmeY5nlzE8s1ucQnV6obAwBDKWAB5wQIn0kN9/StX1LKpJhokxBYNzAI+tD6q/LhiIkcvlG0CCDPPMn609eVVA2SHYiSD/AEkwoWcqetFBZIcC12otISjkTMqTIJnlHJfYVOJ4tZf/ALluWJI3K0YHXPscH81WtFZdF27jzMCAczMmOQzH051q65aFlNx5qQvMH39Rz9e1S4JlRySRfv8AvS2bcK7McR5SCesYJBxXOvEfHX1DEeYLM5wT7jpTmttvaS3uMi7LKMArDQMx5QZInPWoFpDGcwTOcfenGCTsUsjaoI4bpfiPtMwBJiJPpJ5UxqLW1ivUH+CaleEhQu8YZZDEycGAMf7ZoPWWCC2VEH5R16kqJJj1/wB4u9mdaGxrrnwvghz8PdvKf0loAk98KPtUp4X4xd0t1b1nbuQNG4SG3AiCOZwTUOtwkBAOuPf170RavbYVF8xwfeSMR786Gho7Jw//ABaBW212yoBH+aVbIM80U8xGYJq/3OLW3tC5bdXRxKspkEehrzcmm3SrmPLGACREYj6frVg4r4q1btbS2zKlu0V2KQBtVdskkTIx3yPXEpsbijo2ovm4xYmhNYp2mg+Caovp7buVLMgJIJI95PM9/Wq/xTjDM5W28LkFup9VPQdPWa0tJGdNsrmq1Wp0992DACeROPpVg4H4rW7dWy6nc0gMI2yAT3noaqPHWK7c5EHMFpbzSZ6fmaj7WpuLcW7bJDKZBGM9R6juO3pUpls7cjilPXP9L4pum3uZVDyMAEAj1k461I6XxDeuEL8Myf6VBZv0war2iPDLFxPiAtW2fsK5fqeIvqGLXJOeXP2ir1b8NanW3P8AMY2bA6MCLjd4U8vc1a+FeGLGljZbUkf1RLfc1jkypG+PE2cy4H4R1WrYGPg2hgu4IJ/8UwW98D1q9cL8A6W0SzFtQ3a5AUd4UYP1mrYomkOsGR9a55ZW+HZDBFd6J0dpFULbQIoxtUBQPoKkLVuaGtL6UXviKUX9jmvhGOsCk6e4TiscziKYa5sIPMGnZn5skd8DvTLXgaGtamSQcdqdZh1H2p+rF4o8qVlZWV2HCYKcV4NN1lAHdfAviEanTqCf8y3CuD1gYb6/3q5B5AnlXmvgXF7mlui4h9CDyZeoNd08M8dt6q2HRvRh1U9RXJkg0/8ADuw5FJU+h2usBpFV7XaRW8m5hM9Pz0q43UG2enU1HPsAkEH1rNo6PX0cl4/wj4f/AOUwTAmMk9J71Wzb2RA3bWbcZAERDArPOP2ro/inhQvI24BSreU7i31genTpVN1PDhtCKIWcx15Sc8+QIrbFL4OfPG1Y3dtAhCSAu2MEEGSNiyOX1zQ+qVVHmYljkKpkKpJ7fLAgdzNK0K7EKMRu39xgdGWMnl/IpVzVKu4SpbIAHPmqiHHPl1/0+lbHKBavygENhoIDDI6gj3zjsac4ejuO53czMSDiSPXlHamrRBKhmB8xBBMkACJ5YEVL6RtwaBsX+mRE/wBUwM8mH2mc0CBdRrxbBAO5p8w2/KIgDcfaaiNLeYGFEsTgnMHv70ZxlPMYAhQJM5aYOe8TUaAAQZPcxzGcQe9NCb2FX7j3TtOdoJ7n1APXJP3NNJZgruESRz7T1HrmpXRWlYqyx5wdzdUMjoI6A/elamyQELKV3jcCcSobYCDEZg/aiwoE0Gndd1wEBQYziRMTHp+9Ma14KqGBKgiQI5z27CjdDteA0EqCsGO4jlloE/r3pfGAigjYgacRzCwY5AdRj0NHyHwQQwafZizAqCIgA+vQk9DWlUQCFJM55RkYApelZwG2DBwfTn+KYiYXWDaC3zYEiBkx9xgn6VH8R1LGCDEgggAjEzBnnWxZZVADSSw5dQcR+vbv2pjUNEiDMZnmIzH3x9KSKZdNFxLboUtm6C5O1uhRJI2iYmNoBInn7God9UJC8nHmXEgGYKn0xBoHRWVdUXKknnnoYbtPMGJHWndSAbm/yso5DO4xz5esx70m7YJUgO9p2uXHMgwefTodo64n9KMTyBUt+ZmkqsSQTjcsZjFFcJ0zXZFoS4Ygc8AzG7r80c+ldQ8M+GUsZgNcgBnIycDyr/pUdvvNTKdFQxuXDmvCuAaretu4ht25Ls7LyxG0E/TGOtdc8PaK3pUGwBg0Fngbj9e3pUld0oIgiaVZ0igYFc88kpHVDFGK2FyHEitNaxTGntleR/tRcmKlK+lP9eAZQjpWisUYKxl/vNPyi/Y1p6eukBcj/atiBQl5yZE+lPhm/wBnZvTuWB2mQP5iniqkZx3pGhtBECjn9PxTjMR+e1IG9jDWoMjlS0E8zWOfao29cYHt7UWPy2eaaysrK7jzjKysrKAMqd8K8cbSXg4PlOHHcZ/WoKtik0mqY4ycXaPSWh4il20GUh0YSIzIoFLSop2rtPmJWZ5knmfrXLfA/ik6Ztlwn4RPvtPoO1dZlLm26jAgjMZkdP561ySg4ujvx5FJFY4v5ipRiFOe89II9pqn8Xm2rN25cvvFdH4kiRAHeMd+1ULxFavBWK2iVzLGBHbrJNKGpIvIrgypKqtOTJYFmOFVesx1noB09xTqEHeGSHCmJ3TBAiBHOI595707oNIJBaUMSxfrG6fYTGT2pel1bPcbd5mLbi24nPlnOB3/AFrqPPr7GdKwDMNpCgRJ/wDi0HHQK33or4xtqznM9hhTy/aPue9K1Pw9w2zkkMQAfSJPX0j8UJvBQ7pjIHfYBI5/T7UAI4npV3B1ICtknMSfznlRFjQpbQtdG4sPIIYcxg9MkGc9qAFx2tm2R5VyTOB2pd+4zs3n8q8iJgwAogGDH4NUIkOA2ZQ4zJgxMYGT+tb+M+AVZgilAGiCxyCSTMQCf+a3wDUbCbfQkspOJAkcunKmuJ3s3NxAMjAnPX26g9eeakfwMaTTEn4zTmSAADPQ/N6Z6zTdmwSSWVmzt2hfNMNynAjbnHf6EpxAMMTifLtBOeZz26AChNLfd5UeYgyqkbizN5R7xPWqAd0Fq5duJaVd+S21V6kc2wIjvyFWnQeBtVuJZFRcwOZzyJj3PLvXTfBHg1NPZBeGuP5nbu3b0UcgP71ZTwa3ukAA1Lt8HHz/ANM5Pwz/AA4ZD5rpMGQAohef+ompDUeB9MpJd3fEHMLEnHljuavnGNME27T5oOesTj9zURqkHy9AM/z71jOUk6OnHji1aIDS+FtMBCWlgcuZ+pn3pnhWltO7KbablJDQARIMHp3H6VbtCgG4+uPYf70i7w9d25VUEnLdSYAHvy/QVFs0/jSGdLpLaxtUD0AgTUqrg9M0L8KB/MUtLsf3qLL8hgEUq2taF2enT6VvdVJEOxZX+dK1TTX4YLBMzmBA9/etm70oYqYth0BAra/zrSfiCkm7SHTH2ANDGwS0we1EI6+lbOqVQTT0SvS0kPJp1CyTQOt1KqMf80Nf12JLVC39aScCfU1M5pLRpjxO7kwxtdPMxTT68cg0D0qPu2WcEM0e1APwxQfKzHpE8qx9s3qJxGsrKyvVPFMrKysoAysArKf0YlxQAVotJOTVw8Jcfa062HbyEwpJ+Q9B7Hl9arYTafSniihZ51lJeum0X54dfDW2Zdze+P270BxewtwmTIiAkCB+kk1QeB+KCrC1ePk+VX6p23dx69KvSXvOpLSp7HBH5NYSi09nXjmpFX4rw9dsQI6j9QOnSap+oulHG1gSFwxEAwYlRGTXXNXpFuA9p/T7VyXjmmZbu1UZdgjr07dMela4mjH8iL6Y99UUgNLNlyOc9wT7/qcVvQkbZMQDgt1EEN7Rz+9J0F4kbGkjoQoLbYgrnpEZpm9qnUKACu0QsgT6yI55OfWtjnehN66oQKrbpktiM9P3P/FM6domSQIx74MfUDlQ78zNLe7IAgADtOT3PrQTZMcE1FsOzOpLA7lMbjGf6cz0pHGdUHMgeUiJgA7l6Y5c8gd6i9OyhgWmOscz6U8GUgbiwADQBkewn6UUO9A7XCY9OX8+1T3BSv8A1OnUgYuIXI80mVPzZ5EdDE1A3IJJGBPKpPhrEgBIDKrHdgEGRGTzpPgLp6M4P4is3NSdNbMhbatugwWJMgE9hH1NWEXhug/SuXeCeO6X4YfYqX/622jcwPMgjmszjpV0t8VDyQGJHIBTNQp1pmv8fraG/EV9hdRVAypyemf3k/vUPq7m4R1j8zUhxQszh+Zj5RzHLE/eoplgZ7z/ALVzzf7NnViVRSCNBeKyD0PX1AP5o68551ADUjcR3GfcY/NN3eMfDwTI96j0bUTVu7zG4nJOTnJmB6UtHzFQCcRS5yMH3qQ01wn5j9aViJS3djA/n1rTavOWgfz7VqzbnrP1on/p19P0qtsltDLvyFLUScUsovKlMoI7RBxinRPoaYEUm2SRJ/FEMnemHtf80mi4sba5mmnukc+VLa0e9NvbxM1m7LckBXCpk9RTTtieVLvwPegr5yM1k2NKzT3j1mmPiyTWXbtROp1wGJzSNUjktZWVleyeCZWVlZQBlEaIw4NMosmKkF020esUmykg1zuoQOwJFK0+pCmGrXELwHy9aii7AmwTNTfh/wARvYIV5a39yv8A4+npVfL4ikiqcbVMlTado7Lw/WKyhkcFGGDiAffpQXFdAb28qBsQEBp+Z8+Ve/LnVB8PcXaw8EbrbEbl/I9f3rqGl4qtxViNjDykRAjpWEoeWdccikiq3NI1u2C6KvIkCTB7T1ioPX8P8vy+YSQDyPv+9dB4hYDSqqCGPmmfKII8o74H3qv3NKGYqZDKcyOmSIHbnVXWyfKemc9dDPKk/SpbW6cB4JAUNnmMGCM/U0LdKqQEGVJJJ5emcVqnZzSjTEaXQvcfaEYkCSAMgDnil3tK26FU4AwAcE955GpDw5xJk1KkLO6FYSc+uTznP3q9v8IXGtr85yQcepg9/MKUpNFQgpI5pcsvuVWEEwoJgAZgebl7k1YuI+FdZoba3blvapiWB3hZGN5UQvmiM9aa8TWlyAMg+vXnTvB/E+ot6Z7Zvb7cFdlyHCTG1lDA8oEDlk4oTtClHyyLv6o7UdGKMo5hyCecNAGPmFG6bxtrEwbhYcskzy7g1H6p12ZA3MegPVd2R3k/pUZZQswXqxAEmBJMCSelPyn0PTT0Xa1/iFeEMynIjngxTC+Ob25iFLhj8rf0+xA6/ioNtCElLjEsAQoAkCCcn69AfvROk0gW0+4QVacHsJIPYjAqfESv5JfYbqfGV1sqijoZOftUTquNahxLEhT6GD9aeXUqLTFFhgZ3HaO0qw5mInHcUEbrXFCdckgDn2afeBQoRXwJ5Zv5GG1V0Z3sPZo/ap7hHiPV2l3fF3LmFcbgduTBkH0wajdUF2qgyx2nPNJEEY9c/WndXdRV2BQSvlB5EYEMP9WZ96bSeqBSkt2X3gHje27BbwNvoGyUJ6Z+YT7R61e0cRIecTz51wDeWtLEghpLRgAYnvAEV37w+ou6Kw7KGb4ahpiZAhgCOsg1jLGlw3hklLo4SYxTTlhyB/NPvaC8sj9vQ0r3rJ6N4ocsXWPMUtzu6Uyj06XzNKwkhTCRQ11cEU98XvQGv1UA5qZNUEU7ANUwBPeo/U6gKvvmkXtSJJPOaiNXrM4PLvXOdSj9g+q1rGRMVHtcHWSa3dbJM0BcfNaxiKU6KbWVlZXqHhmVgFZFOWSJzyoAeCRBXJrZ1R60l9RnAimWaTJqaKv6DDaBG8mkam6rAAUOtyBHSnbdkESDRQ7sYCE1qKevMDypAPQU7FQbo9L1NSvC+M/AuBTJQnzDt6r/AGqKNwphqEe7J9KmrKuuHYNLcS5bW5bJIgYGcdPYUFxDOZMzOBOBk/2xVO8O8bNjGdh5jtPUf2q4aVLTqWt3C28zB5DuB/p9qxlFo6YTTRVuM6dWJgDdPXqOxqCuujW25b9wziSBPKB/zFWbj2otjl0kZ5mqWz9uXb25Vrj4Y5ujuhvBLiORIVgT9D6Veb4V7q3W5skgHkIjcQQYJwABAOa57Ulp+JsFCtmOR7DtVSVmcZUWPjmoDA7iASB7/aqmgG8AgkE5C8z7UW117rhRLEnap6STn0zNdF8M+HLdtFMB3PzGOvpPIYrNtQNknk0Uq/LnZtCADcWPIjkJ55kjn/amfgkOxRDI5M0czkmOoJParv41dbSAfDQs/wAu6Oh6Y+Y/iqfY015kZ03FBuAacSeYKtyABn3FVGTatkZIqLpMYe7mNwLKZ2k+X0BM5Amevb1G9Zp2F02sBYG4qSRyB3Hn1zQ9zQjEkgAbjP8ApPLnyEg9T39KOssrFkkwciWLFowB6YAxyxVEGtRo1W3CBWEMxaJODEbuoJ/RfWhtDbbadoIMzM5XkBz5kic+lEbFQNtYlsQm4tAwPoPN9gedEWXaHYZJHkWMHAkDPPuf/cM0gAtVZVUZxIOFAJnAIlmgc5Ix6UMjfFbewkKAoE8zgKCe0yelMaq6zlniQQC0AwpMCe09KXprNxZlSFkEnImOkj/y59KoRNIqW0YQGMbdoGMZJnlJwD7+ldS/wt1xfRbWPmS46mTMAneB/wD3XI11HwyWDAAr1AlsYBwJwenOc9Kv/wDhMt1Df3q3wnKlWYRLQQ2D6benSsp8s2x9o6NqljzAe/qKGgfzpR11Tt7io3UW+xj81zyOuLNE4rFegXdhimg561m2aUFXNWO5xVd1/ESZExWuKasrIGKrlzUkn96yds2hFLbCNTq/Wop700q9ck0K9yKqMQnI27fzvU5wnhuwbnALMOREwP70Pwe2if5lzBHyg/v71LabiK3BvR1I5Y9K78WJJWzzM+Zt0jkNbC0WNOVEtQrNWtnNVGgK1NamspiMrKUBia1FAGqUGI+tJNZQA6lkkT0pzSEBpPIU0lwgEdDSd5pD0Eahww3dZoWnI8v1psihAw+1lB3Bp61qbiH/AC2I70DpnMx0NSNnSA82jNJlJjOstOw3MxPWKjaldVfEFQZ6VFkURFI1WxTnwW6CaP0/DJEsadiSYb4ZshLyO5xmB6kRNdWbiVlLaoXVGfyg7huMgAbcHPm7YrkjpJjdhcj6U+WdlU7hCTuJJBWOTfiB6d6ylH07N4T8qgvjZd7ircdgEJXznO1SSJwOucDqTigmYIgXcADuJIBC8gP/AJGeo7e1J+Puu7hBlQRMAYiFAjAGe55e1D37c3DK7mJG0HkcmQZ6x1NWkZt3se0i7mm4ysm1TktBCTA/f701p9QN5BXaGwpUwwIjG4iYMcu5pviV2TsgSmAe65xHtH2FItszbVghRGesEmQp7Ez96okfXUOX8i7Vg8wcqB5fflgetPKqKgRmLGCwAnzRJIIjsAOfSt6YG5c2FtgVREEYGPUCTIjOJ60br7aW2+GolzlSoBk455HY9Yj7VLZSREI6sGIlRtJYADmsdSepaiU14NvZI8y+aTkEEAgH1hTjtyreqSFVFlTtUjaIkljuB7+3SrLwnwgPhqxUksJIPOYIEAcuZpSml0qGOUuD/g/gAuEXHUmDFtTzVf8AUe7H9veumWbIVQqiCKB4LoQllVnksHOcdJ50Tce58VNu0W9p3E/MWxEdIx+tc0m5OzthFRjSJ2wwZAR9fegr6RMcv2pVt9uOmPvApNy6KG7EotAF8YqH1d+Jipm+AZjHeq/xRxkCsp6Nse2QHE75OTUJeuUbxO+ZioW6/wBPalGJpOVC2ujp1o/QaQgh3E9vT1ofh2mJPxGHlHLHM/2qdUBhI7TXZixfLPOz5r/VG7mnW4OX0NA/+khF2AHnuMdzRGe/WnxqyecfaunTORNnNdZqNxjpQhFbbBo7h9lSCzdKjhXWCtp2A3EQK05WBAyOdH6q8H2oe/OhdXptoB70Jg0NfDPIZpBPSlWmI5GKJuWsAgSetFhVgUVkUXa0xYEzEVmnteYEd80WFGrOlLdIpq/ZKGDR7Ai5EzOaH17kscYGKSYNaA6wmsrKokwGnRdPem6yKAsKsaRnzyFF29IqttOaf0p22xNR7ao7iV51HTTSJLTFW3AGDS7OkYnaMk8hMfr0FAabSGdzHn2qd4BeC3SGG7y4+4n8UmNb6NPbVBtaNyiXBggHmAOfWft61Fs5u3GBY7ZA5jPmAwemCx+lXbU6G1qDlYY5cjEqOQ9YMZ50fouH2bI2fDBlsYE9xJ7D80vVFeL+ShXBbVlVSqgEy8T5egn1x9+VM3L+54IbKwkzyP7consSTXRtZpLLwTbBYmDgRHL9gKiOIeGXdz8J0ACkZDblByIP3pqf2Dxv4KQbDXGZmG1V+ZjMR0A9YiBT9jR3rrj4aEAZE4ESY5+8Vd+HeFiVHxDyubiJJxyBaTDGAvTGaslvhwAAAxHPty/n0qZZPoqGG1bObcP8P30f5lEwJA3EgEHryGP0q7eH/D9uS7LuLCDuAOD0HYVKpoBvC981N6TTKuR/IrOU2zWGNRIceDrB2mCpB3AKcT7dxU/b0yotbuP250E1ok8zn1+uBWbZso0OoVbERk/XnTmnslepI6DtTVpNnUme5n7Uo34pF2FlqGa561p7wqvcc40toHmTSbF0kdbrwmDBJ+9V3iF4t3j1qE0vF2u3CzfmnNRqzfJSyMjmTgD171PiTZopRgrZHa+5JgZPQDNE6Pghba13r/QMf/sfwKXqeENp0NwNuuRzPId4pHAPEgc7Lohu4yK68eJLp5+b8hy/rwm/gQIWB+0UmySGIjpT1xpyvWmmbyz1roOQQ6BifWh7lnOKV8SRPIg05d5CgD//2Q==">
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
                      <h2 style={{ fontWeight: 400 }}>BEARD DEEP CLEANSE</h2>
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
