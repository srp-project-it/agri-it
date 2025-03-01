import React, { useState, useEffect, useMemo, useRef } from "react";
import { GrCart } from "react-icons/gr";
import { FaCircle, FaUser } from "react-icons/fa";
import { FcHome, FcPlus, FcAbout, FcLike, FcPaid } from "react-icons/fc";
import { toast } from "react-toastify";
import BurgerMenu from "./Burger/BurgerMenuComponent";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useQuery } from "@apollo/react-hooks";
import getEmployeeQuery from "../../graphql/queries/getEmployeeQuery";
import getClientQuery from "../../graphql/queries/getClientQuery";
import Menu from "react-burger-menu/lib/menus/slide";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import {
  faMapMarkerAlt,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import ACTION_LOG_OUT_CLICKED from "../../actions/LogOut/ACTION_LOG_OUT_CLICKED";
import ACTION_CART_IS_NOT_ACTIVE from "../../actions/CartIsActive/ACTION_CART_IS_NOT_ACTIVE";
import ACTION_CART_IS_ACTIVE from "../../actions/CartIsActive/ACTION_CART_IS_ACTIVE";
import ACTION_CART_PAGE_OPENED from "../../actions/InCart/CartPageOpened/ACTION_CART_PAGE_OPENED";
import ACTION_LOGIN_IS_ACTIVE from "../../actions/Login/ACTION_LOGIN_IS_ACTIVE";
import ACTION_NAVBAR_TOGGLE_RESET from "../../actions/Nav/ACTION_NAVBAR_TOGGLE_RESET";
import ACTION_BODY_SCROLL_ALLOW from "../../actions/Body_Scroll/ACTION_BODY_SCROLL_ALLOW";
import ACTION_BODY_SCROLL_RESET from "../../actions/Body_Scroll/ACTION_BODY_SCROLL_RESET";
import "./NavigationBar.css";
import "./ResponsiveNavigationBar.css";
import "../landing_page/LandingPage.css";

const ResponsiveNavigationBar = React.forwardRef((props, ref) => {
  const {
    LandingPageRef,
    Treatments1Ref,
    AddOnsRef,
    InstagramRef,
    ContactRef,
  } = ref;

  const Nav_Ref = useRef(null);

  const location = useLocation();
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counterReducer.counter);
  const loginIsActive = useSelector(
    (state) => state.loginIsActive.login_is_active
  );
  const userAuthenticated = useSelector(
    (state) => state.userAuthenticated.user_authenticated
  );
  const logoutClicked = useSelector(
    (state) => state.logoutClicked.log_out_clicked
  );
  const cancelAppointmentClicked = useSelector(
    (state) => state.cancelAppointmentClicked.cancelAppointmentClicked
  );
  const imageLoading = useSelector((state) => state.imageLoading.image_loading);
  const dummyToken = useSelector((state) => state.dummyToken.dummy_token);
  const cartIsActive = useSelector((state) => state.cartIsActive.cartIsActive);
  const cartPageOpened = useSelector(
    (state) => state.cartPageOpened.cart_page_opened
  );
  const addProfilePhotoClicked = useSelector(
    (state) => state.addProfilePhotoClicked.add_profile_photo_clicked
  );
  const splashScreenHalfway = useSelector(
    (state) => state.splashScreenHalfway.splashScreenHalfway
  );

  const navbarToggle = useSelector((state) => state.navbarToggle.toggle);

  const [homeClicked, changeHomeClicked] = useState(false);

  const { data } = useQuery(getClientQuery, {
    fetchPolicy: "no-cache",
    variables: {
      _id: dummyToken ? dummyToken.id : null,
    },
  });

  const { data: getEmployeeData } = useQuery(getEmployeeQuery, {
    fetchPolicy: "no-cache",
    variables: {
      _id: props.adminDummyToken ? props.adminDummyToken.id : null,
    },
  });

  const changeNavBarColor = () => {
    if (props.currentScreenSize === "") {
      if (
        props.initialScreenSize >= 600 &&
        props.initialScreenSize > props.initialScreenHeight
      ) {
        if (
          cartIsActive ||
          location.pathname.includes("account") ||
          location.pathname.includes("admin") ||
          location.pathname.includes("privacy") ||
          location.pathname.includes("termsandconditions")
        ) {
          return "rgb(44,44,52)";
        } else {
          if (navbarToggle) {
            return "rgb(44,44,52)";
          } else {
            if (props.scrollValue > 5) {
              return "rgb(44,44,52)";
            } else {
              return "linear-gradient(to right, rgb(251, 251, 251) 0%, rgb(251, 251, 251) 50%, rgb(224, 224, 232) 50.05%, rgb(224, 224, 232) 100%)";
            }
          }
        }
      } else {
        return "rgb(44,44,52)";
      }
    } else {
      if (
        props.currentScreenSize >= 600 &&
        props.currentScreenSize > props.currentScreenHeight
      ) {
        if (
          cartIsActive ||
          location.pathname.includes("account") ||
          location.pathname.includes("admin") ||
          location.pathname.includes("privacy") ||
          location.pathname.includes("termsandconditions")
        ) {
          return "rgb(44,44,52)";
        } else {
          if (navbarToggle) {
            return "rgb(44,44,52)";
          } else {
            if (props.scrollValue > 5) {
              return "rgb(44,44,52)";
            } else {
              return "linear-gradient(to right, rgb(251, 251, 251) 0%, rgb(251, 251, 251) 50%, rgb(224, 224, 232) 50.05%, rgb(224, 224, 232) 100%)";
            }
          }
        }
      } else {
        return "rgb(44,44,52)";
      }
    }
  };

  const cartActivated = () => {
    dispatch(ACTION_CART_IS_ACTIVE());
    document.body.style.setProperty("background", "rgb(255, 255, 255)");
    toast.dismiss();
  };

  const cartDeactivated = () => {
    dispatch(ACTION_CART_IS_NOT_ACTIVE());
  };

  const handleShoppingCartClick = () => {
    if (props.currentScreenSize === "") {
      if (props.initialScreenSize >= 1200) {
        if (cartIsActive) {
          cartDeactivated();
        } else {
          cartActivated();
          if (!cartPageOpened) {
            dispatch(ACTION_CART_PAGE_OPENED());
          }
        }
      } else {
        cartActivated();
        if (!cartPageOpened) {
          dispatch(ACTION_CART_PAGE_OPENED());
        }
      }
    } else {
      if (props.currentScreenSize >= 1200) {
        if (cartIsActive) {
          cartDeactivated();
        } else {
          cartActivated();
          if (!cartPageOpened) {
            dispatch(ACTION_CART_PAGE_OPENED());
          }
        }
      } else {
        cartActivated();
        if (!cartPageOpened) {
          dispatch(ACTION_CART_PAGE_OPENED());
        }
      }
    }
  };

  const handleLogoutClicked = () => {
    toast.dismiss();

    if (
      !location.pathname.includes("/account/clientprofile") &&
      !location.pathname.includes("/admin")
    ) {
      dispatch(ACTION_LOGIN_IS_ACTIVE());
      if (cartIsActive) {
        dispatch(ACTION_CART_IS_NOT_ACTIVE());
      }
    } else {
      dispatch(ACTION_LOG_OUT_CLICKED());
    }
  };

  const clientNavbarCircleRender = () => {
    if (data) {
      if (data.client !== null) {
        if (dummyToken) {
          if (dummyToken.picture) {
            return (
              <img
                className="nav_bar_profile_picture_thumbnail"
                src={`${dummyToken.picture}`}
                alt="facebook_profile_picture"
              />
            );
          } else {
            return (
              data.client.firstName[0].toUpperCase() +
              data.client.lastName[0].toUpperCase()
            );
          }
        } else {
          return (
            data.client.firstName[0].toUpperCase() +
            data.client.lastName[0].toUpperCase()
          );
        }
      } else {
        return "";
      }
    } else {
      if (dummyToken) {
        if (dummyToken.picture) {
          return (
            <img
              className="nav_bar_profile_picture_thumbnail"
              src={`${dummyToken.picture}`}
              alt="facebook_profile_picture"
            />
          );
        } else {
          if (data) {
            if (data.client) {
              if (data.client.firstName[0]) {
                if (data.client.lastName[0]) {
                  return (
                    data.client.firstName[0].toUpperCase() +
                    data.client.lastName[0].toUpperCase()
                  );
                } else {
                  return data.client.firstName[0].toUpperCase();
                }
              }
            }
          }
        }
      } else {
        return "";
      }
    }
  };

  useEffect(() => {
    const burgerMenuIcon = document.getElementsByClassName("nav_burger_menu");
    const burgerMenuIconPath = burgerMenuIcon[0].getElementsByTagName("path");

    if (burgerMenuIconPath.length > 0) {
      if (burgerMenuIcon.length > 0) {
        if (navbarToggle) {
          burgerMenuIcon[0].firstChild.classList.remove(
            "navbar_cart_icon_dark"
          );
          burgerMenuIcon[0].firstChild.classList.add("navbar_cart_icon_light");

          burgerMenuIconPath[0].classList.remove("navbar_cart_icon_path_dark");
          burgerMenuIconPath[0].classList.add("navbar_cart_icon_path_light");
        } else {
          if (props.currentScreenSize === "") {
            if (
              props.initialScreenSize >= 768 &&
              props.initialScreenSize > props.initialScreenHeight
            ) {
              if (props.scrollValue <= 5) {
                if (
                  cartIsActive ||
                  location.pathname.includes("account") ||
                  location.pathname.includes("admin") ||
                  location.pathname.includes("privacy") ||
                  location.pathname.includes("termsandconditions")
                ) {
                  burgerMenuIcon[0].firstChild.classList.remove(
                    "navbar_cart_icon_dark"
                  );
                  burgerMenuIcon[0].firstChild.classList.add(
                    "navbar_cart_icon_light"
                  );

                  burgerMenuIconPath[0].classList.remove(
                    "navbar_cart_icon_path_dark"
                  );
                  burgerMenuIconPath[0].classList.add(
                    "navbar_cart_icon_path_light"
                  );
                } else {
                  burgerMenuIcon[0].firstChild.classList.remove(
                    "navbar_cart_icon_light"
                  );
                  burgerMenuIcon[0].firstChild.classList.add(
                    "navbar_cart_icon_dark"
                  );

                  burgerMenuIconPath[0].classList.remove(
                    "navbar_cart_icon_path_light"
                  );
                  burgerMenuIconPath[0].classList.add(
                    "navbar_cart_icon_path_dark"
                  );
                }
              } else {
                burgerMenuIcon[0].firstChild.classList.remove(
                  "navbar_cart_icon_dark"
                );
                burgerMenuIcon[0].firstChild.classList.add(
                  "navbar_cart_icon_light"
                );

                burgerMenuIconPath[0].classList.remove(
                  "navbar_cart_icon_path_dark"
                );
                burgerMenuIconPath[0].classList.add(
                  "navbar_cart_icon_path_light"
                );
              }
            } else {
              burgerMenuIcon[0].firstChild.classList.remove(
                "navbar_cart_icon_dark"
              );
              burgerMenuIcon[0].firstChild.classList.add(
                "navbar_cart_icon_light"
              );

              burgerMenuIconPath[0].classList.remove(
                "navbar_cart_icon_path_dark"
              );
              burgerMenuIconPath[0].classList.add(
                "navbar_cart_icon_path_light"
              );
            }
          } else {
            if (
              props.currentScreenSize >= 768 &&
              props.currentScreenSize > props.currentScreenHeight
            ) {
              if (props.scrollValue <= 5) {
                if (
                  cartIsActive ||
                  location.pathname.includes("account") ||
                  location.pathname.includes("admin") ||
                  location.pathname.includes("privacy") ||
                  location.pathname.includes("termsandconditions")
                ) {
                  burgerMenuIcon[0].firstChild.classList.remove(
                    "navbar_cart_icon_dark"
                  );
                  burgerMenuIcon[0].firstChild.classList.add(
                    "navbar_cart_icon_light"
                  );

                  burgerMenuIconPath[0].classList.remove(
                    "navbar_cart_icon_path_dark"
                  );
                  burgerMenuIconPath[0].classList.add(
                    "navbar_cart_icon_path_light"
                  );
                } else {
                  burgerMenuIcon[0].firstChild.classList.remove(
                    "navbar_cart_icon_path_light"
                  );
                  burgerMenuIcon[0].firstChild.classList.add(
                    "navbar_cart_icon_dark"
                  );

                  burgerMenuIconPath[0].classList.remove(
                    "navbar_cart_icon_path_light"
                  );
                  burgerMenuIconPath[0].classList.add(
                    "navbar_cart_icon_path_dark"
                  );
                }
              } else {
                burgerMenuIcon[0].firstChild.classList.remove(
                  "navbar_cart_icon_dark"
                );
                burgerMenuIcon[0].firstChild.classList.add(
                  "navbar_cart_icon_light"
                );

                burgerMenuIconPath[0].classList.remove(
                  "navbar_cart_icon_path_dark"
                );
                burgerMenuIconPath[0].classList.add(
                  "navbar_cart_icon_path_light"
                );
              }
            } else {
              burgerMenuIcon[0].firstChild.classList.remove(
                "navbar_cart_icon_dark"
              );
              burgerMenuIcon[0].firstChild.classList.add(
                "navbar_cart_icon_light"
              );

              burgerMenuIconPath[0].classList.remove(
                "navbar_cart_icon_path_dark"
              );
              burgerMenuIconPath[0].classList.add(
                "navbar_cart_icon_path_light"
              );
            }
          }
        }
      }
    }
  }, [
    cartIsActive,
    location.pathname,
    props.currentScreenSize,
    props.initialScreenSize,
    props.scrollValue,
    navbarToggle,
    props.currentScreenHeight,
    props.initialScreenHeight,
  ]);

  useEffect(() => {
    const cartIcon = document.getElementsByClassName("navbar_cart_icon");

    if (cartIcon.length > 0) {
      if (navbarToggle) {
        cartIcon[0].firstChild.classList.remove("navbar_cart_icon_dark");
        cartIcon[0].firstChild.classList.add("navbar_cart_icon_light");
      } else {
        if (props.currentScreenSize === "") {
          if (
            props.initialScreenSize >= 768 &&
            props.initialScreenSize > props.initialScreenHeight
          ) {
            if (props.scrollValue <= 5) {
              if (
                cartIsActive ||
                location.pathname.includes("account") ||
                location.pathname.includes("admin") ||
                location.pathname.includes("privacy") ||
                location.pathname.includes("termsandconditions")
              ) {
                cartIcon[0].firstChild.classList.remove(
                  "navbar_cart_icon_dark"
                );
                cartIcon[0].firstChild.classList.add("navbar_cart_icon_light");
              } else {
                cartIcon[0].firstChild.classList.remove(
                  "navbar_cart_icon_light"
                );
                cartIcon[0].firstChild.classList.add("navbar_cart_icon_dark");
              }
            } else {
              cartIcon[0].firstChild.classList.remove("navbar_cart_icon_dark");
              cartIcon[0].firstChild.classList.add("navbar_cart_icon_light");
            }
          } else {
            cartIcon[0].firstChild.classList.remove("navbar_cart_icon_dark");
            cartIcon[0].firstChild.classList.add("navbar_cart_icon_light");
          }
        } else {
          if (
            props.currentScreenSize >= 768 &&
            props.currentScreenSize > props.currentScreenHeight
          ) {
            if (props.scrollValue <= 5) {
              if (
                cartIsActive ||
                location.pathname.includes("account") ||
                location.pathname.includes("admin") ||
                location.pathname.includes("privacy") ||
                location.pathname.includes("termsandconditions")
              ) {
                cartIcon[0].firstChild.classList.remove(
                  "navbar_cart_icon_dark"
                );
                cartIcon[0].firstChild.classList.add("navbar_cart_icon_light");
              } else {
                cartIcon[0].firstChild.classList.remove(
                  "navbar_cart_icon_light"
                );
                cartIcon[0].firstChild.classList.add("navbar_cart_icon_dark");
              }
            } else {
              cartIcon[0].firstChild.classList.remove("navbar_cart_icon_dark");
              cartIcon[0].firstChild.classList.add("navbar_cart_icon_light");
            }
          } else {
            cartIcon[0].firstChild.classList.remove("navbar_cart_icon_dark");
            cartIcon[0].firstChild.classList.add("navbar_cart_icon_light");
          }
        }
      }
    }
  }, [
    cartIsActive,
    location.pathname,
    props.currentScreenSize,
    props.initialScreenSize,
    props.scrollValue,
    navbarToggle,
    props.currentScreenHeight,
    props.initialScreenHeight,
  ]);

  const navbarItemSelect = () => {
    dispatch(ACTION_NAVBAR_TOGGLE_RESET());
    dispatch(ACTION_BODY_SCROLL_ALLOW());
  };

  useMemo(() => {
    const NavRefTarget = Nav_Ref.current;
    clearAllBodyScrollLocks();

    if (navbarToggle) {
      dispatch(ACTION_BODY_SCROLL_RESET());
      const handleDisableScroll = (el) => {
        disableBodyScroll({ targetElement: el });
      };

      handleDisableScroll(NavRefTarget);
    } else {
      dispatch(ACTION_BODY_SCROLL_ALLOW());
      const handleEnableScroll = (el) => {
        enableBodyScroll({ targetElement: el });
      };

      handleEnableScroll(NavRefTarget);
    }
  }, [navbarToggle, dispatch]);

  useEffect(() => {
    if (homeClicked) {
      const clickedReset = setTimeout(() => {
        changeHomeClicked(false);
      }, 100);

      return () => {
        clearTimeout(clickedReset);
      };
    }
  }, [homeClicked, location.pathname]);

  const navMenuScrollToHome = () => {
    navbarItemSelect();
    dispatch(ACTION_CART_IS_NOT_ACTIVE());

    setTimeout(() => {
      props.handleClickToScrollToHome(LandingPageRef);
    }, 300);

    changeHomeClicked(true);

    document.body.classList.remove("no_scroll");
    document.body.style.setProperty("overflow", "scroll");
  };

  const navMenuScrollToTreatments = () => {
    navbarItemSelect();
    changeHomeClicked(true);

    dispatch(ACTION_CART_IS_NOT_ACTIVE());
    setTimeout(() => {
      props.handleClickToScrollToTreatments(Treatments1Ref);
    }, 300);
  };

  const navMenuScrollToAddOns = () => {
    navbarItemSelect();
    changeHomeClicked(true);

    dispatch(ACTION_CART_IS_NOT_ACTIVE());
    setTimeout(() => {
      props.handleClickToScrollToAddOns(AddOnsRef);
    }, 300);
  };

  const navMenuScrollToInstagram = () => {
    navbarItemSelect();
    changeHomeClicked(true);

    dispatch(ACTION_CART_IS_NOT_ACTIVE());
    setTimeout(() => {
      props.handleClickToScrollToInstagram(InstagramRef);
    }, 300);
  };

  const navMenuScrollToContact = () => {
    navbarItemSelect();
    changeHomeClicked(true);

    dispatch(ACTION_CART_IS_NOT_ACTIVE());
    setTimeout(() => {
      props.handleClickToScrollToContact(ContactRef);
    }, 300);
  };

  return (
    <nav
      className="navbar"
      style={{
        background: changeNavBarColor(),
        filter: navbarToggle
          ? "none"
          : props.scroll
          ? "drop-shadow(0 0 3px rgba(0, 0, 0, 0.4))"
          : cancelAppointmentClicked ||
            logoutClicked ||
            addProfilePhotoClicked ||
            imageLoading
          ? "blur(5px) brightness(50%)"
          : "none",
        transition: "background 0.5s ease, filter 0.5s ease",
        display: loginIsActive || !splashScreenHalfway ? "none" : "flex",
      }}
    >
      <div className="left_nav">
        <Menu
          customBurgerIcon={
            <BurgerMenu
              location={location}
              cartIsActive={cartIsActive}
              currentScreenSize={props.currentScreenSize}
              currentScreenHeight={props.currentScreenHeight}
              initialScreenSize={props.initialScreenSize}
              initialScreenHeight={props.initialScreenHeight}
              scrollValue={props.scrollValue}
            />
          }
          className={
            navbarToggle
              ? "nav_burger_menu"
              : "nav_burger_menu nav_burger_menu_no_shadow"
          }
          disableAutoFocus
          onOpen={props.handleNavbarToggle}
          isOpen={navbarToggle}
          onClose={props.handleNavbarToggle}
          width={
            props.currentScreenSize === ""
              ? props.initialScreenSize >= 768
                ? "60%"
                : "85%"
              : props.currentScreenSize >= 768
              ? "60%"
              : "85%"
          }
        >
          <div className="nav_burger_menu_logo_container">
            <svg
              width="100%"
              viewBox="0 0 463.01 463.01"
              shapeRendering="geometricPrecision"
            >
              <g transform="translate(0, -190)">
                <path
                  fill="rgb(239, 240, 243)"
                  d="m432.88 255.68c2.4213-0.23074 3.3833-0.56953 5.7181-2.0136 2.6558-1.6427 4.1983-3.894 4.9049-7.1591 0.5385-2.4882 0.18591-6.3892-0.77238-8.5467-1.1573-2.6055-4.6796-5.6169-8.0966-6.922-2.809-1.0729-6.3095-2.5241-8.6119-3.5701-1.36-0.61786-3.2882-1.4938-4.285-1.9465-2.126-0.96557-5.4093-3.2894-7.009-4.9607-1.1938-1.2472-1.3241-1.3205-1.6734-0.94007-0.60242 0.65603-0.0547 2.1277 1.3464 3.6175 2.3077 2.4538 5.7867 4.4777 11.255 6.5475 1.4607 0.55289 3.4388 1.3909 4.3958 1.8623 0.95705 0.47137 2.4406 1.0987 3.2969 1.3942 4.5079 1.5553 7.3516 4.4032 8.0774 8.0896 0.11202 0.56889 0.16989 1.9893 0.12852 3.1564-0.0703 1.9848-0.12002 2.2177-0.76894 3.5995-1.9592 4.1722-5.3494 5.7958-12.115 5.8018-2.3393 3e-3 -3.3454-0.28923-6.5624-1.9001-2.916-1.4602-4.8583-3.0058-6.8582-5.4575-0.83585-1.0248-1.28-1.4176-1.6026-1.4176-0.49271 0-1.1789 0.6338-1.1789 1.0889 0 0.3856 1.9437 2.8999 2.9541 3.8213 2.2152 2.0201 3.7248 3.1039 5.6623 4.0652 2.6613 1.3205 4.0626 1.7698 6.1277 1.9648 1.7579 0.16601 2.2512 0.15081 5.6674-0.1748zm-384.8-0.21593c2.6621-0.37288 5.3101-1.5181 8.5373-3.6922 1.2956-0.87282 1.6408-1.2089 1.8079-1.7603 0.23243-0.76703 0.29562-20.359 0.07616-23.615-0.14601-2.1662-0.45692-2.7605-1.3252-2.5328-0.98954 0.25954-0.96311-0.14295-0.83214 12.668l0.1214 11.876-0.50244 0.6503c-0.59708 0.77281-2.514 2.0293-4.0408 2.6488-2.7759 1.1261-4.2581 1.428-7.5296 1.5337-3.6687 0.11854-4.425 3e-3 -8.3225-1.267-3.0104-0.98124-3.9422-1.422-5.875-2.7786l-1.2177-0.85469-0.01102-18.718c-0.0059-10.295 0.03734-20.461 0.09646-22.591 0.10689-3.8533 0.1099-3.8756 0.58765-4.3679 1.1912-1.2273 6.2921-4.4249 8.1728-5.1234 1.305-0.48465 4.1613-0.68824 6.8476-0.48802 3.1727 0.23644 5.9487 1.1185 9.3638 2.9751 2.7218 1.4798 3.3768 1.6645 3.5686 1.0064 0.31418-1.0781-1.0643-2.3894-4.0673-3.8693-5.5127-2.7165-8.9986-3.2935-14.098-2.3337-3.8567 0.72589-5.2534 1.3184-8.2995 3.5208-2.3618 1.7076-3.83 3.0052-4.0218 3.5546-0.0878 0.25151-0.21742 10.913-0.28804 23.693-0.14413 26.083-0.24956 23.956 1.2422 25.058 2.6332 1.9455 6.4884 3.7149 9.8461 4.519 2.7348 0.65488 6.7351 0.76828 10.164 0.28805zm93.711 0.21212c4.7227-0.52157 7.7464-1.9699 10.882-5.2124 3.0115-3.1144 4.2207-5.5693 5.3863-10.935 0.63259-2.9121 0.83995-9.2165 0.59376-18.052-0.21853-7.8432-0.4818-10.838-1.1114-12.642-1.1814-3.3861-4.992-8.8179-7.4903-10.677-2.0122-1.4974-6.4598-3.2263-9.5761-3.7226-2.1263-0.33858-5.9222-0.13645-7.685 0.40926-1.612 0.499-4.7077 2.0791-5.8086 2.9647-1.4926 1.2007-1.3798-1.2106-1.2731 27.234 0.0586 15.59 0.16343 25.553 0.27239 25.864 0.25166 0.71914 1.4905 1.8775 2.7287 2.5516 1.4285 0.77765 5.0233 2.0573 6.2724 2.2328 1.5808 0.22215 4.7259 0.21536 6.8093-0.0147zm-5.5211-2.1072c-1.9775-0.40253-5.3844-1.3788-6.1358-1.7583-0.50367-0.25432-1.2042-0.74874-1.5568-1.0987l-0.64106-0.63626-0.0307-12.106c-0.0169-6.658-0.0581-17.825-0.0915-24.816-0.0599-12.492-0.0546-12.717 0.30538-13.104 1.2244-1.315 5.6879-3.2339 8.1505-3.504 2.5966-0.28481 6.9497 0.61535 9.8904 2.0452 2.0351 0.9895 5.5822 4.275 7.0748 6.5531 1.9325 2.9494 2.7377 5.7881 3.0485 10.747 0.28835 4.6007 0.2768 19.614-0.0167 21.572-0.23801 1.5882-1.7349 6.0348-2.724 8.0917-0.80946 1.6835-3.459 4.709-4.6354 5.2933-4.8872 2.4273-5.6881 2.6629-9.341 2.748-1.5614 0.0364-3.045 0.0242-3.2968-0.0269zm53.929 1.8734c0.15682-0.24386 0.28512-0.65289 0.28512-0.90895 0-0.51641-0.80282-2.6943-2.1119-5.7291-1.6093-3.7308-4.8753-12.158-5.7977-14.961-0.50565-1.536-1.252-3.6454-1.6587-4.6877-0.40662-1.0423-1.0504-2.8375-1.4305-3.9895s-0.98542-2.8394-1.3451-3.7498c-0.35968-0.91042-0.87236-2.4364-1.1393-3.3911s-1.0482-3.3066-1.7361-5.2266c-2.0424-5.7005-4.1155-11.909-4.8082-14.4-0.3567-1.2826-0.77831-2.6053-0.93692-2.9394-0.50438-1.0623-1.774-1.0529-1.8929 0.0141-0.0543 0.48625 3.2564 11.61 4.355 14.633 1.5715 4.3241 4.1846 11.894 6.3346 18.352 0.87669 2.6331 1.9004 5.5504 2.2748 6.4829 0.37447 0.93255 0.87104 2.3239 1.1035 3.0919 0.23248 0.76797 0.99525 2.7428 1.6951 4.3884 0.69982 1.6457 1.5212 3.6205 1.8254 4.3885 1.029 2.5983 3.5804 8.3308 3.8743 8.7046 0.38775 0.49322 0.76159 0.46898 1.1094-0.0718zm35.53 0.12985c0.64005-0.69705 0.38658-1.6911-1.6667-6.5361-1.2388-2.9232-3.8335-9.7038-5.7372-14.993-0.78978-2.1942-1.6824-4.6178-1.9835-5.3858-0.30123-0.76798-0.83652-2.3025-1.1896-3.4101-0.35308-1.1076-0.97102-2.858-1.3732-3.8898-0.40218-1.0318-0.91597-2.5492-1.1417-3.372-0.22578-0.82283-0.97002-3.022-1.6539-4.8871-1.8648-5.0859-3.201-8.9848-4.4097-12.866-1.6171-5.193-1.5822-5.1037-2.0909-5.3562-0.65855-0.32681-1.1375-0.28357-1.3361 0.12061-0.17226 0.35054 0.78194 4.2249 1.3326 5.4111 0.13343 0.28742 0.54845 1.5997 0.92222 2.9163l0.67963 2.3937-1.4104 4.189c-0.77577 2.3039-1.7802 5.0866-2.232 6.1837-0.7972 1.9356-1.093 2.7523-3.2154 8.8766-0.55126 1.5908-1.2136 3.431-1.4717 4.0892-0.77091 1.9655-2.6737 7.4216-3.4238 9.8176-0.38526 1.2306-0.76164 2.3453-0.8364 2.477-0.0845 0.14903-0.30162-0.16871-0.57467-0.84122-0.51878-1.2777-3.1692-8.9786-3.6329-10.556-0.17745-0.60339-0.56307-1.6806-0.85692-2.3937-0.29386-0.71312-1.5566-4.3485-2.806-8.0787-1.2494-3.7302-2.6054-7.7246-3.0132-8.8766-0.40782-1.152-1.1458-3.4409-1.64-5.0866-1.2762-4.25-3.2324-9.8561-3.5889-10.285-0.63027-0.75848-1.913-0.65608-1.913 0.15272 0 0.39372 4.0778 12.841 5.3454 16.316 0.32013 0.8777 1.1766 3.4808 1.9032 5.7848 1.9369 6.1413 2.6728 8.2906 3.7906 11.071 0.55135 1.3714 1.3078 3.436 1.681 4.5879 1.2288 3.7932 2.7406 7.8379 3.7639 10.07 0.85998 1.876 1.077 2.2063 1.4837 2.2577 0.34796 0.0441 0.56128-0.0809 0.79136-0.46333 0.38013-0.63185 2.1186-5.3625 3.627-9.8699 0.60581-1.8102 1.5921-4.5031 2.1916-5.9842 0.59959-1.4811 1.282-3.2764 1.5164-3.9895 0.23444-0.71313 0.75662-2.1942 1.1604-3.2913 0.40376-1.0971 0.91825-2.6231 1.1433-3.3911 0.22505-0.76797 0.61057-1.8346 0.85674-2.3703 0.24616-0.53568 0.76468-1.9719 1.1523-3.1916 0.79329-2.4964 1.2715-3.7911 1.3612-3.6854 0.26005 0.30649 4.3378 12.076 5.3096 15.325 0.37628 1.258 1.258 3.7265 1.9594 5.4856 0.70134 1.7591 2.0862 5.4873 3.0775 8.2849 0.99129 2.7976 2.0981 5.7737 2.4595 6.6135 0.36142 0.8398 0.81638 1.9618 1.011 2.4934 0.61983 1.6926 3.3287 7.7306 3.6319 8.0956 0.36087 0.43428 0.67195 0.44552 1.0463 0.0378zm74.92 0.18792c0.42851-0.17913 2.8373-5.5177 4.4204-9.7969 0.74125-2.0037 1.5688-4.1141 1.839-4.6897 0.2701-0.57564 1.3668-3.3804 2.4369-6.2329l1.9457-5.1863 19.961-0.1031 1.0397 3.4426c0.57188 1.8934 1.2421 4.2056 1.4894 5.1382 0.56376 2.1259 1.5631 5.2871 2.4909 7.8792 0.39269 1.0971 1.183 3.3223 1.7562 4.945 1.3402 3.7934 1.5943 4.212 2.6062 4.2923 0.92828 0.0737 1.0888-0.1994 0.7642-1.2999-0.43042-1.4592-3.514-10.756-4.3861-13.223-0.48466-1.3714-1.7563-5.5513-2.8259-9.2887-1.0695-3.7374-2.4727-8.4051-3.1181-10.373-0.64544-1.9676-1.5959-5.1034-2.112-6.9685-0.5162-1.8651-1.4403-4.8722-2.0537-6.6824-0.61338-1.8102-1.6838-5.0866-2.3788-7.2808-0.69498-2.1942-1.433-4.371-1.6402-4.8373-0.33536-0.75488-0.44599-0.84776-1.0101-0.84776-1.0082 0-1.3988 0.65957-2.4612 4.1567-0.52206 1.7183-1.7924 5.6375-2.823 8.7094-1.0305 3.0719-2.1435 6.4829-2.4731 7.58-0.32962 1.0971-1.3194 3.8349-2.1994 6.084s-1.9912 5.2562-2.4693 6.6824c-0.47819 1.4262-1.9687 5.4656-3.3124 8.9764-1.3436 3.5108-2.9478 7.7296-3.565 9.3753-0.61713 1.6457-1.6926 4.1931-2.3899 5.661-0.6973 1.4679-1.2678 2.8073-1.2678 2.9764 0 0.76701 0.92247 1.2515 1.7358 0.91159zm12.047-28.339c-0.32738-0.0471-0.59445-0.10251-0.59345-0.12304 0-0.0204 0.62881-1.6978 1.395-3.7275 2.0623-5.4628 3.5323-9.8405 6.021-17.931l2.233-7.2591 0.223 0.96456c0.12265 0.53049 0.57973 1.9121 1.0157 3.0702 0.43602 1.1581 0.97122 2.8237 1.1893 3.7014 0.21818 0.87769 0.91917 3.1667 1.5578 5.0866 1.2921 3.8846 2.1636 6.794 3.0175 10.073 0.31418 1.2068 0.85412 3.0435 1.1999 4.0814 0.34571 1.038 0.58428 1.9356 0.53005 1.9947-0.11725 0.12795-16.927 0.19251-17.789 0.0684zm-206.52 28.081c0.32021-9e-3 0.7117-0.15713 0.86999-0.32952 0.34782-0.37882 0.3761-1.1537 0.0528-1.4459-0.22483-0.20323-10.714-0.4739-18.938-0.48868-3.2623-6e-3 -3.3317-0.0146-3.4295-0.43913-0.05487-0.23822-0.10121-13.298-0.10292-29.021-0.0018-20.972-0.05835-28.66-0.2103-28.86-0.25975-0.34087-1.5561-0.35757-1.7512-0.0226-0.17809 0.30584-0.29998 49.931-0.13645 55.559 0.10097 3.4749 0.16396 4.1071 0.44716 4.4882 0.32714 0.44025 0.38003 0.44435 6.9854 0.54333 5.4724 0.082 13.534 0.09 16.213 0.0162zm185.82-0.42235c0.38338-0.51562 0.4049-0.7973 0.0951-1.2435-0.20393-0.29366-1.0707-0.34409-7.9216-0.46101-4.2309-0.0722-9.1996-0.13396-11.041-0.13725-1.9788-4e-3 -3.394-0.0858-3.4594-0.20113-0.0607-0.1073-0.0967-13.11-0.0795-28.895 0.0218-20.026-0.0277-28.82-0.16429-29.098-0.23078-0.46964-1.4776-0.56251-1.804-0.13435-0.30586 0.40143-0.39935 54.163-0.10134 58.315 0.16751 2.3346-0.44481 2.1458 7.3398 2.2628 3.7103 0.0558 9.0109 0.0848 11.779 0.0647 4.9343-0.0361 5.0397-0.0453 5.3574-0.47257zm53.339 0.33821c0.32572-0.25936 0.32578-0.30338 0-1.4462-0.52451-1.8438-2.7581-8.6825-3.26-9.9815-0.24879-0.644-2.0635-6.4221-4.0328-12.84-1.9692-6.4181-4.3342-14.048-5.2555-16.955-0.92135-2.9073-1.9519-6.2675-2.2901-7.467-0.33819-1.1995-0.77765-2.6357-0.97671-3.1916-0.19898-0.55588-0.82119-2.5759-1.3827-4.489-1.1235-3.828-1.3316-4.2932-2.0022-4.4765-0.61325-0.16763-1.3973 0.18036-1.3951 0.61917 0 0.19473 1.1992 4.2139 2.6627 8.9314 1.4634 4.7176 3.0599 9.9239 3.5476 11.57 0.48775 1.6457 1.3792 4.4284 1.9809 6.1837 0.60177 1.7554 2.0174 6.2884 3.1458 10.073 1.1285 3.785 2.3859 7.9141 2.7941 9.1758 2.1826 6.7452 4.1701 12.755 4.439 13.423 0.41432 1.0292 1.3303 1.4232 2.0242 0.87064zm18.509-30.265c7e-3 -17.697-0.0587-30.311-0.15536-30.457-0.22577-0.34003-1.1333-0.31487-1.4596 0.0404-0.21916 0.23872-0.29411 1.7951-0.4252 8.8268-0.22069 11.847-0.11982 51.314 0.13208 51.645 0.23995 0.31502 0.84726 0.42916 1.4444 0.27157l0.45352-0.11969zm3.3574 30.28 0.42818-0.24641 0.0105-30.065c9e-3 -23.996-0.0362-30.127-0.22167-30.37-0.30797-0.40419-1.3598-0.38973-1.6743 0.023-0.20756 0.27241-0.25341 4.4539-0.27175 24.785-0.0119 13.451 0.0211 27.001 0.0731 30.11 0.0926 5.5008 0.10549 5.6578 0.47825 5.822 0.52859 0.23283 0.68516 0.22508 1.1776-0.0582zm12.252-0.0525c4.4323-0.18923 8.9821-1.0741 11.325-2.2024 1.529-0.73645 3.9819-2.5194 4.9961-3.6316 1.8307-2.0076 2.9346-5.2695 3.0867-9.1211 0.11085-2.8078-0.12798-4.2248-1.1768-6.9816-0.60038-1.578-0.86151-1.9904-2.1583-3.4074-2.4519-2.6794-4.4968-3.6941-10.05-4.9869l-3.2766-0.76284 1.9955-0.54126c5.7229-1.5522 9.4574-4.1372 11.24-7.7805 0.66385-1.3565 1.2847-3.8509 1.2847-5.1616 0-1.1668-0.58019-3.6792-1.1134-4.8211-1.7987-3.8521-5.763-7.9009-9.0592-9.2521-3.3421-1.3701-7.8976-2.2335-12.748-2.4162l-3.4142-0.12861-0.45379 0.49426-0.45384 0.49424-0.13776 5.8699c-0.0757 3.2284-0.11875 8.518-0.0956 11.754 0.0231 3.2365 0.033 14.001 0.0224 23.922-0.0178 16.358 8e-3 18.07 0.27671 18.394 0.44078 0.5305 2.4595 0.58483 9.9101 0.26672zm-6.0862-2.2629-1.8316-0.12514-0.0224-8.2782c-0.0126-4.553-0.0834-9.997-0.15782-12.098-0.0745-2.1008-0.0778-4.4446-7e-3 -5.2084l0.12805-1.3888 1.9068-0.10598c4.0447-0.22484 11.575 0.77523 14.179 1.8832 2.6556 1.1297 5.0476 2.7236 6.6205 4.4114 0.83696 0.89816 1.6547 2.4482 2.1778 4.1286 0.36531 1.1733 0.39335 1.5526 0.29465 3.9895-0.0627 1.5437-0.23487 3.1529-0.40383 3.7708-0.503 1.8388-1.8265 3.8253-3.4666 5.2034-0.99359 0.83486-4.1692 2.3301-6.1384 2.8903-2.6494 0.75374-9.163 1.2086-13.279 0.9273zm-1.8316-42.265c0-6.9938 0.0205-13.109 0.0455-13.59l0.0455-0.87346 1.8774 0.13917c5.7651 0.42736 11.211 1.7346 14.286 3.4288 1.0067 0.55472 3.0627 2.604 4.1438 4.1302 1.7548 2.4772 2.6151 5.4052 2.2264 7.5773-0.28441 1.5895-1.1583 3.8531-1.7952 4.6502-0.73727 0.92278-2.4223 2.3359-3.738 3.1349-1.9767 1.2004-6.5954 2.8734-9.4907 3.4378-1.4808 0.28862-5.2965 0.66379-6.8684 0.67528l-0.73265 5e-3v-12.716zm-294.77 44.195c0.28749-0.58505 0.28406-59.034-0.0035-59.858-0.15536-0.44501-0.30304-0.5438-0.813-0.5438-0.34273 0-0.7238 0.13207-0.84681 0.29348-0.17256 0.22645-0.24613 6.4129-0.32203 27.079-0.10935 29.771-0.09298 32.858 0.1762 33.218 0.10248 0.13713 0.50302 0.24933 0.89009 0.24933 0.53729 0 0.75468-0.10365 0.91906-0.43812zm3.9371 0.20599c0.07242-0.12768 0.13028-13.68 0.12852-30.116-0.0027-23.801-0.05033-29.946-0.23492-30.188-0.24615-0.32302-1.2211-0.40599-1.6102-0.13704-0.18633 0.1288-0.24119 6.1634-0.27473 30.224-0.03706 26.539-0.0097 30.086 0.23282 30.253 0.38719 0.26679 1.6007 0.24148 1.7585-0.0366zm180.95-0.11695c0.18869-0.45849 0.30798-55.12 0.12674-58.097l-0.13966-2.294h-0.81105c-0.73028 0-0.82443 0.0548-0.94589 0.54935-0.0742 0.30215-0.16183 11.523-0.19469 24.934-0.0787 32.108-0.0736 34.497 0.0744 34.907 0.0935 0.25923 0.33443 0.34908 0.93613 0.34908 0.59497 0 0.84857-0.0928 0.95407-0.34908zm4.0629-29.807c0.0515-33.529 0.16039-30.771-1.2074-30.645-0.57958 0.0533-0.67195 0.13788-0.77917 0.71358-0.067 0.35923-0.13623 13.929-0.15404 30.154-0.031 28.25-0.0184 29.51 0.29834 29.716 0.18183 0.11807 0.66034 0.19264 1.0633 0.1657l0.73266-0.0489zm83.822 29.847c0.2561-0.27895 0.24747-0.4097-0.0892-1.3464-1.3654-3.7991-6.5746-20.014-10.138-31.557-0.44032-1.4262-1.3896-4.4333-2.1094-6.6824-0.71979-2.2491-1.5898-5.1215-1.9333-6.3832-0.67131-2.4657-4.1299-13.02-4.5713-13.949-0.16336-0.34395-0.46229-0.60345-0.76875-0.66725-0.60591-0.12614-1.3449 0.14852-1.3422 0.49883 0 0.13987 0.53736 1.9598 1.1917 4.0443 0.6544 2.0845 1.8172 5.8546 2.584 8.3779 0.76683 2.5234 1.5102 4.8347 1.6518 5.1364 0.14172 0.30165 0.54127 1.5135 0.88791 2.6929 0.34663 1.1795 1.3831 4.5232 2.3032 7.4306 2.4687 7.8008 5.2403 16.605 5.871 18.651 0.30441 0.9874 0.95362 2.9173 1.4425 4.2887 0.48901 1.3714 1.0291 3.032 1.2002 3.6903 0.48948 1.8823 1.8948 5.5597 2.2297 5.8346 0.41861 0.3437 1.2484 0.31262 1.5902-0.0596zm-157.39-4.604c0.44295-0.58128 0.22677-1.7133-0.79504-4.1632-0.5491-1.3165-1.502-3.785-2.1176-5.4856-0.61554-1.7005-2.3182-6.3835-3.7836-10.407-1.4654-4.0232-2.6644-7.4196-2.6644-7.5477 0-0.12806-0.36316-1.2348-0.80703-2.4594-0.44385-1.2246-1.1897-3.5041-1.6575-5.0656-0.46776-1.5615-1.0987-3.4914-1.4021-4.2887-0.95099-2.4991-3.9379-11.328-4.5729-13.516-0.76745-2.6452-1.3497-3.3297-2.4433-2.8726-0.49336 0.20617-0.33152 1.2298 0.70627 4.4668 2.6124 8.1484 3.2249 10.001 3.8442 11.626 0.36726 0.96334 1.1633 3.2523 1.769 5.0866s1.6742 5.0086 2.3744 7.054c0.70025 2.0454 1.2732 3.7842 1.2732 3.8639 0 0.0797 1.2036 3.433 2.6746 7.4516 3.1844 8.6993 5.8894 15.468 6.5273 16.333 0.25648 0.3478 0.77985 0.31097 1.0744-0.0756zm35.594-0.11834c0.41843-0.6506 0.35241-1.2968-0.28079-2.7483-0.92097-2.1111-1.9146-4.7653-3.9204-10.472-1.0411-2.9622-2.4667-6.9118-3.168-8.7769-0.70131-1.8651-1.523-4.199-1.826-5.1863-0.30301-0.9874-0.81531-2.5134-1.1384-3.3911-0.32311-0.87769-0.79389-2.3139-1.0462-3.1916-0.41138-1.431-1.4481-4.4155-4.2785-12.317-0.50096-1.3984-1.3151-3.8344-1.8093-5.4132-1.0908-3.4852-1.358-4.0718-1.9254-4.2269-1.4468-0.39547-1.4705 0.78945-0.0963 4.8022 0.52601 1.536 1.4715 4.4084 2.1011 6.3832 0.62959 1.9748 1.6833 5.0268 2.3416 6.7822 0.65832 1.7554 1.5272 4.2239 1.931 5.4855 0.40371 1.2617 0.95591 2.8774 1.2271 3.5906 0.27113 0.71312 1.0571 2.9813 1.7465 5.0405 0.68937 2.0592 1.7412 5.0214 2.3372 6.5827 0.59612 1.5613 1.4768 4.0057 1.9571 5.4319 0.99074 2.942 3.7491 9.9433 4.4205 11.22 0.5031 0.95688 0.98426 1.0933 1.4272 0.40444zm-103.94-2.7352c0.12749-0.25944 0.1896-7.8008 0.1896-23.025 0-19.738-0.0347-22.677-0.27152-22.935-0.34474-0.37544-0.86217-0.22976-1.4005 0.39429l-0.42133 0.48845-7e-3 21.884c-4e-3 12.036 0.0564 22.128 0.1332 22.427 0.13105 0.50988 0.8663 1.1261 1.3649 1.1441 0.12238 4e-3 0.30782-0.16564 0.41211-0.37787zm-98.889-1.6284c0.14662-0.29839 0.22847-6.1622 0.28513-20.428 0.07194-18.112 0.05179-20.039-0.21229-20.327-0.62061-0.6759-1.3911-0.0963-1.7382 1.3077-0.14971 0.60552-0.21806 6.2886-0.23861 19.842l-0.02876 18.993 0.44402 0.51519c0.53891 0.62527 1.2076 0.66871 1.4887 0.0967zm205.1-1.5331c0.4525-0.97035 2.7245-7.1524 3.8532-10.484 0.48895-1.4434 1.2334-3.4772 1.6543-4.5194 0.42086-1.0423 1.2909-3.3312 1.9334-5.0866 0.64248-1.7554 1.5732-4.2688 2.0684-5.5853 0.49521-1.3165 1.3776-3.8748 1.9609-5.685 0.58328-1.8102 1.5128-4.4583 2.0657-5.8845 0.55281-1.4262 1.3572-3.7152 1.7874-5.0866 0.43029-1.3714 1.1246-3.3748 1.5429-4.452 0.87364-2.2498 0.9104-2.9952 0.15246-3.0904-0.79177-0.0995-1.1624 0.25845-1.8664 1.8028-0.9734 2.135-5.1091 13.67-7.1484 19.937-0.55948 1.7196-1.603 4.592-2.3188 6.3832-1.8007 4.5054-4.7496 12.549-5.6548 15.425-0.74687 2.3724-1.0251 3.068-1.1544 2.8866-0.13438-0.18833-2.0127-5.3504-2.9012-7.9732-0.50175-1.4811-1.2063-3.5457-1.5656-4.5879-0.35936-1.0422-1.3487-3.9147-2.1985-6.3832-0.84987-2.4685-2.0029-5.7898-2.5623-7.3806-1.9502-5.5458-2.6683-7.6941-3.2824-9.8198-0.34-1.177-1.109-3.5109-1.7088-5.1863-0.59982-1.6755-1.1463-3.2896-1.2145-3.5869-0.39911-1.7418-2.4232-2.168-2.3193-0.48825 0.0235 0.38029 0.97644 3.4154 2.1176 6.7446 1.1412 3.3293 2.2224 6.5469 2.4027 7.1503 0.1803 0.60342 0.68898 2.0621 1.1304 3.2415 0.44139 1.1794 1.1633 3.2889 1.6042 4.6877 1.4407 4.5711 2.4958 7.6966 3.2419 9.6029 1.0911 2.7883 2.0726 5.532 2.5409 7.1031 0.47627 1.5978 2.4128 6.8396 3.368 9.1167 1.0708 2.5526 1.6984 2.8572 2.4714 1.1994zm-110.16-1.4894c0.22749-0.3843 0.2628-3.0218 0.24566-18.349-0.011-9.8449-0.0762-17.999-0.1448-18.12-0.21124-0.37222-0.94229-0.1147-1.344 0.47345-0.34117 0.49948-0.39716 0.96461-0.5282 4.3884-0.18291 4.7793 3e-3 29.477 0.22981 30.559 0.15282 0.72887 0.72572 1.496 1.1172 1.496 0.0873 0 0.27821-0.20196 0.42434-0.44882zm-98.665-2.7428c0.17918-0.38709 0.23143-3.6956 0.23353-14.787 0.0027-15.584 0.04744-14.941-1.0141-14.651-0.32369 0.0885-0.58229 0.39337-0.82256 0.96979-0.3339 0.80104-0.35063 1.4745-0.35446 14.265-0.0033 11.464 0.03556 13.508 0.26686 13.995 0.44871 0.94501 1.301 1.0497 1.6908 0.20761zm422.15-6.0859c0.17121-0.99393-0.0277-1.4136-1.3591-2.8707-0.97994-1.0723-1.7121-1.6184-3.7518-2.7988-2.4501-1.4178-6.7126-3.4286-9.7373-4.5933-2.1776-0.83863-7.7143-3.8033-9.5581-5.1182-1.028-0.73305-2.3704-1.985-3.696-3.4469-1.9471-2.1474-2.098-2.2713-2.3353-1.9179-1.1207 1.6692 1.673 5.3474 6.3566 8.369 2.7827 1.7952 5.0085 2.9207 9.2328 4.6685 3.9583 1.6377 7.1166 3.0443 8.3336 3.7115 1.7718 0.97132 3.9158 2.6321 4.8834 3.7826 1.0474 1.2454 1.4445 1.2976 1.6311 0.2142zm-0.39182-4.7997c0.66622-0.72553 0.11492-2.0078-1.3947-3.2441-2.3579-1.9309-4.2125-2.9114-11.413-6.0338-4.3692-1.8946-6.3913-2.9479-8.3904-4.3703-3.8629-2.7488-5.3362-4.346-6.3973-6.9358-0.58758-1.434-0.57656-4.5918 0.0205-5.8175 1.214-2.4931 4.8178-5.2544 7.7167-5.9127 2.0251-0.45988 5.0604-0.67495 6.6861-0.47376 3.1357 0.38804 6.809 1.8365 8.4455 3.3303 1.6639 1.5188 3.0367 2.4154 3.4478 2.2519 0.55889-0.22224 0.97591-1.1138 0.72606-1.5524-0.71148-1.249-5.7913-4.8023-7.754-5.4238-2.4867-0.78748-3.3692-0.90191-6.9734-0.90421-4.1572-3e-3 -5.7442 0.32068-8.2146 1.6735-1.7357 0.95045-4.0502 2.9304-4.8972 4.1893-1.8882 2.8067-2.339 6.9566-1.0808 9.9498 0.54548 1.2977 2.5121 4.082 3.6616 5.1839 2.3338 2.2373 6.0435 4.3964 11.905 6.9285 2.2162 0.95747 4.4157 1.9524 4.8878 2.211 0.47213 0.25863 1.4048 0.69418 2.0724 0.96792 1.8639 0.76409 3.5269 1.7837 5.0365 3.0881 0.75548 0.65283 1.4296 1.1916 1.498 1.1973 0.0683 6e-3 0.2538-0.13067 0.41208-0.30308z"
                  strokeWidth=".19114"
                />
              </g>
            </svg>
          </div>
          <ul className="nav_burger_menu_items">
            <li tabIndex={0} onClick={() => navMenuScrollToHome()}>
              <FcHome />
              Home
            </li>
            <li tabIndex={0} onClick={() => navMenuScrollToTreatments()}>
              <FcPaid />
               consultation
            </li>
            <li tabIndex={0} onClick={() => navMenuScrollToAddOns()}>
              <FcPlus />
              products
            </li>
            <li tabIndex={0} onClick={() => navMenuScrollToInstagram()}>
              <FcLike />
              Follow Us
            </li>
            <li tabIndex={0} onClick={() => navMenuScrollToContact()}>
              <FcAbout />
              Contact Us
            </li>
            <li className="navbar_social_media_icons">
              <FontAwesomeIcon
                icon={faInstagram}
                onClick={() =>
                  window.open("https://instagram.com/", "_blank")
                }
              />

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://google.com/maps?cid=14723157819510648635"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/glowlabsLI/"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="tel:1 (516) 442-8122">
                <FontAwesomeIcon icon={faPhoneSquare} />
              </a>
            </li>
          </ul>
        </Menu>

        <div className="navbar_logo_container">
          <a href="/" aria-label="Logo Site Refresh">
            <svg
              width="75%"
              viewBox="0 0 463.01 463.01"
              shapeRendering="geometricPrecision"
            >
              <path
                fill={
                  props.currentScreenSize === ""
                    ? props.initialScreenSize >= 1200 &&
                      (cartIsActive ||
                        location.pathname.includes("account") ||
                        location.pathname.includes("admin") ||
                        location.pathname.includes("privacy") ||
                        location.pathname.includes("termsandconditions"))
                      ? "rgb(239, 240, 243)"
                      : props.initialScreenSize >= 768 &&
                        props.initialScreenHeight >= props.initialScreenSize
                      ? "rgb(239, 240, 243)"
                      : props.initialScreenSize >= 600
                      ? props.initialScreenHeight >= props.initialScreenSize
                        ? "rgb(239, 240, 243)"
                        : props.scrollValue <= 5
                        ? navbarToggle
                          ? "rgb(239, 240, 243)"
                          : "rgb(44, 44, 52)"
                        : "rgb(239, 240, 243)"
                      : "rgb(239, 240, 243)"
                    : props.currentScreenSize >= 1200 &&
                      (cartIsActive ||
                        location.pathname.includes("account") ||
                        location.pathname.includes("admin") ||
                        location.pathname.includes("privacy") ||
                        location.pathname.includes("termsandconditions"))
                    ? "rgb(239, 240, 243)"
                    : props.currentScreenSize >= 768 &&
                      props.currentScreenHeight >= props.currentScreenSize
                    ? "rgb(239, 240, 243)"
                    : props.currentScreenSize >= 600
                    ? props.currentScreenHeight >= props.currentScreenSize
                      ? "rgb(239, 240, 243)"
                      : props.scrollValue <= 5
                      ? navbarToggle
                        ? "rgb(239, 240, 243)"
                        : "rgb(44, 44, 52)"
                      : "rgb(239, 240, 243)"
                    : "rgb(239, 240, 243)"
                }
                d="m432.88 255.68c2.4213-0.23074 3.3833-0.56953 5.7181-2.0136 2.6558-1.6427 4.1983-3.894 4.9049-7.1591 0.5385-2.4882 0.18591-6.3892-0.77238-8.5467-1.1573-2.6055-4.6796-5.6169-8.0966-6.922-2.809-1.0729-6.3095-2.5241-8.6119-3.5701-1.36-0.61786-3.2882-1.4938-4.285-1.9465-2.126-0.96557-5.4093-3.2894-7.009-4.9607-1.1938-1.2472-1.3241-1.3205-1.6734-0.94007-0.60242 0.65603-0.0547 2.1277 1.3464 3.6175 2.3077 2.4538 5.7867 4.4777 11.255 6.5475 1.4607 0.55289 3.4388 1.3909 4.3958 1.8623 0.95705 0.47137 2.4406 1.0987 3.2969 1.3942 4.5079 1.5553 7.3516 4.4032 8.0774 8.0896 0.11202 0.56889 0.16989 1.9893 0.12852 3.1564-0.0703 1.9848-0.12002 2.2177-0.76894 3.5995-1.9592 4.1722-5.3494 5.7958-12.115 5.8018-2.3393 3e-3 -3.3454-0.28923-6.5624-1.9001-2.916-1.4602-4.8583-3.0058-6.8582-5.4575-0.83585-1.0248-1.28-1.4176-1.6026-1.4176-0.49271 0-1.1789 0.6338-1.1789 1.0889 0 0.3856 1.9437 2.8999 2.9541 3.8213 2.2152 2.0201 3.7248 3.1039 5.6623 4.0652 2.6613 1.3205 4.0626 1.7698 6.1277 1.9648 1.7579 0.16601 2.2512 0.15081 5.6674-0.1748zm-384.8-0.21593c2.6621-0.37288 5.3101-1.5181 8.5373-3.6922 1.2956-0.87282 1.6408-1.2089 1.8079-1.7603 0.23243-0.76703 0.29562-20.359 0.07616-23.615-0.14601-2.1662-0.45692-2.7605-1.3252-2.5328-0.98954 0.25954-0.96311-0.14295-0.83214 12.668l0.1214 11.876-0.50244 0.6503c-0.59708 0.77281-2.514 2.0293-4.0408 2.6488-2.7759 1.1261-4.2581 1.428-7.5296 1.5337-3.6687 0.11854-4.425 3e-3 -8.3225-1.267-3.0104-0.98124-3.9422-1.422-5.875-2.7786l-1.2177-0.85469-0.01102-18.718c-0.0059-10.295 0.03734-20.461 0.09646-22.591 0.10689-3.8533 0.1099-3.8756 0.58765-4.3679 1.1912-1.2273 6.2921-4.4249 8.1728-5.1234 1.305-0.48465 4.1613-0.68824 6.8476-0.48802 3.1727 0.23644 5.9487 1.1185 9.3638 2.9751 2.7218 1.4798 3.3768 1.6645 3.5686 1.0064 0.31418-1.0781-1.0643-2.3894-4.0673-3.8693-5.5127-2.7165-8.9986-3.2935-14.098-2.3337-3.8567 0.72589-5.2534 1.3184-8.2995 3.5208-2.3618 1.7076-3.83 3.0052-4.0218 3.5546-0.0878 0.25151-0.21742 10.913-0.28804 23.693-0.14413 26.083-0.24956 23.956 1.2422 25.058 2.6332 1.9455 6.4884 3.7149 9.8461 4.519 2.7348 0.65488 6.7351 0.76828 10.164 0.28805zm93.711 0.21212c4.7227-0.52157 7.7464-1.9699 10.882-5.2124 3.0115-3.1144 4.2207-5.5693 5.3863-10.935 0.63259-2.9121 0.83995-9.2165 0.59376-18.052-0.21853-7.8432-0.4818-10.838-1.1114-12.642-1.1814-3.3861-4.992-8.8179-7.4903-10.677-2.0122-1.4974-6.4598-3.2263-9.5761-3.7226-2.1263-0.33858-5.9222-0.13645-7.685 0.40926-1.612 0.499-4.7077 2.0791-5.8086 2.9647-1.4926 1.2007-1.3798-1.2106-1.2731 27.234 0.0586 15.59 0.16343 25.553 0.27239 25.864 0.25166 0.71914 1.4905 1.8775 2.7287 2.5516 1.4285 0.77765 5.0233 2.0573 6.2724 2.2328 1.5808 0.22215 4.7259 0.21536 6.8093-0.0147zm-5.5211-2.1072c-1.9775-0.40253-5.3844-1.3788-6.1358-1.7583-0.50367-0.25432-1.2042-0.74874-1.5568-1.0987l-0.64106-0.63626-0.0307-12.106c-0.0169-6.658-0.0581-17.825-0.0915-24.816-0.0599-12.492-0.0546-12.717 0.30538-13.104 1.2244-1.315 5.6879-3.2339 8.1505-3.504 2.5966-0.28481 6.9497 0.61535 9.8904 2.0452 2.0351 0.9895 5.5822 4.275 7.0748 6.5531 1.9325 2.9494 2.7377 5.7881 3.0485 10.747 0.28835 4.6007 0.2768 19.614-0.0167 21.572-0.23801 1.5882-1.7349 6.0348-2.724 8.0917-0.80946 1.6835-3.459 4.709-4.6354 5.2933-4.8872 2.4273-5.6881 2.6629-9.341 2.748-1.5614 0.0364-3.045 0.0242-3.2968-0.0269zm53.929 1.8734c0.15682-0.24386 0.28512-0.65289 0.28512-0.90895 0-0.51641-0.80282-2.6943-2.1119-5.7291-1.6093-3.7308-4.8753-12.158-5.7977-14.961-0.50565-1.536-1.252-3.6454-1.6587-4.6877-0.40662-1.0423-1.0504-2.8375-1.4305-3.9895s-0.98542-2.8394-1.3451-3.7498c-0.35968-0.91042-0.87236-2.4364-1.1393-3.3911s-1.0482-3.3066-1.7361-5.2266c-2.0424-5.7005-4.1155-11.909-4.8082-14.4-0.3567-1.2826-0.77831-2.6053-0.93692-2.9394-0.50438-1.0623-1.774-1.0529-1.8929 0.0141-0.0543 0.48625 3.2564 11.61 4.355 14.633 1.5715 4.3241 4.1846 11.894 6.3346 18.352 0.87669 2.6331 1.9004 5.5504 2.2748 6.4829 0.37447 0.93255 0.87104 2.3239 1.1035 3.0919 0.23248 0.76797 0.99525 2.7428 1.6951 4.3884 0.69982 1.6457 1.5212 3.6205 1.8254 4.3885 1.029 2.5983 3.5804 8.3308 3.8743 8.7046 0.38775 0.49322 0.76159 0.46898 1.1094-0.0718zm35.53 0.12985c0.64005-0.69705 0.38658-1.6911-1.6667-6.5361-1.2388-2.9232-3.8335-9.7038-5.7372-14.993-0.78978-2.1942-1.6824-4.6178-1.9835-5.3858-0.30123-0.76798-0.83652-2.3025-1.1896-3.4101-0.35308-1.1076-0.97102-2.858-1.3732-3.8898-0.40218-1.0318-0.91597-2.5492-1.1417-3.372-0.22578-0.82283-0.97002-3.022-1.6539-4.8871-1.8648-5.0859-3.201-8.9848-4.4097-12.866-1.6171-5.193-1.5822-5.1037-2.0909-5.3562-0.65855-0.32681-1.1375-0.28357-1.3361 0.12061-0.17226 0.35054 0.78194 4.2249 1.3326 5.4111 0.13343 0.28742 0.54845 1.5997 0.92222 2.9163l0.67963 2.3937-1.4104 4.189c-0.77577 2.3039-1.7802 5.0866-2.232 6.1837-0.7972 1.9356-1.093 2.7523-3.2154 8.8766-0.55126 1.5908-1.2136 3.431-1.4717 4.0892-0.77091 1.9655-2.6737 7.4216-3.4238 9.8176-0.38526 1.2306-0.76164 2.3453-0.8364 2.477-0.0845 0.14903-0.30162-0.16871-0.57467-0.84122-0.51878-1.2777-3.1692-8.9786-3.6329-10.556-0.17745-0.60339-0.56307-1.6806-0.85692-2.3937-0.29386-0.71312-1.5566-4.3485-2.806-8.0787-1.2494-3.7302-2.6054-7.7246-3.0132-8.8766-0.40782-1.152-1.1458-3.4409-1.64-5.0866-1.2762-4.25-3.2324-9.8561-3.5889-10.285-0.63027-0.75848-1.913-0.65608-1.913 0.15272 0 0.39372 4.0778 12.841 5.3454 16.316 0.32013 0.8777 1.1766 3.4808 1.9032 5.7848 1.9369 6.1413 2.6728 8.2906 3.7906 11.071 0.55135 1.3714 1.3078 3.436 1.681 4.5879 1.2288 3.7932 2.7406 7.8379 3.7639 10.07 0.85998 1.876 1.077 2.2063 1.4837 2.2577 0.34796 0.0441 0.56128-0.0809 0.79136-0.46333 0.38013-0.63185 2.1186-5.3625 3.627-9.8699 0.60581-1.8102 1.5921-4.5031 2.1916-5.9842 0.59959-1.4811 1.282-3.2764 1.5164-3.9895 0.23444-0.71313 0.75662-2.1942 1.1604-3.2913 0.40376-1.0971 0.91825-2.6231 1.1433-3.3911 0.22505-0.76797 0.61057-1.8346 0.85674-2.3703 0.24616-0.53568 0.76468-1.9719 1.1523-3.1916 0.79329-2.4964 1.2715-3.7911 1.3612-3.6854 0.26005 0.30649 4.3378 12.076 5.3096 15.325 0.37628 1.258 1.258 3.7265 1.9594 5.4856 0.70134 1.7591 2.0862 5.4873 3.0775 8.2849 0.99129 2.7976 2.0981 5.7737 2.4595 6.6135 0.36142 0.8398 0.81638 1.9618 1.011 2.4934 0.61983 1.6926 3.3287 7.7306 3.6319 8.0956 0.36087 0.43428 0.67195 0.44552 1.0463 0.0378zm74.92 0.18792c0.42851-0.17913 2.8373-5.5177 4.4204-9.7969 0.74125-2.0037 1.5688-4.1141 1.839-4.6897 0.2701-0.57564 1.3668-3.3804 2.4369-6.2329l1.9457-5.1863 19.961-0.1031 1.0397 3.4426c0.57188 1.8934 1.2421 4.2056 1.4894 5.1382 0.56376 2.1259 1.5631 5.2871 2.4909 7.8792 0.39269 1.0971 1.183 3.3223 1.7562 4.945 1.3402 3.7934 1.5943 4.212 2.6062 4.2923 0.92828 0.0737 1.0888-0.1994 0.7642-1.2999-0.43042-1.4592-3.514-10.756-4.3861-13.223-0.48466-1.3714-1.7563-5.5513-2.8259-9.2887-1.0695-3.7374-2.4727-8.4051-3.1181-10.373-0.64544-1.9676-1.5959-5.1034-2.112-6.9685-0.5162-1.8651-1.4403-4.8722-2.0537-6.6824-0.61338-1.8102-1.6838-5.0866-2.3788-7.2808-0.69498-2.1942-1.433-4.371-1.6402-4.8373-0.33536-0.75488-0.44599-0.84776-1.0101-0.84776-1.0082 0-1.3988 0.65957-2.4612 4.1567-0.52206 1.7183-1.7924 5.6375-2.823 8.7094-1.0305 3.0719-2.1435 6.4829-2.4731 7.58-0.32962 1.0971-1.3194 3.8349-2.1994 6.084s-1.9912 5.2562-2.4693 6.6824c-0.47819 1.4262-1.9687 5.4656-3.3124 8.9764-1.3436 3.5108-2.9478 7.7296-3.565 9.3753-0.61713 1.6457-1.6926 4.1931-2.3899 5.661-0.6973 1.4679-1.2678 2.8073-1.2678 2.9764 0 0.76701 0.92247 1.2515 1.7358 0.91159zm12.047-28.339c-0.32738-0.0471-0.59445-0.10251-0.59345-0.12304 0-0.0204 0.62881-1.6978 1.395-3.7275 2.0623-5.4628 3.5323-9.8405 6.021-17.931l2.233-7.2591 0.223 0.96456c0.12265 0.53049 0.57973 1.9121 1.0157 3.0702 0.43602 1.1581 0.97122 2.8237 1.1893 3.7014 0.21818 0.87769 0.91917 3.1667 1.5578 5.0866 1.2921 3.8846 2.1636 6.794 3.0175 10.073 0.31418 1.2068 0.85412 3.0435 1.1999 4.0814 0.34571 1.038 0.58428 1.9356 0.53005 1.9947-0.11725 0.12795-16.927 0.19251-17.789 0.0684zm-206.52 28.081c0.32021-9e-3 0.7117-0.15713 0.86999-0.32952 0.34782-0.37882 0.3761-1.1537 0.0528-1.4459-0.22483-0.20323-10.714-0.4739-18.938-0.48868-3.2623-6e-3 -3.3317-0.0146-3.4295-0.43913-0.05487-0.23822-0.10121-13.298-0.10292-29.021-0.0018-20.972-0.05835-28.66-0.2103-28.86-0.25975-0.34087-1.5561-0.35757-1.7512-0.0226-0.17809 0.30584-0.29998 49.931-0.13645 55.559 0.10097 3.4749 0.16396 4.1071 0.44716 4.4882 0.32714 0.44025 0.38003 0.44435 6.9854 0.54333 5.4724 0.082 13.534 0.09 16.213 0.0162zm185.82-0.42235c0.38338-0.51562 0.4049-0.7973 0.0951-1.2435-0.20393-0.29366-1.0707-0.34409-7.9216-0.46101-4.2309-0.0722-9.1996-0.13396-11.041-0.13725-1.9788-4e-3 -3.394-0.0858-3.4594-0.20113-0.0607-0.1073-0.0967-13.11-0.0795-28.895 0.0218-20.026-0.0277-28.82-0.16429-29.098-0.23078-0.46964-1.4776-0.56251-1.804-0.13435-0.30586 0.40143-0.39935 54.163-0.10134 58.315 0.16751 2.3346-0.44481 2.1458 7.3398 2.2628 3.7103 0.0558 9.0109 0.0848 11.779 0.0647 4.9343-0.0361 5.0397-0.0453 5.3574-0.47257zm53.339 0.33821c0.32572-0.25936 0.32578-0.30338 0-1.4462-0.52451-1.8438-2.7581-8.6825-3.26-9.9815-0.24879-0.644-2.0635-6.4221-4.0328-12.84-1.9692-6.4181-4.3342-14.048-5.2555-16.955-0.92135-2.9073-1.9519-6.2675-2.2901-7.467-0.33819-1.1995-0.77765-2.6357-0.97671-3.1916-0.19898-0.55588-0.82119-2.5759-1.3827-4.489-1.1235-3.828-1.3316-4.2932-2.0022-4.4765-0.61325-0.16763-1.3973 0.18036-1.3951 0.61917 0 0.19473 1.1992 4.2139 2.6627 8.9314 1.4634 4.7176 3.0599 9.9239 3.5476 11.57 0.48775 1.6457 1.3792 4.4284 1.9809 6.1837 0.60177 1.7554 2.0174 6.2884 3.1458 10.073 1.1285 3.785 2.3859 7.9141 2.7941 9.1758 2.1826 6.7452 4.1701 12.755 4.439 13.423 0.41432 1.0292 1.3303 1.4232 2.0242 0.87064zm18.509-30.265c7e-3 -17.697-0.0587-30.311-0.15536-30.457-0.22577-0.34003-1.1333-0.31487-1.4596 0.0404-0.21916 0.23872-0.29411 1.7951-0.4252 8.8268-0.22069 11.847-0.11982 51.314 0.13208 51.645 0.23995 0.31502 0.84726 0.42916 1.4444 0.27157l0.45352-0.11969zm3.3574 30.28 0.42818-0.24641 0.0105-30.065c9e-3 -23.996-0.0362-30.127-0.22167-30.37-0.30797-0.40419-1.3598-0.38973-1.6743 0.023-0.20756 0.27241-0.25341 4.4539-0.27175 24.785-0.0119 13.451 0.0211 27.001 0.0731 30.11 0.0926 5.5008 0.10549 5.6578 0.47825 5.822 0.52859 0.23283 0.68516 0.22508 1.1776-0.0582zm12.252-0.0525c4.4323-0.18923 8.9821-1.0741 11.325-2.2024 1.529-0.73645 3.9819-2.5194 4.9961-3.6316 1.8307-2.0076 2.9346-5.2695 3.0867-9.1211 0.11085-2.8078-0.12798-4.2248-1.1768-6.9816-0.60038-1.578-0.86151-1.9904-2.1583-3.4074-2.4519-2.6794-4.4968-3.6941-10.05-4.9869l-3.2766-0.76284 1.9955-0.54126c5.7229-1.5522 9.4574-4.1372 11.24-7.7805 0.66385-1.3565 1.2847-3.8509 1.2847-5.1616 0-1.1668-0.58019-3.6792-1.1134-4.8211-1.7987-3.8521-5.763-7.9009-9.0592-9.2521-3.3421-1.3701-7.8976-2.2335-12.748-2.4162l-3.4142-0.12861-0.45379 0.49426-0.45384 0.49424-0.13776 5.8699c-0.0757 3.2284-0.11875 8.518-0.0956 11.754 0.0231 3.2365 0.033 14.001 0.0224 23.922-0.0178 16.358 8e-3 18.07 0.27671 18.394 0.44078 0.5305 2.4595 0.58483 9.9101 0.26672zm-6.0862-2.2629-1.8316-0.12514-0.0224-8.2782c-0.0126-4.553-0.0834-9.997-0.15782-12.098-0.0745-2.1008-0.0778-4.4446-7e-3 -5.2084l0.12805-1.3888 1.9068-0.10598c4.0447-0.22484 11.575 0.77523 14.179 1.8832 2.6556 1.1297 5.0476 2.7236 6.6205 4.4114 0.83696 0.89816 1.6547 2.4482 2.1778 4.1286 0.36531 1.1733 0.39335 1.5526 0.29465 3.9895-0.0627 1.5437-0.23487 3.1529-0.40383 3.7708-0.503 1.8388-1.8265 3.8253-3.4666 5.2034-0.99359 0.83486-4.1692 2.3301-6.1384 2.8903-2.6494 0.75374-9.163 1.2086-13.279 0.9273zm-1.8316-42.265c0-6.9938 0.0205-13.109 0.0455-13.59l0.0455-0.87346 1.8774 0.13917c5.7651 0.42736 11.211 1.7346 14.286 3.4288 1.0067 0.55472 3.0627 2.604 4.1438 4.1302 1.7548 2.4772 2.6151 5.4052 2.2264 7.5773-0.28441 1.5895-1.1583 3.8531-1.7952 4.6502-0.73727 0.92278-2.4223 2.3359-3.738 3.1349-1.9767 1.2004-6.5954 2.8734-9.4907 3.4378-1.4808 0.28862-5.2965 0.66379-6.8684 0.67528l-0.73265 5e-3v-12.716zm-294.77 44.195c0.28749-0.58505 0.28406-59.034-0.0035-59.858-0.15536-0.44501-0.30304-0.5438-0.813-0.5438-0.34273 0-0.7238 0.13207-0.84681 0.29348-0.17256 0.22645-0.24613 6.4129-0.32203 27.079-0.10935 29.771-0.09298 32.858 0.1762 33.218 0.10248 0.13713 0.50302 0.24933 0.89009 0.24933 0.53729 0 0.75468-0.10365 0.91906-0.43812zm3.9371 0.20599c0.07242-0.12768 0.13028-13.68 0.12852-30.116-0.0027-23.801-0.05033-29.946-0.23492-30.188-0.24615-0.32302-1.2211-0.40599-1.6102-0.13704-0.18633 0.1288-0.24119 6.1634-0.27473 30.224-0.03706 26.539-0.0097 30.086 0.23282 30.253 0.38719 0.26679 1.6007 0.24148 1.7585-0.0366zm180.95-0.11695c0.18869-0.45849 0.30798-55.12 0.12674-58.097l-0.13966-2.294h-0.81105c-0.73028 0-0.82443 0.0548-0.94589 0.54935-0.0742 0.30215-0.16183 11.523-0.19469 24.934-0.0787 32.108-0.0736 34.497 0.0744 34.907 0.0935 0.25923 0.33443 0.34908 0.93613 0.34908 0.59497 0 0.84857-0.0928 0.95407-0.34908zm4.0629-29.807c0.0515-33.529 0.16039-30.771-1.2074-30.645-0.57958 0.0533-0.67195 0.13788-0.77917 0.71358-0.067 0.35923-0.13623 13.929-0.15404 30.154-0.031 28.25-0.0184 29.51 0.29834 29.716 0.18183 0.11807 0.66034 0.19264 1.0633 0.1657l0.73266-0.0489zm83.822 29.847c0.2561-0.27895 0.24747-0.4097-0.0892-1.3464-1.3654-3.7991-6.5746-20.014-10.138-31.557-0.44032-1.4262-1.3896-4.4333-2.1094-6.6824-0.71979-2.2491-1.5898-5.1215-1.9333-6.3832-0.67131-2.4657-4.1299-13.02-4.5713-13.949-0.16336-0.34395-0.46229-0.60345-0.76875-0.66725-0.60591-0.12614-1.3449 0.14852-1.3422 0.49883 0 0.13987 0.53736 1.9598 1.1917 4.0443 0.6544 2.0845 1.8172 5.8546 2.584 8.3779 0.76683 2.5234 1.5102 4.8347 1.6518 5.1364 0.14172 0.30165 0.54127 1.5135 0.88791 2.6929 0.34663 1.1795 1.3831 4.5232 2.3032 7.4306 2.4687 7.8008 5.2403 16.605 5.871 18.651 0.30441 0.9874 0.95362 2.9173 1.4425 4.2887 0.48901 1.3714 1.0291 3.032 1.2002 3.6903 0.48948 1.8823 1.8948 5.5597 2.2297 5.8346 0.41861 0.3437 1.2484 0.31262 1.5902-0.0596zm-157.39-4.604c0.44295-0.58128 0.22677-1.7133-0.79504-4.1632-0.5491-1.3165-1.502-3.785-2.1176-5.4856-0.61554-1.7005-2.3182-6.3835-3.7836-10.407-1.4654-4.0232-2.6644-7.4196-2.6644-7.5477 0-0.12806-0.36316-1.2348-0.80703-2.4594-0.44385-1.2246-1.1897-3.5041-1.6575-5.0656-0.46776-1.5615-1.0987-3.4914-1.4021-4.2887-0.95099-2.4991-3.9379-11.328-4.5729-13.516-0.76745-2.6452-1.3497-3.3297-2.4433-2.8726-0.49336 0.20617-0.33152 1.2298 0.70627 4.4668 2.6124 8.1484 3.2249 10.001 3.8442 11.626 0.36726 0.96334 1.1633 3.2523 1.769 5.0866s1.6742 5.0086 2.3744 7.054c0.70025 2.0454 1.2732 3.7842 1.2732 3.8639 0 0.0797 1.2036 3.433 2.6746 7.4516 3.1844 8.6993 5.8894 15.468 6.5273 16.333 0.25648 0.3478 0.77985 0.31097 1.0744-0.0756zm35.594-0.11834c0.41843-0.6506 0.35241-1.2968-0.28079-2.7483-0.92097-2.1111-1.9146-4.7653-3.9204-10.472-1.0411-2.9622-2.4667-6.9118-3.168-8.7769-0.70131-1.8651-1.523-4.199-1.826-5.1863-0.30301-0.9874-0.81531-2.5134-1.1384-3.3911-0.32311-0.87769-0.79389-2.3139-1.0462-3.1916-0.41138-1.431-1.4481-4.4155-4.2785-12.317-0.50096-1.3984-1.3151-3.8344-1.8093-5.4132-1.0908-3.4852-1.358-4.0718-1.9254-4.2269-1.4468-0.39547-1.4705 0.78945-0.0963 4.8022 0.52601 1.536 1.4715 4.4084 2.1011 6.3832 0.62959 1.9748 1.6833 5.0268 2.3416 6.7822 0.65832 1.7554 1.5272 4.2239 1.931 5.4855 0.40371 1.2617 0.95591 2.8774 1.2271 3.5906 0.27113 0.71312 1.0571 2.9813 1.7465 5.0405 0.68937 2.0592 1.7412 5.0214 2.3372 6.5827 0.59612 1.5613 1.4768 4.0057 1.9571 5.4319 0.99074 2.942 3.7491 9.9433 4.4205 11.22 0.5031 0.95688 0.98426 1.0933 1.4272 0.40444zm-103.94-2.7352c0.12749-0.25944 0.1896-7.8008 0.1896-23.025 0-19.738-0.0347-22.677-0.27152-22.935-0.34474-0.37544-0.86217-0.22976-1.4005 0.39429l-0.42133 0.48845-7e-3 21.884c-4e-3 12.036 0.0564 22.128 0.1332 22.427 0.13105 0.50988 0.8663 1.1261 1.3649 1.1441 0.12238 4e-3 0.30782-0.16564 0.41211-0.37787zm-98.889-1.6284c0.14662-0.29839 0.22847-6.1622 0.28513-20.428 0.07194-18.112 0.05179-20.039-0.21229-20.327-0.62061-0.6759-1.3911-0.0963-1.7382 1.3077-0.14971 0.60552-0.21806 6.2886-0.23861 19.842l-0.02876 18.993 0.44402 0.51519c0.53891 0.62527 1.2076 0.66871 1.4887 0.0967zm205.1-1.5331c0.4525-0.97035 2.7245-7.1524 3.8532-10.484 0.48895-1.4434 1.2334-3.4772 1.6543-4.5194 0.42086-1.0423 1.2909-3.3312 1.9334-5.0866 0.64248-1.7554 1.5732-4.2688 2.0684-5.5853 0.49521-1.3165 1.3776-3.8748 1.9609-5.685 0.58328-1.8102 1.5128-4.4583 2.0657-5.8845 0.55281-1.4262 1.3572-3.7152 1.7874-5.0866 0.43029-1.3714 1.1246-3.3748 1.5429-4.452 0.87364-2.2498 0.9104-2.9952 0.15246-3.0904-0.79177-0.0995-1.1624 0.25845-1.8664 1.8028-0.9734 2.135-5.1091 13.67-7.1484 19.937-0.55948 1.7196-1.603 4.592-2.3188 6.3832-1.8007 4.5054-4.7496 12.549-5.6548 15.425-0.74687 2.3724-1.0251 3.068-1.1544 2.8866-0.13438-0.18833-2.0127-5.3504-2.9012-7.9732-0.50175-1.4811-1.2063-3.5457-1.5656-4.5879-0.35936-1.0422-1.3487-3.9147-2.1985-6.3832-0.84987-2.4685-2.0029-5.7898-2.5623-7.3806-1.9502-5.5458-2.6683-7.6941-3.2824-9.8198-0.34-1.177-1.109-3.5109-1.7088-5.1863-0.59982-1.6755-1.1463-3.2896-1.2145-3.5869-0.39911-1.7418-2.4232-2.168-2.3193-0.48825 0.0235 0.38029 0.97644 3.4154 2.1176 6.7446 1.1412 3.3293 2.2224 6.5469 2.4027 7.1503 0.1803 0.60342 0.68898 2.0621 1.1304 3.2415 0.44139 1.1794 1.1633 3.2889 1.6042 4.6877 1.4407 4.5711 2.4958 7.6966 3.2419 9.6029 1.0911 2.7883 2.0726 5.532 2.5409 7.1031 0.47627 1.5978 2.4128 6.8396 3.368 9.1167 1.0708 2.5526 1.6984 2.8572 2.4714 1.1994zm-110.16-1.4894c0.22749-0.3843 0.2628-3.0218 0.24566-18.349-0.011-9.8449-0.0762-17.999-0.1448-18.12-0.21124-0.37222-0.94229-0.1147-1.344 0.47345-0.34117 0.49948-0.39716 0.96461-0.5282 4.3884-0.18291 4.7793 3e-3 29.477 0.22981 30.559 0.15282 0.72887 0.72572 1.496 1.1172 1.496 0.0873 0 0.27821-0.20196 0.42434-0.44882zm-98.665-2.7428c0.17918-0.38709 0.23143-3.6956 0.23353-14.787 0.0027-15.584 0.04744-14.941-1.0141-14.651-0.32369 0.0885-0.58229 0.39337-0.82256 0.96979-0.3339 0.80104-0.35063 1.4745-0.35446 14.265-0.0033 11.464 0.03556 13.508 0.26686 13.995 0.44871 0.94501 1.301 1.0497 1.6908 0.20761zm422.15-6.0859c0.17121-0.99393-0.0277-1.4136-1.3591-2.8707-0.97994-1.0723-1.7121-1.6184-3.7518-2.7988-2.4501-1.4178-6.7126-3.4286-9.7373-4.5933-2.1776-0.83863-7.7143-3.8033-9.5581-5.1182-1.028-0.73305-2.3704-1.985-3.696-3.4469-1.9471-2.1474-2.098-2.2713-2.3353-1.9179-1.1207 1.6692 1.673 5.3474 6.3566 8.369 2.7827 1.7952 5.0085 2.9207 9.2328 4.6685 3.9583 1.6377 7.1166 3.0443 8.3336 3.7115 1.7718 0.97132 3.9158 2.6321 4.8834 3.7826 1.0474 1.2454 1.4445 1.2976 1.6311 0.2142zm-0.39182-4.7997c0.66622-0.72553 0.11492-2.0078-1.3947-3.2441-2.3579-1.9309-4.2125-2.9114-11.413-6.0338-4.3692-1.8946-6.3913-2.9479-8.3904-4.3703-3.8629-2.7488-5.3362-4.346-6.3973-6.9358-0.58758-1.434-0.57656-4.5918 0.0205-5.8175 1.214-2.4931 4.8178-5.2544 7.7167-5.9127 2.0251-0.45988 5.0604-0.67495 6.6861-0.47376 3.1357 0.38804 6.809 1.8365 8.4455 3.3303 1.6639 1.5188 3.0367 2.4154 3.4478 2.2519 0.55889-0.22224 0.97591-1.1138 0.72606-1.5524-0.71148-1.249-5.7913-4.8023-7.754-5.4238-2.4867-0.78748-3.3692-0.90191-6.9734-0.90421-4.1572-3e-3 -5.7442 0.32068-8.2146 1.6735-1.7357 0.95045-4.0502 2.9304-4.8972 4.1893-1.8882 2.8067-2.339 6.9566-1.0808 9.9498 0.54548 1.2977 2.5121 4.082 3.6616 5.1839 2.3338 2.2373 6.0435 4.3964 11.905 6.9285 2.2162 0.95747 4.4157 1.9524 4.8878 2.211 0.47213 0.25863 1.4048 0.69418 2.0724 0.96792 1.8639 0.76409 3.5269 1.7837 5.0365 3.0881 0.75548 0.65283 1.4296 1.1916 1.498 1.1973 0.0683 6e-3 0.2538-0.13067 0.41208-0.30308z"
                strokeWidth=".19114"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="right_nav">
        <h2
          onClick={props.handleClickToScrollToHome}
          style={{
            color:
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1200
                  ? props.scrollValue <= 1
                    ? cartIsActive ||
                      location.pathname.includes("account") ||
                      location.pathname.includes("admin") ||
                      location.pathname.includes("privacy") ||
                      location.pathname.includes("termsandconditions")
                      ? "rgb(239, 240, 243)"
                      : "rgb(44, 44, 52)"
                    : "rgb(239, 240, 243)"
                  : "rgb(239, 240, 243)"
                : props.currentScreenSize >= 1200
                ? props.scrollValue <= 1
                  ? cartIsActive ||
                    location.pathname.includes("account") ||
                    location.pathname.includes("admin") ||
                    location.pathname.includes("privacy") ||
                    location.pathname.includes("termsandconditions")
                    ? "rgb(239, 240, 243)"
                    : "rgb(44, 44, 52)"
                  : "rgb(239, 240, 243)"
                : "rgb(239, 240, 243)",
          }}
        >
          HOME
        </h2>
        <h2
          onClick={props.handleClickToScrollToTreatments}
          style={{
            color:
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1200
                  ? props.scrollValue <= 1
                    ? cartIsActive ||
                      location.pathname.includes("account") ||
                      location.pathname.includes("admin") ||
                      location.pathname.includes("privacy") ||
                      location.pathname.includes("termsandconditions")
                      ? "rgb(239, 240, 243)"
                      : "rgb(44, 44, 52)"
                    : "rgb(239, 240, 243)"
                  : "rgb(239, 240, 243)"
                : props.currentScreenSize >= 1200
                ? props.scrollValue <= 1
                  ? cartIsActive ||
                    location.pathname.includes("account") ||
                    location.pathname.includes("admin") ||
                    location.pathname.includes("privacy") ||
                    location.pathname.includes("termsandconditions")
                    ? "rgb(239, 240, 243)"
                    : "rgb(44, 44, 52)"
                  : "rgb(239, 240, 243)"
                : "rgb(239, 240, 243)",
          }}
        >
          Consultation Services
        </h2>
        <h2
          style={{
            color:
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1200
                  ? props.scrollValue <= 1
                    ? cartIsActive ||
                      location.pathname.includes("account") ||
                      location.pathname.includes("admin") ||
                      location.pathname.includes("privacy") ||
                      location.pathname.includes("termsandconditions")
                      ? "rgb(239, 240, 243)"
                      : "rgb(44, 44, 52)"
                    : "rgb(239, 240, 243)"
                  : "rgb(239, 240, 243)"
                : props.currentScreenSize >= 1200
                ? props.scrollValue <= 1
                  ? cartIsActive ||
                    location.pathname.includes("account") ||
                    location.pathname.includes("admin") ||
                    location.pathname.includes("privacy") ||
                    location.pathname.includes("termsandconditions")
                    ? "rgb(239, 240, 243)"
                    : "rgb(44, 44, 52)"
                  : "rgb(239, 240, 243)"
                : "rgb(239, 240, 243)",
          }}
          onClick={props.handleClickToScrollToAddOns}
        >
          Products
        </h2>
        <h2
          onClick={props.handleClickToScrollToInstagram}
          style={{
            color:
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1200
                  ? props.scrollValue <= 1
                    ? cartIsActive ||
                      location.pathname.includes("account") ||
                      location.pathname.includes("admin") ||
                      location.pathname.includes("privacy") ||
                      location.pathname.includes("termsandconditions")
                      ? "rgb(239, 240, 243)"
                      : "rgb(44, 44, 52)"
                    : "rgb(239, 240, 243)"
                  : "rgb(239, 240, 243)"
                : props.currentScreenSize >= 1200
                ? props.scrollValue <= 1
                  ? cartIsActive ||
                    location.pathname.includes("account") ||
                    location.pathname.includes("admin") ||
                    location.pathname.includes("privacy") ||
                    location.pathname.includes("termsandconditions")
                    ? "rgb(239, 240, 243)"
                    : "rgb(44, 44, 52)"
                  : "rgb(239, 240, 243)"
                : "rgb(239, 240, 243)",
          }}
        >
          FOLLOW US
        </h2>
        <div
          className="nav_login_container"
          style={{
            background:
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 768 &&
                  props.initialScreenHeight >= props.initialScreenSize
                  ? "rgb(239, 240, 243)"
                  : props.initialScreenSize >= 600
                  ? props.initialScreenHeight >= props.initialScreenSize
                    ? "rgb(239, 240, 243)"
                    : cartIsActive ||
                      location.pathname.includes("account") ||
                      location.pathname.includes("admin") ||
                      location.pathname.includes("privacy") ||
                      location.pathname.includes("termsandconditions")
                    ? "rgb(239, 240, 243)"
                    : props.scrollValue <= 5
                    ? "rgb(44, 44, 52)"
                    : "rgb(239, 240, 243)"
                  : "rgb(239, 240, 243)"
                : props.currentScreenSize >= 768 &&
                  props.currentScreenHeight >= props.currentScreenSize
                ? "rgb(239, 240, 243)"
                : props.currentScreenSize >= 600
                ? props.currentScreenHeight >= props.currentScreenSize
                  ? "rgb(239, 240, 243)"
                  : cartIsActive ||
                    location.pathname.includes("account") ||
                    location.pathname.includes("admin") ||
                    location.pathname.includes("privacy") ||
                    location.pathname.includes("termsandconditions")
                  ? "rgb(239, 240, 243)"
                  : props.scrollValue <= 5
                  ? "rgb(44, 44, 52)"
                  : "rgb(239, 240, 243)"
                : "rgb(239, 240, 243)",
          }}
        >
          <Link
            onClick={handleLogoutClicked}
            className="nav_sign_in_link_container"
            to={
              location.pathname.includes("/account/clientprofile")
                ? location.pathname
                : location.pathname.includes("/admin/")
                ? location.pathname
                : props.adminDummyToken
                ? "/admin/menu"
                : "/account/login"
            }
            style={{
              pointerEvents:
                logoutClicked || cancelAppointmentClicked ? "none" : "auto",
              paddingLeft:
                userAuthenticated || props.adminDummyToken
                  ? dummyToken && dummyToken.picture
                    ? "0.5rem"
                    : "1rem"
                  : "0rem",
            }}
          >
            {userAuthenticated || props.adminDummyToken ? (
              <span
                className="fa-layers fa-fw letter_circle"
                style={{
                  background:
                    dummyToken && dummyToken.picture
                      ? "transparent"
                      : props.currentScreenSize === ""
                      ? props.initialScreenSize >= 768 &&
                        props.initialScreenHeight >= props.initialScreenSize
                        ? "rgb(44, 44, 52)"
                        : props.initialScreenSize >= 600
                        ? props.initialScreenHeight >= props.initialScreenSize
                          ? "rgb(44, 44, 52)"
                          : cartIsActive ||
                            location.pathname.includes("account") ||
                            location.pathname.includes("admin") ||
                            location.pathname.includes("privacy") ||
                            location.pathname.includes("termsandconditions")
                          ? "rgb(44, 44, 52)"
                          : props.scrollValue <= 5
                          ? "rgb(239, 240, 243)"
                          : "rgb(44, 44, 52)"
                        : "rgb(44, 44, 52)"
                      : props.currentScreenSize >= 768 &&
                        props.currentScreenHeight >= props.currentScreenSize
                      ? "rgb(44, 44, 52)"
                      : props.currentScreenSize >= 600
                      ? props.currentScreenHeight >= props.currentScreenSize
                        ? "rgb(44, 44, 52)"
                        : cartIsActive ||
                          location.pathname.includes("account") ||
                          location.pathname.includes("admin") ||
                          location.pathname.includes("privacy") ||
                          location.pathname.includes("termsandconditions")
                        ? "rgb(44, 44, 52)"
                        : props.scrollValue <= 5
                        ? "rgb(239, 240, 243)"
                        : "rgb(44, 44, 52)"
                      : "rgb(44, 44, 52)",
                }}
              >
                <p
                  style={{
                    color:
                      props.currentScreenSize === ""
                        ? props.initialScreenSize >= 768 &&
                          props.initialScreenHeight >= props.initialScreenSize
                          ? "rgb(239, 240, 243)"
                          : props.initialScreenSize >= 600
                          ? props.initialScreenHeight >= props.initialScreenSize
                            ? "rgb(239, 240, 243)"
                            : cartIsActive ||
                              location.pathname.includes("account") ||
                              location.pathname.includes("admin") ||
                              location.pathname.includes("privacy") ||
                              location.pathname.includes("termsandconditions")
                            ? "rgb(239, 240, 243)"
                            : props.scrollValue <= 5
                            ? "rgb(44, 44, 52)"
                            : "rgb(239, 240, 243)"
                          : "rgb(239, 240, 243)"
                        : props.currentScreenSize >= 768 &&
                          props.currentScreenHeight >= props.currentScreenSize
                        ? "rgb(239, 240, 243)"
                        : props.currentScreenSize >= 600
                        ? props.currentScreenHeight >= props.currentScreenSize
                          ? "rgb(239, 240, 243)"
                          : cartIsActive ||
                            location.pathname.includes("account") ||
                            location.pathname.includes("admin") ||
                            location.pathname.includes("privacy") ||
                            location.pathname.includes("termsandconditions")
                          ? "rgb(239, 240, 243)"
                          : props.scrollValue <= 5
                          ? "rgb(44, 44, 52)"
                          : "rgb(239, 240, 243)"
                        : "rgb(239, 240, 243)",
                    marginLeft: "0rem",
                  }}
                >
                  {getEmployeeData
                    ? getEmployeeData.employee
                      ? getEmployeeData.employee.firstName &&
                        getEmployeeData.employee.lastName
                        ? getEmployeeData.employee.firstName[0].toUpperCase() +
                          getEmployeeData.employee.lastName[0].toUpperCase()
                        : getEmployeeData.employee.firstName
                        ? getEmployeeData.employee.firstName[0].toUpperCase()
                        : clientNavbarCircleRender()
                      : clientNavbarCircleRender()
                    : clientNavbarCircleRender()}
                </p>
                <FaCircle
                  style={{
                    color:
                      props.currentScreenSize === ""
                        ? props.initialScreenSize >= 768 &&
                          props.initialScreenHeight >= props.initialScreenSize
                          ? "rgb(44, 44, 52)"
                          : props.initialScreenSize >= 600
                          ? props.initialScreenHeight >= props.initialScreenSize
                            ? "rgb(44, 44, 52)"
                            : props.scrollValue <= 5
                            ? "rgb(239, 240, 243)"
                            : "rgb(44, 44, 52)"
                          : "rgb(44, 44, 52)"
                        : props.currentScreenSize >= 768 &&
                          props.currentScreenHeight >= props.currentScreenSize
                        ? "rgb(44, 44, 52)"
                        : props.currentScreenSize >= 600
                        ? props.currentScreenHeight >= props.currentScreenSize
                          ? "rgb(44, 44, 52)"
                          : props.scrollValue <= 5
                          ? "rgb(239, 240, 243)"
                          : "rgb(44, 44, 52)"
                        : "rgb(44, 44, 52)",
                  }}
                  className="sign_in_circle_icon"
                />
              </span>
            ) : (
              <FaUser
                style={{
                  color:
                    props.currentScreenSize === ""
                      ? props.initialScreenSize >= 768 &&
                        props.initialScreenHeight >= props.initialScreenSize
                        ? "rgb(44, 44, 52)"
                        : props.initialScreenSize >= 600
                        ? props.initialScreenHeight >= props.initialScreenSize
                          ? "rgb(44, 44, 52)"
                          : props.scrollValue <= 5 &&
                            !location.pathname.includes("privacy") &&
                            !location.pathname.includes("termsandconditions")
                          ? "rgb(239, 240, 243)"
                          : "rgb(44, 44, 52)"
                        : "rgb(44, 44, 52)"
                      : props.currentScreenSize >= 768 &&
                        props.currentScreenHeight >= props.currentScreenSize
                      ? "rgb(44, 44, 52)"
                      : props.currentScreenSize >= 600
                      ? props.currentScreenHeight >= props.currentScreenSize
                        ? "rgb(44, 44, 52)"
                        : props.scrollValue <= 5 &&
                          !location.pathname.includes("privacy") &&
                          !location.pathname.includes("termsandconditions")
                        ? "rgb(239, 240, 243)"
                        : "rgb(44, 44, 52)"
                      : "rgb(44, 44, 52)",
                }}
                className="sign_in_user_icon"
              />
            )}
            <p
              style={{
                color:
                  props.currentScreenSize === ""
                    ? props.initialScreenSize >= 768 &&
                      props.initialScreenHeight >= props.initialScreenSize
                      ? "rgb(44, 44, 52)"
                      : props.initialScreenSize >= 600
                      ? props.initialScreenHeight >= props.initialScreenSize
                        ? "rgb(44, 44, 52)"
                        : cartIsActive ||
                          location.pathname.includes("account") ||
                          location.pathname.includes("admin") ||
                          location.pathname.includes("privacy") ||
                          location.pathname.includes("termsandconditions")
                        ? "rgb(44, 44, 52)"
                        : props.scrollValue <= 5
                        ? "rgb(239, 240, 243)"
                        : "rgb(44, 44, 52)"
                      : "rgb(44, 44, 52)"
                    : props.currentScreenSize >= 768 &&
                      props.currentScreenHeight >= props.currentScreenSize
                    ? "rgb(44, 44, 52)"
                    : props.currentScreenSize >= 600
                    ? props.currentScreenHeight >= props.currentScreenSize
                      ? "rgb(44, 44, 52)"
                      : cartIsActive ||
                        location.pathname.includes("account") ||
                        location.pathname.includes("admin") ||
                        location.pathname.includes("privacy") ||
                        location.pathname.includes("termsandconditions")
                      ? "rgb(44, 44, 52)"
                      : props.scrollValue <= 5
                      ? "rgb(239, 240, 243)"
                      : "rgb(44, 44, 52)"
                    : "rgb(44, 44, 52)",
                marginLeft: dummyToken
                  ? dummyToken.picture
                    ? "0.5rem"
                    : "0.5rem"
                  : props.adminDummyToken
                  ? "1.5rem"
                  : "0.5rem",
              }}
            >
              {location.pathname.includes("/account/clientprofile") ||
              location.pathname.includes("/admin")
                ? userAuthenticated || props.adminDummyToken
                  ? "Log Out"
                  : "Log In"
                : userAuthenticated
                ? "Menu"
                : props.adminDummyToken
                ? "Admin"
                : "Log In"}
            </p>
          </Link>
        </div>
        <Link
          to={
            cartIsActive
              ? location.pathname
              : cartPageOpened === "Cart"
              ? "/cart"
              : cartPageOpened === "Availability"
              ? "/availability"
              : cartPageOpened === "TimePreference"
              ? "/availability/timepreference"
              : cartPageOpened === "GuestCheckout"
              ? "/checkout"
              : cartPageOpened === "PaymentInfo"
              ? "/paymentinfo"
              : cartPageOpened === "ConfirmationPage"
              ? "/checkout/confirmation"
              : "/cart"
          }
          aria-label="Shopping Cart"
          onClick={handleShoppingCartClick}
        >
          <div className="nav_cart_container">
            <div
              className="nav_cart_number_circle_container"
              style={{ display: counter < 1 ? "none" : "block" }}
            >
              <FaCircle className="navbar_cart_number_circle" />
              <p
                style={{
                  right: !props.currentScreenSize
                    ? props.initialScreenSize >= 1200
                      ? counter > 9
                        ? "-0.2vw"
                        : counter > 6
                        ? "-0.015vw"
                        : "0.1vw"
                      : counter > 9
                      ? props.initialScreenSize >= 768
                        ? "-0.3vw"
                        : "-0.8vw"
                      : counter > 6
                      ? "-0.15vw"
                      : "0.1vw"
                    : props.currentScreenSize >= 1200
                    ? counter > 9
                      ? "-0.2vw"
                      : counter > 6
                      ? "-0.015vw"
                      : "0.1vw"
                    : counter > 9
                    ? props.currentScreenSize >= 768
                      ? "-0.3vw"
                      : "-0.8vw"
                    : counter > 6
                    ? "-0.15vw"
                    : "0.1vw",
                }}
              >
                {counter}
              </p>
            </div>
            <GrCart className="navbar_cart_icon" />
          </div>
        </Link>
      </div>
    </nav>
  );
});

export default ResponsiveNavigationBar;
