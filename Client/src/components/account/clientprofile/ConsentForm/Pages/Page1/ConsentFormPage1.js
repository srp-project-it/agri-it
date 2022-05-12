import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import SurgeryLast3Months from "../../Questions/SurgeryLast3Months";
import AnyHealthProblems from "../../Questions/AnyHealthProblems";
import ACTION_CONSENT_FORM_PAGE_1 from "../../../../../../actions/ConsentForm/LastPageOpened/ACTION_CONSENT_FORM_PAGE_1";
import ACTION_SPLASH_SCREEN_COMPLETE from "../../../../../../actions/SplashScreenComplete/ACTION_SPLASH_SCREEN_COMPLETE";
import ACTION_SPLASH_SCREEN_HALFWAY from "../../../../../../actions/SplashScreenHalfway/ACTION_SPLASH_SCREEN_HALFWAY";
import "../../ConsentForm.css";
import "../../../../../../bootstrap_forms.min.css";

const ConsentFormPage1 = (props) => {
  const dispatch = useDispatch();

  const splashScreenComplete = useSelector(
    (state) => state.splashScreenComplete.splashScreenComplete
  );
  const splashScreenHalfway = useSelector(
    (state) => state.splashScreenHalfway.splashScreenHalfway
  );
  const userAuthenticated = useSelector(
    (state) => state.userAuthenticated.user_authenticated
  );

  const surgeryLast3MonthsNo = useSelector(
    (state) => state.surgeryLast3MonthsNo.surgery_last_3_months_no_active
  );
  const surgeryLast3MonthsYes = useSelector(
    (state) => state.surgeryLast3MonthsYes.surgery_last_3_months_yes_active
  );
  const anyHealthProblemsNo = useSelector(
    (state) => state.anyHealthProblemsNo.any_health_problems_no_active
  );
  const anyHealthProblemsYes = useSelector(
    (state) => state.anyHealthProblemsYes.any_health_problems_yes_active
  );
  const guestConsentFormAccessToken = useSelector(
    (state) => state.guestConsentFormAccessToken.access_token
  );

  useEffect(() => {
    if (!splashScreenComplete) {
      dispatch(ACTION_SPLASH_SCREEN_COMPLETE());
    }
    if (!splashScreenHalfway) {
      dispatch(ACTION_SPLASH_SCREEN_HALFWAY());
    }
  }, [dispatch, splashScreenComplete, splashScreenHalfway]);

  const redirectToLogInPage = () => {
    if (!userAuthenticated && !guestConsentFormAccessToken) {
      setTimeout(() => {
        return <Redirect to="/account/login" />;
      }, 1000);
    }
  };

  useEffect(() => {
    dispatch(ACTION_CONSENT_FORM_PAGE_1());
  }, [dispatch]);

  return (
    <div className="client_consent_form_container">
      {redirectToLogInPage()}
      <div className="client_consent_form_header">
        {guestConsentFormAccessToken ? null : (
          <Link to="/account/clientprofile">
            <FontAwesomeIcon
              className="client_consent_form_header_back_arrow"
              icon={faChevronLeft}
            />
          </Link>
        )}
        <h1>CONSENT FORM</h1>
      </div>
      <SurgeryLast3Months
        currentScreenSize={props.currentScreenSize}
        initialScreenSize={props.initialScreenSize}
      />
      <AnyHealthProblems
        currentScreenSize={props.currentScreenSize}
        initialScreenSize={props.initialScreenSize}
      />
      
    </div>
  );
};

export default ConsentFormPage1;
