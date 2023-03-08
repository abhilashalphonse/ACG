import React, { useState } from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import acglogo from "../assets/acg-logo.png";
import "../styles/NavigationBar.css";
import { useAuth0 } from "@auth0/auth0-react";


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

        return (
          <>
            <div class="container-fluid navigation-wrapper">
              <div class="row align-items-center navigation-inner-wrapper px-5 py-2">
                <div class="col-md-2 text-end">
                  <img alt="logo" src={acglogo} style={{ width: "90px" }}></img>
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-4 text-end">
                      <a id="color-test">CHOOSE&nbsp;ACG</a>
                    </div>
                    <div class="col-md-3 text-end">
                      <a id="color-test">YOUR&nbsp;OBJECTIVES</a>
                    </div>
                    <div class="col-md-3 text-end">
                      <a id="color-test">OUR&nbsp;KNOW&nbsp;HOW</a>
                    </div>
                    <div class="col-md-2 text-end">
                      <a id="color-test">CONTACT&nbsp;US</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 text-center accounts-auth">
                {!isAuthenticated && (
                  <div class="dropdown">
                  <button type="button" class="btn btn-light dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Login 
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" onClick={() => loginWithRedirect()}>Individual&nbsp;Investor</a></li>
                    <li><a class="dropdown-item" onClick={() => loginWithRedirect()}>Corporate&nbsp;Institution</a></li>
                    <li><a class="dropdown-item" onClick={() => loginWithRedirect()}>Global&nbsp;distributor</a></li>
                    
                  </ul>
                  </div>
                )}
                {isAuthenticated && (
                  <div class="dropdown">
                  <button class="btn btn-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </button>
                  <ul class="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuButton1">
                    <li><div class="dropdown-item" tag={RouterNavLink} to="/profile"><Link to="/profile"><FontAwesomeIcon icon="user" className="mr-3" />Dashboard</Link></div></li>
                    <li><div class="dropdown-item" onClick={() => logoutWithRedirect()}><FontAwesomeIcon icon="power-off" className="mr-3" />Log out</div></li>
                  </ul>
                </div>
                
              )}
                </div>
              </div>
            </div>
            <div class="container-fluid navigation-wrapper-mobile py-2">
              <div class="row navigation-inner-wrapper-mobile align-items-center">
                <div class="col-2">
                  <button
                    class="btn btn-outline-light offcanvas-menu-button"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <i class="fa-solid fa-bars offcanvas-logo-icon"></i>
                  </button>
                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      <div class="container-fluid">
                        <div class="row"><a>YOUR&nbsp;OBJECTIVES</a></div>
                        <hr class="dropdown-divider"></hr>
                        <div class="row"><a>CHOOSE&nbsp;ACG</a></div>
                        <hr class="dropdown-divider"></hr>
                        <div class="row"><a>OUR&nbsp;KNOW&nbsp;HOW</a></div>
                        <hr class="dropdown-divider"></hr>
                        <div class="row"><a>CONTACT&nbsp;US</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <img
                    alt="logo"
                    src={acglogo}
                    style={{
                      width: 70,
                    }}
                  />
                </div>
                <div class="col-4 align-self-center justify-content-end">
                {!isAuthenticated && (
                <div class="dropdown">
  <div class="dropdown-toggle careers-button" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    <a>Individual&nbsp;Investor</a>
  </div>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button" onClick={() => loginWithRedirect()}>Individual&nbsp;Investor</button></li>
    <li><hr class="dropdown-divider"></hr></li>
    <li><button class="dropdown-item" type="button" onClick={() => loginWithRedirect()}>Institution&nbsp;&&nbsp;Corporate</button></li>
    <li><hr class="dropdown-divider"></hr></li>
    <li><button class="dropdown-item" type="button" onClick={() => loginWithRedirect()}>Global&nbsp;distributor</button></li>
  </ul>
</div>
                )}
                {isAuthenticated && (
                  <div class="dropdown">
                  <div class="dropdown-toggle careers-button text-end" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <a>Account</a>
                  </div>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button" tag={RouterNavLink} to="/profile"><FontAwesomeIcon icon="user" className="mr-3" />Dashboard</button></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><button class="dropdown-item" type="button"onClick={() => logoutWithRedirect()}><FontAwesomeIcon icon="power-off" className="mr-3" />Log&nbsp;out</button></li>
                  </ul>
                </div>

                )}
                </div>
              </div>
            </div>
          </>
        );
    }

export default NavigationBar;
