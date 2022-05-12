import React, { useEffect, useState } from "react";
import { Redirect, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Modal from "react-modal";
import CreateAccountEmail from "./CreateAccountEmail/CreateAccountEmail";
import CreateAccountPhoneNumber from "./CreateAccountPhoneNumber/CreateAccountPhoneNumber";
import CreateAccountPassword from "./CreateAccountPassword/CreateAccountPassword";
import CreateAccountConfirmPassword from "./CreateAccountConfirmPassword.js/CreateAccountConfirmPassword";
import registerClientMutation from "../../../graphql/mutations/registerClientMutation";
import { useMutation } from "@apollo/react-hooks";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/css";
import ACTION_LOGIN_IS_ACTIVE from "../../../actions/Login/ACTION_LOGIN_IS_ACTIVE";
import ACTION_CREATE_ACCOUNT_FIRST_NAME_RESET from "../../../actions/CreateAccount/CreateAccountFirstName/ACTION_CREATE_ACCOUNT_FIRST_NAME_RESET";
import ACTION_CREATE_ACCOUNT_FIRST_NAME from "../../../actions/CreateAccount/CreateAccountFirstName/ACTION_CREATE_ACCOUNT_FIRST_NAME";
import ACTION_CREATE_ACCOUNT_LAST_NAME from "../../../actions/CreateAccount/CreateAccountLastName/ACTION_CREATE_ACCOUNT_LAST_NAME";
import ACTION_CREATE_ACCOUNT_LAST_NAME_RESET from "../../../actions/CreateAccount/CreateAccountLastName/ACTION_CREATE_ACCOUNT_LAST_NAME_RESET";
import ACTION_SPLASH_SCREEN_COMPLETE from "../../../actions/SplashScreenComplete/ACTION_SPLASH_SCREEN_COMPLETE";
import ACTION_SPLASH_SCREEN_HALFWAY from "../../../actions/SplashScreenHalfway/ACTION_SPLASH_SCREEN_HALFWAY";
import "./SignUp.css";

const SignUp = (props) => {
  let location = useLocation();
  const dispatch = useDispatch();

  const splashScreenHalfway = useSelector(
    (state) => state.splashScreenHalfway.splashScreenHalfway
  );
  const splashScreenComplete = useSelector(
    (state) => state.splashScreenComplete.splashScreenComplete
  );
  const createAccountFirstName = useSelector(
    (state) => state.createAccountFirstName.create_account_first_name
  );
  const createAccountLastName = useSelector(
    (state) => state.createAccountLastName.create_account_last_name
  );
  const createAccountEmailValid = useSelector(
    (state) => state.createAccountEmailValid.create_account_email_valid
  );
  const createAccountPhoneNumberValid = useSelector(
    (state) =>
      state.createAccountPhoneNumberValid.create_account_phone_number_valid
  );
  const createAccountPasswordValid = useSelector(
    (state) => state.createAccountPasswordValid.create_account_password_valid
  );
  const createAccountConfirmPasswordValid = useSelector(
    (state) =>
      state.createAccountConfirmPasswordValid
        .create_account_confirm_password_valid
  );
  const createAccountEmail = useSelector(
    (state) => state.createAccountEmail.create_account_email
  );
  const createAccountPhoneNumber = useSelector(
    (state) => state.createAccountPhoneNumber.create_account_phone_number
  );
  const createAccountPassword = useSelector(
    (state) => state.createAccountPassword.create_account_password
  );
  const createAccountConfirmPassword = useSelector(
    (state) =>
      state.createAccountConfirmPassword.create_account_confirm_password
  );

  const [
    registerClient,
    { loading: registerClientLoading, data: registerClientData },
  ] = useMutation(registerClientMutation);

  const [
    createAccountStepTwoTriggered,
    changeCreateAccountStepTwoTriggered,
  ] = useState(false);

  const override = css`
    display: block;
    position: absolute;
    left: 25%;
    right: 25%;
  `;

  const redirectToHome = () => {
    if (!splashScreenComplete) {
      return <Redirect to="/" />;
    }
  };

  useEffect(() => {
    if (location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const successfulRegistrationRedirect = () => {
    if (registerClientData) {
      if (!props.currentScreenSize) {
        if (props.initialScreenSize >= 1200) {
          return (
            <Redirect
              to={{
                pathname: "/account/clientprofile/upcomingappointments",
                state: { successful_auth: true },
              }}
            />
          );
        } else {
          return <Redirect to="/account/clientprofile" />;
        }
      } else {
        if (props.currentScreenSize >= 1200) {
          return (
            <Redirect
              to={{
                pathname: "/account/clientprofile/upcomingappointments",
                state: { successful_auth: true },
              }}
            />
          );
        } else {
          return <Redirect to="/account/clientprofile" />;
        }
      }
    }
  };

  useEffect(() => {
    dispatch(ACTION_LOGIN_IS_ACTIVE());
  });

  const handleFirstName = (e) => {
    dispatch(ACTION_CREATE_ACCOUNT_FIRST_NAME(e.currentTarget.value.trim()));
  };

  const firstNameTyping = () => {
    dispatch(ACTION_CREATE_ACCOUNT_FIRST_NAME_RESET());
  };

  const handleLastName = (e) => {
    dispatch(ACTION_CREATE_ACCOUNT_LAST_NAME(e.currentTarget.value.trim()));
  };

  const lastNameTyping = () => {
    dispatch(ACTION_CREATE_ACCOUNT_LAST_NAME_RESET());
  };

  const handleCreateAccountClick = () => {
    registerClient({
      variables: {
        firstName: createAccountFirstName,
        lastName: createAccountLastName,
        email: createAccountEmail,
        phoneNumber: createAccountPhoneNumber,
        password: createAccountPassword,
        confirmPassword: createAccountConfirmPassword,
      },
    });
  };

  useEffect(() => {
    if (!splashScreenComplete) {
      dispatch(ACTION_SPLASH_SCREEN_COMPLETE());
    }
    if (!splashScreenHalfway) {
      dispatch(ACTION_SPLASH_SCREEN_HALFWAY());
    }
  }, [dispatch, splashScreenComplete, splashScreenHalfway]);

  return (
    <div className="sign_up_page_background">
      <Modal
        isOpen={registerClientLoading}
        style={{
          content: {
            position: "fixed",
            zIndex: "10000",
            height: "100%",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            paddingBottom: "10%",
            borderRadius: "none",
            width: "100vw",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <BounceLoader
          size={100}
          css={override}
          color={"rgb(44, 44, 52)"}
          loading={registerClientLoading}
        />
      </Modal>
      <div className="sign_up_page_background_blurry" />
      <div className="sign_up_page_container">
        {redirectToHome()}
        {successfulRegistrationRedirect()}
        <header className="sign_up_logo_container">

        </header>
        <div className="sign_up_section_designator">
          <h2>Create your account</h2>
        </div>
        <Form className="sign_up_form_container">
          {!createAccountStepTwoTriggered ? (
            <>
              <FormGroup className="sign_up_individual_form_field">
                <Label for="firstName">
                  {" "}
                  <div className="top_form_container">
                    <div className="required_label">
                      First Name
                      <p className="required_label red_asterisk">* </p>
                    </div>
                    <div className="required_fields_container">
                      <p className="red_asterisk">* </p>{" "}
                      <p className="required_fields_statement sign_up_required_fields">
                        {" "}
                        Required Fields
                      </p>
                    </div>
                  </div>
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  defaultValue={createAccountFirstName}
                  maxLength={50}
                  onBlur={handleFirstName}
                  onChange={firstNameTyping}
                  valid={createAccountFirstName === "" ? false : true}
                  placeholder="First name"
                  className="input_field_sign_up"
                />
              </FormGroup>
              <FormGroup className="sign_up_individual_form_field">
                <Label for="lastName">
                  <div className="required_label">
                    Last Name<p className="required_label red_asterisk">* </p>
                  </div>
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  maxLength={50}
                  placeholder="Last name"
                  className="input_field_sign_up"
                  defaultValue={createAccountLastName}
                  onChange={lastNameTyping}
                  onBlur={handleLastName}
                  valid={createAccountLastName === "" ? false : true}
                />
              </FormGroup>
              <CreateAccountEmail />
              <CreateAccountPhoneNumber
                changeCreateAccountStepTwoTriggered={
                  changeCreateAccountStepTwoTriggered
                }
              />{" "}
            </>
          ) : (
            <div className="sign_up_password_form_container">
              <CreateAccountPassword />
              <CreateAccountConfirmPassword />{" "}
            </div>
          )}
        </Form>
        <div className="sign_up_bottom_buttons_container">
          {createAccountStepTwoTriggered ? (
            <div
              className="create_account_button"
              style={{
                background:
                  createAccountPasswordValid &&
                  createAccountConfirmPasswordValid
                    ? "rgb(44, 44, 52)"
                    : "#f0f0f0",
                color:
                  createAccountPasswordValid &&
                  createAccountConfirmPasswordValid
                    ? "rgb(255, 255, 255)"
                    : "rgb(201, 201, 201)",
                transition: "background 0.5s ease, color 0.5s ease",
                pointerEvents:
                  createAccountPasswordValid &&
                  createAccountConfirmPasswordValid
                    ? "auto"
                    : "none",
              }}
              onClick={() => handleCreateAccountClick()}
            >
              <p>Create Account</p>
            </div>
          ) : (
            <div
              className="create_account_button"
              style={{
                background:
                  createAccountFirstName &&
                  createAccountLastName &&
                  createAccountEmailValid &&
                  createAccountPhoneNumberValid
                    ? "rgb(44, 44, 52)"
                    : "#f0f0f0",
                color:
                  createAccountFirstName &&
                  createAccountLastName &&
                  createAccountEmailValid &&
                  createAccountPhoneNumberValid
                    ? "rgb(255, 255, 255)"
                    : "rgb(201, 201, 201)",
                transition: "background 0.5s ease, color 0.5s ease",
                pointerEvents:
                  createAccountFirstName &&
                  createAccountLastName &&
                  createAccountEmailValid &&
                  createAccountPhoneNumberValid
                    ? "auto"
                    : "none",
              }}
              onClick={() => changeCreateAccountStepTwoTriggered(true)}
            >
              <p>Next Step</p>
            </div>
          )}
          {createAccountStepTwoTriggered ? (
            <div
              className="login_redirect_button"
              onClick={() => changeCreateAccountStepTwoTriggered(false)}
            >
              <p>Change Contact Details</p>
            </div>
          ) : (
            <>
              <p className="already_have_an_account_question">
                Already have an account?
              </p>
              <Link to="/account/login" className="login_redirect_button">
                <p>Log In</p>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="sign_up_page_descriptive_text">
      <h2>An Srp project</h2>
        <h2></h2>
        <ul>
          <li>Keep track of upcoming appointments</li>
          <li>Review past appointments</li>
          <li>Manage consent form information</li>
          <li>Consent Forms</li>
        </ul>
      </div>
    </div>
  );
};

export default SignUp;
