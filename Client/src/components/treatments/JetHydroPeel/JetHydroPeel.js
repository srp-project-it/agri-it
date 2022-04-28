import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
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
import "./JetHydroPeel.css";
import ACTION_SALT_CAVE_TOGGLE_RESET from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE_RESET";
import ACTION_JET_HYDRO_PEEL_TOGGLE from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE";
import ACTION_JET_HYDRO_PEEL_TOGGLE_RESET from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE_RESET";

const JetHydroPeel = (props) => {
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

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!jetHydroPeelToggle) {
      dispatch(ACTION_JET_HYDRO_PEEL_TOGGLE());
      if (calmToggle) {
        dispatch(ACTION_CALM_TOGGLE_RESET());
      }
      if (glowToggle) {
        dispatch(ACTION_GLOW_TOGGLE_RESET());
      }
      if (clarifyToggle) {
        dispatch(ACTION_CLARIFY_TOGGLE_RESET());
      }
      if (bacialToggle) {
        dispatch(ACTION_BACIAL_TOGGLE_RESET());
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
    } else {
      dispatch(ACTION_JET_HYDRO_PEEL_TOGGLE_RESET());
    }
  };
/*
  const cardDescriptionHandler = () => {
    if (jetHydroPeelToggle) {
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
                <p>$250</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          This non-invasive treatment uses oxygen and saline to unclog pores and
          purify skin while infusing condition-specific serums.
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

  const bookButtonBounce = () => {
    return (
      <SuitcaseBounce state="suitcaseBounce">
        {(styles) => (
          <span className="fa-layers fa-fw" style={{ position: "relative" }}>
            <FontAwesomeIcon
              color="rgba(211, 211, 211, 0.8)"
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
            <FontAwesomeIcon
              className="small_screen_card_description_suitcase"
              color="rgb(151, 151, 151)"
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
          <p className="big_screen_price">$250</p>
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
          color: jetHydroPeelToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {jetHydroPeelToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
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
    return (
      <div className="jet_hydro_peel_coming_soon_container">
        <p>COMING SOON</p>
      </div>
    );
  };
*/
  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="card_container"
          ref={ref}
          style={{ display: props.jetHydroPeelRendered }}
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
                      backgroundColor: jetHydroPeelToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: jetHydroPeelToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faGem}
                      className="facial_advanced_treatment_icon"
                      style={{
                        color: jetHydroPeelToggle
                          ? "rgb(0, 0, 0)"
                          : "rgb(111, 111, 111)",
                      }}
                    />
                    <Spring
                      from={{
                        x: 100,
                        fill1: "white",
                        fill2: "white",
                        fill3: "white",
                      }}
                      to={{
                        x: 0,
                        fill1: "#ffc9a9",
                        fill2: "#5cd7ff",
                        fill3: "#000",
                      }}
                      config={{ delay: 300, duration: 1000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            style={{
                              background: "rgb(201, 201, 201)",
                              border: "1px solid transparent",
                              color: "rgb(141, 141, 141)",
                              cursor: "auto",
                              transition: "all 0.5s ease",
                            }}
                          >
                            {bigScreenAddToCartButton()}
                          </div>
                        
                          
                          <img src="data:image/jpeg;base64,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">
                        </>
                      )}
                    </Spring>
                    <p className="facial_coming_soon_designation">
                      Coming Soon
                    </p>
                    <p
                      className="facial_advanced_treatment_designation"
                      style={{
                        color: jetHydroPeelToggle
                          ? "rgb(0, 0, 0)"
                          : "rgb(111, 111, 111)",
                      }}
                    >
                      Advanced Treatment
                    </p>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: jetHydroPeelToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: jetHydroPeelToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: jetHydroPeelToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>JET HYDRO PEEL</h2>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Exfoliating and Infusing
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

export default JetHydroPeel;
