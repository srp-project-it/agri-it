import React, { useRef, useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  faHome,
  faFileSignature,
  faCamera,
  faQuestion,
  faPencilAlt,
  faSpa,
  faSignOutAlt,
  faUserCircle,
  faCalendarAlt,
  faHistory,
  faCommentDots,
  faFileDownload,
  faFilePdf,
  faUsers,
  faBriefcase,
  faCalendarWeek,
  faBell,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CanvasDraw from "react-canvas-draw";
import LZString from "lz-string";
import moment from "moment";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ConsentFormPDF from "../clientprofile/ConsentForm/ConsentFormPDF";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/css";
import ACTION_LOG_OUT_CLICKED from "../../../actions/LogOut/ACTION_LOG_OUT_CLICKED";
import ACTION_CART_IS_NOT_ACTIVE from "../../../actions/CartIsActive/ACTION_CART_IS_NOT_ACTIVE";
import ACTION_PDF_LOADING_RESET from "../../../actions/PDFLoading/ACTION_PDF_LOADING_RESET";
import ACTION_PDF_LOADING from "../../../actions/PDFLoading/ACTION_PDF_LOADING";
import ACTION_NAVBAR_TOGGLE_RESET from "../../../actions/Nav/ACTION_NAVBAR_TOGGLE_RESET";
import ACTION_BODY_SCROLL_ALLOW from "../../../actions/Body_Scroll/ACTION_BODY_SCROLL_ALLOW";
import "./LargeScreenSideMenu.css";
import "../../../components/treatments/card_styling.css";

const override = css`
  display: block;
  position: absolute;
  left: 25%;
  right: 25%;
`;

const LargeScreenSideMenu = React.forwardRef((props, ref) => {
  const { LandingPageRef } = ref;

  const {
    getClientData,
    getEmployeeData,
    handleClickToScrollToHome,
    initialScreenSize,
    currentScreenSize,
    resetNotifications,
  } = props;

  const dispatch = useDispatch();
  const location = useLocation();
  const signature = useRef(null);
  const pdfDownloadRef = useRef(null);

  const cartIsActive = useSelector((state) => state.cartIsActive.cartIsActive);
  const logoutClicked = useSelector(
    (state) => state.logoutClicked.log_out_clicked
  );
  const consentFormLastPageOpened = useSelector(
    (state) => state.consentFormLastPageOpened.consent_form_active_page
  );
  const userAuthenticated = useSelector(
    (state) => state.userAuthenticated.user_authenticated
  );
  const finalBookButtonActive = useSelector(
    (state) => state.finalBookButton.final_book_button_active
  );
  const adminAuthenticated = useSelector(
    (state) => state.adminAuthenticated.admin_authenticated
  );
  const guestConsentFormAccessToken = useSelector(
    (state) => state.guestConsentFormAccessToken.access_token
  );
  const cancelAppointmentClicked = useSelector(
    (state) => state.cancelAppointmentClicked.cancelAppointmentClicked
  );
  const pdfLoading = useSelector((state) => state.pdfLoading.pdf_loading);
  const addProfilePhotoClicked = useSelector(
    (state) => state.addProfilePhotoClicked.add_profile_photo_clicked
  );
  const imageLoading = useSelector((state) => state.imageLoading.image_loading);

  const [pdfSpinnerActive, changePDFSpinnerActive] = useState(false);

  const adminNotifications = useSelector(
    (state) => state.adminNotifications.notifications
  );

  useEffect(() => {
    return () => {
      if (pdfLoading) {
        dispatch(ACTION_PDF_LOADING_RESET());
      }
    };
  }, [pdfLoading, dispatch]);

  const loadingCompleted = useCallback(() => {
    changePDFSpinnerActive(true);
    if (!pdfLoading) {
      dispatch(ACTION_PDF_LOADING());
    } else {
      return null;
    }
  }, [pdfLoading, dispatch]);

  const handlePDFDownloadClick = useEffect(() => {
    if (pdfSpinnerActive) {
      const loadingSpinnerDuration = setTimeout(() => {
        changePDFSpinnerActive(false);
        if (pdfDownloadRef) {
          if (pdfDownloadRef.current) {
            pdfDownloadRef.current.click();
          }
        }
        dispatch(ACTION_PDF_LOADING_RESET());
      }, 3000);
      return () => {
        clearTimeout(loadingSpinnerDuration);
      };
    }
  }, [pdfSpinnerActive, dispatch]);

  const handleAdminResetNotifications = () => {
    if (adminNotifications) {
      if (adminNotifications.length > 0) {
        if (
          adminNotifications.filter((notification) => notification.new === true)
            .length > 0
        ) {
          resetNotifications();
        }
      }
    }
  };

  const consentFormOnFile = (item) => {
    return (
      <div
        className="large_screen_side_menu_item_container"
        onClick={() => loadingCompleted()}
      >
        <div className="large_screen_side_menu_item">
          <FontAwesomeIcon
            className="large_screen_side_menu_item_icon"
            icon={faFileDownload}
            style={{
              color: "rgba(0, 129, 177, 0.9)",
            }}
          />
          <h2
            style={{
              color: "rgba(0, 129, 177, 0.9)",
            }}
          >
            Download Latest Consent Form
          </h2>
          <p style={{ display: pdfLoading ? "none" : "block" }}>
            {"(" +
              moment.unix(item.consentForm.createdAt / 1000).format("l") +
              ")"}
          </p>
        </div>
      </div>
    );
  };

  const noConsentFormOnFile = () => {
    return (
      <div className="large_screen_side_menu_item_container">
        <FontAwesomeIcon
          className="large_screen_side_menu_item_icon"
          icon={faFilePdf}
          style={{
            color: "rgba(177, 48, 0, 0.9)",
          }}
        />
        <h2
          style={{
            color: "rgba(177, 48, 0, 0.9)",
          }}
        >
          No Consent Form on File
        </h2>
      </div>
    );
  };

  const renderDownloadConsentFormButton = () => {
    if (getClientData) {
      if (getClientData.client) {
        if (getClientData.client.consentForm) {
          if (getClientData.client.consentForm.date) {
            return (
              <>
                {pdfLoading ? (
                  <PDFDownloadLink
                    document={
                      getClientData ? (
                        <ConsentFormPDF
                          getClientData={{
                            client: getClientData.client,
                          }}
                          signature={
                            signature
                              ? signature.current
                                ? signature.current.canvasContainer.children[1].toDataURL()
                                : null
                              : null
                          }
                          consentFormLastUpdated={moment
                            .unix(
                              getClientData.client.consentForm.createdAt / 1000
                            )
                            .format("l")}
                          onClick={handlePDFDownloadClick}
                        />
                      ) : null
                    }
                    fileName={
                      getClientData.client.firstName[0].toUpperCase() +
                      getClientData.client.firstName.slice(1).toLowerCase() +
                      "_" +
                      getClientData.client.lastName[0].toUpperCase() +
                      getClientData.client.lastName.slice(1).toLowerCase() +
                      "_" +
                      "Glow_Labs_Consent_Form.pdf"
                    }
                    className="large_screen_side_menu_pdf_container"
                  >
                    <div
                      className="large_screen_side_menu_item_container"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                      }}
                      ref={pdfDownloadRef}
                    >
                      <ClipLoader
                        size={32}
                        css={override}
                        color={"rgb(44, 44, 52)"}
                        loading={pdfLoading}
                      />
                    </div>
                  </PDFDownloadLink>
                ) : (
                  consentFormOnFile(getClientData.client)
                )}
              </>
            );
          } else {
            if (!adminAuthenticated) {
              return noConsentFormOnFile();
            }
          }
        } else {
          if (!adminAuthenticated) {
            return noConsentFormOnFile();
          }
        }
      } else {
        if (!adminAuthenticated) {
          return noConsentFormOnFile();
        }
      }
    } else {
      if (!adminAuthenticated) {
        return noConsentFormOnFile();
      }
    }
  };

  const navMenuScrollToHome = () => {
    dispatch(ACTION_NAVBAR_TOGGLE_RESET());
    dispatch(ACTION_BODY_SCROLL_ALLOW());
    dispatch(ACTION_CART_IS_NOT_ACTIVE());

    setTimeout(() => {
      handleClickToScrollToHome(LandingPageRef);
    }, 300);

    document.body.classList.remove("no_scroll");
    document.body.style.setProperty("overflow", "scroll");
  };

  return (
    <div
      className="large_sceen_logged_in_side_menu"
      style={{
        filter: cartIsActive
          ? "blur(8px) brightness(70%)"
          : logoutClicked ||
            finalBookButtonActive ||
            cancelAppointmentClicked ||
            addProfilePhotoClicked ||
            imageLoading
          ? "blur(5px) brightness(50%)"
          : "none",
        pointerEvents:
          cartIsActive ||
          logoutClicked ||
          finalBookButtonActive ||
          cancelAppointmentClicked ||
          addProfilePhotoClicked ||
          imageLoading
            ? "none"
            : "auto",
        display:
          (userAuthenticated && location.pathname.includes("account")) ||
          (adminAuthenticated && location.pathname.includes("admin")) ||
          (guestConsentFormAccessToken &&
            location.pathname.includes("consentform"))
            ? !currentScreenSize
              ? initialScreenSize >= 1200
                ? "flex"
                : "none"
              : currentScreenSize >= 1200
              ? "flex"
              : "none"
            : "none",
      }}
    >
      <CanvasDraw
        className="consent_form_signature"
        saveData={
          getClientData
            ? getClientData.client
              ? getClientData.client.consentForm.consentFormSignature
                ? LZString.decompressFromEncodedURIComponent(
                    getClientData.client.consentForm.consentFormSignature
                  )
                  ? LZString.decompressFromEncodedURIComponent(
                      getClientData.client.consentForm.consentFormSignature
                    ).toString()
                  : ""
                : ""
              : ""
            : ""
        }
        hideGrid={true}
        hideInterface={true}
        disabled
        canvasHeight="100%"
        canvasWidth="100%"
        immediateLoading={true}
        ref={signature ? signature : null}
        style={{ display: "none" }}
      />
      <div className="large_screen_side_menu_item_container">
        <div className="large_screen_account_nav_logo_container">
          <a className="large_screen_account_nav_logo" href="/">
            <img src="" />
          </a>
        </div>
      </div>
      <div className="large_screen_side_menu_profile_container">
        <div className="large_screen_side_menu_profile_client_avatar_container">
          {getClientData ? (
            getClientData.client ? (
              getClientData.client.profilePicture ? (
                <img
                  className="large_screen_side_menu_profile_client_photo_avatar"
                  src={LZString.decompressFromEncodedURIComponent(
                    getClientData.client.profilePicture
                  )}
                  alt={
                    getClientData.client.firstName[0].toUpperCase() +
                    getClientData.client.firstName.slice(1).toLowerCase() +
                    " " +
                    getClientData.client.lastName[0].toUpperCase() +
                    getClientData.client.lastName.slice(1).toLowerCase() +
                    " Profile Picture"
                  }
                />
              ) : (
                <FontAwesomeIcon
                  className="large_screen_side_menu_profile_client_avatar"
                  icon={faUserCircle}
                />
              )
            ) : (
              <FontAwesomeIcon
                className="large_screen_side_menu_profile_client_avatar"
                icon={faUserCircle}
              />
            )
          ) : getEmployeeData ? (
            getEmployeeData.employee ? (
              getEmployeeData.employee.profilePicture ? (
                <img
                  className="large_screen_side_menu_profile_client_photo_avatar"
                  src={LZString.decompressFromEncodedURIComponent(
                    getEmployeeData.employee.profilePicture
                  )}
                  alt={
                    getEmployeeData.employee.firstName[0].toUpperCase() +
                    getEmployeeData.employee.firstName.slice(1).toLowerCase() +
                    " " +
                    getEmployeeData.employee.lastName[0].toUpperCase() +
                    getEmployeeData.employee.lastName.slice(1).toLowerCase() +
                    " Profile Picture"
                  }
                />
              ) : (
                <FontAwesomeIcon
                  className="large_screen_side_menu_profile_client_avatar"
                  icon={faUserCircle}
                />
              )
            ) : (
              <FontAwesomeIcon
                className="large_screen_side_menu_profile_client_avatar"
                icon={faUserCircle}
              />
            )
          ) : (
            <FontAwesomeIcon
              className="large_screen_side_menu_profile_client_avatar"
              icon={faUserCircle}
            />
          )}
        </div>
        <div className="large_screen_side_menu_profile_contact_information_container">
          <div className="large_screen_side_menu_profile_name_container">
            <p>
              {getEmployeeData
                ? getEmployeeData.employee
                  ? getEmployeeData.employee.firstName
                    ? getEmployeeData.employee.firstName
                    : null
                  : null
                : null}{" "}
              {getEmployeeData
                ? getEmployeeData.employee
                  ? getEmployeeData.employee.lastName
                    ? getEmployeeData.employee.lastName
                    : null
                  : null
                : null}
              {getClientData
                ? getClientData.client
                  ? getClientData.client.firstName
                    ? getClientData.client.firstName
                    : null
                  : null
                : null}{" "}
              {getClientData
                ? getClientData.client
                  ? getClientData.client.lastName
                    ? getClientData.client.lastName
                    : null
                  : null
                : null}
            </p>
          </div>
          <div className="large_screen_side_menu_profile_membership_type_container">
            <p>Membership Type</p>
            <p>
              {getClientData
                ? "Default"
                : getEmployeeData
                ? getEmployeeData.employee
                  ? getEmployeeData.employee.employeeRole.includes("Admin")
                    ? "Admin"
                    : "Staff"
                  : "Staff"
                : "Staff"}
            </p>
          </div>
        </div>
        <div className="large_screen_side_menu_profile_email_and_phone_container">
          <div className="large_screen_side_menu_profile_email_container">
            <h2>Email Address</h2>
            <p>
              {getEmployeeData
                ? getEmployeeData.employee
                  ? getEmployeeData.employee.email
                  : null
                : null}
              {getClientData
                ? getClientData.client
                  ? getClientData.client.email
                  : null
                : null}
            </p>
          </div>
          <div className="large_screen_side_menu_profile_phone_number_container">
            <h2>Phone Number</h2>
            <p>
              {getEmployeeData
                ? getEmployeeData.employee
                  ? getEmployeeData.employee.phoneNumber
                  : null
                : null}
              {getClientData
                ? getClientData.client
                  ? getClientData.client.phoneNumber
                  : null
                : null}
            </p>
          </div>
        </div>
      </div>
      {guestConsentFormAccessToken ? null : (
        <div className="large_screen_side_menu_all_items_container">
          <div className="large_screen_side_menu_underline_separator" />
          <div className="large_screen_side_menu_item_container">
            <div
              className="large_screen_side_menu_item"
              onClick={navMenuScrollToHome}
            >
              <FontAwesomeIcon
                icon={faHome}
                className="large_screen_side_menu_item_icon"
              />
              <h2>Home</h2>
            </div>
          </div>
          {getEmployeeData ? (
            <div className="large_screen_side_menu_item_container">
              <Link
                className="large_screen_side_menu_item"
                to="/admin/activity"
              >
                <div
                  className="large_screen_side_menu_item_selected_border"
                  style={{
                    opacity: location.pathname.includes("activity") ? 1 : 0,
                  }}
                />
                <FontAwesomeIcon
                  icon={faBell}
                  className="large_screen_side_menu_item_icon"
                />
                <h2>Activity</h2>
                {adminNotifications ? (
                  adminNotifications.length > 0 ? (
                    adminNotifications.filter(
                      (notification) => notification.new === true
                    ).length > 0 ? (
                      <span className="fa-layers fa-fw">
                        <FontAwesomeIcon
                          className="menu_notifications_circle_counter"
                          icon={faCircle}
                        />
                        <p>
                          {adminNotifications.filter(
                            (notification) => notification.new === true
                          ).length < 10
                            ? adminNotifications.filter(
                                (notification) => notification.new === true
                              ).length
                            : "9+"}
                        </p>
                      </span>
                    ) : null
                  ) : null
                ) : null}
              </Link>
            </div>
          ) : null}
          {getEmployeeData ? (
            <div
              className="large_screen_side_menu_item_container"
              onClick={handleAdminResetNotifications}
            >
              <Link className="large_screen_side_menu_item" to="/admin/clients">
                <div
                  className="large_screen_side_menu_item_selected_border"
                  style={{
                    opacity: location.pathname.includes("/admin/clients")
                      ? 1
                      : 0,
                  }}
                />
                <FontAwesomeIcon
                  icon={faUsers}
                  className="large_screen_side_menu_item_icon"
                />
                <h2>Clients</h2>
              </Link>
            </div>
          ) : (
            <div className="large_screen_side_menu_item_container">
              <Link
                className="large_screen_side_menu_item"
                to="/account/clientprofile/upcomingappointments"
              >
                <div
                  className="large_screen_side_menu_item_selected_border"
                  style={{
                    opacity: location.pathname.includes("upcomingappointments")
                      ? 1
                      : 0,
                  }}
                />
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="large_screen_side_menu_item_icon"
                />
                <h2>Upcoming Appointments</h2>
              </Link>
            </div>
          )}{" "}
          {getEmployeeData ? (
            <div
              className="large_screen_side_menu_item_container"
              onClick={handleAdminResetNotifications}
            >
              <Link className="large_screen_side_menu_item" to="/admin/staff">
                <div
                  className="large_screen_side_menu_item_selected_border"
                  style={{
                    opacity: location.pathname.includes("staff") ? 1 : 0,
                  }}
                />
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="large_screen_side_menu_item_icon"
                />
                <h2>Staff</h2>
              </Link>
            </div>
          ) : (
            <div className="large_screen_side_menu_item_container">
              <Link
                className="large_screen_side_menu_item"
                to="/account/clientprofile/pastappointments"
              >
                <div
                  className="large_screen_side_menu_item_selected_border"
                  style={{
                    opacity: location.pathname.includes("pastappointments")
                      ? 1
                      : 0,
                  }}
                />
                <FontAwesomeIcon
                  icon={faHistory}
                  className="large_screen_side_menu_item_icon"
                />
                <h2>Past Appointments</h2>
              </Link>
            </div>
          )}{" "}
          {getEmployeeData ? (
            <>
              <div
                className="large_screen_side_menu_item_container"
                onClick={handleAdminResetNotifications}
              >
                <Link
                  className="large_screen_side_menu_item"
                  to="/admin/schedule"
                >
                  <div
                    className="large_screen_side_menu_item_selected_border"
                    style={{
                      opacity:
                        location.pathname.includes("schedule") &&
                        !location.pathname.includes("saltcave")
                          ? 1
                          : 0,
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faCalendarWeek}
                    className="large_screen_side_menu_item_icon"
                  />
                  <h2>Schedule</h2>
                </Link>
              </div>
              <div className="large_screen_side_menu_underline_separator" />
            </>
          ) : (
            <div className="large_screen_side_menu_item_container">
              <Link
                className="large_screen_side_menu_item"
                to={`/account/clientprofile/consentform/${consentFormLastPageOpened}`}
              >
                <div
                  className="large_screen_side_menu_item_selected_border"
                  style={{
                    opacity: location.pathname.includes("consentform") ? 1 : 0,
                  }}
                />
                <FontAwesomeIcon
                  icon={faFileSignature}
                  className="large_screen_side_menu_item_icon"
                />
                <h2>Consent Form</h2>
              </Link>
            </div>
          )}
          {renderDownloadConsentFormButton()}
          {getEmployeeData ? null : (
            <div className="large_screen_side_menu_extras_section">
              <div className="large_screen_side_menu_underline_separator" />
              <div className="large_screen_side_menu_item_container">
                <Link
                  className="large_screen_side_menu_item"
                  to="/"
                  onClick={() => dispatch(ACTION_BODY_SCROLL_ALLOW())}
                >
                  <FontAwesomeIcon
                    icon={faSpa}
                    className="large_screen_side_menu_item_icon"
                  />
                  <h2>My Skin Care Routine</h2>
                </Link>
              </div>{" "}
              <div className="large_screen_side_menu_item_container">
                <Link
                  className="large_screen_side_menu_item"
                  to="/"
                  onClick={() => dispatch(ACTION_BODY_SCROLL_ALLOW())}
                >
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="large_screen_side_menu_item_icon"
                  />
                  <h2>Recommended Skin Care Routine</h2>
                </Link>
              </div>
              <div className="large_screen_side_menu_item_container">
                <Link
                  className="large_screen_side_menu_item"
                  to="/"
                  onClick={() => dispatch(ACTION_BODY_SCROLL_ALLOW())}
                >
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="large_screen_side_menu_item_icon"
                  />
                  <h2>Quizzes</h2>
                </Link>
              </div>
              <div className="large_screen_side_menu_item_container">
                <Link
                  className="large_screen_side_menu_item"
                  to="/"
                  onClick={() => dispatch(ACTION_BODY_SCROLL_ALLOW())}
                >
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className="large_screen_side_menu_item_icon"
                  />
                  <h2>FAQ</h2>
                </Link>
              </div>
              <div className="large_screen_side_menu_item_container">
                <Link
                  className="large_screen_side_menu_item"
                  to="/"
                  onClick={() => dispatch(ACTION_BODY_SCROLL_ALLOW())}
                >
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="large_screen_side_menu_item_icon"
                  />
                  <h2>Before / After Photos</h2>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      {guestConsentFormAccessToken ? null : (
        <div className="large_screen_side_menu_item_container large_screen_side_menu_log_out">
          <div
            className="large_screen_side_menu_item"
            onClick={() => {
              dispatch(ACTION_LOG_OUT_CLICKED());
              if (cartIsActive) {
                dispatch(ACTION_CART_IS_NOT_ACTIVE());
              }
            }}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="large_screen_side_menu_item_icon"
            />
            <h2>Log Out</h2>
          </div>
        </div>
      )}
      <p className="large_screen_side_menu_copyright">

      </p>
    </div>
  );
});

export default LargeScreenSideMenu;
