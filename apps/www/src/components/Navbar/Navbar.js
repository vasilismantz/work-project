import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ClearAll, Menu, Close } from "@material-ui/icons";
import { Button } from "@/components";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link href="/">
            <a className="navbar-logo" onClick={closeMobileMenu}>
              <ClearAll className="navbar-icon" />
              Todo List
            </a>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <Close style={{ color: "white" }} />
            ) : (
              <Menu style={{ color: "white" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-links" onClick={closeMobileMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-links" onClick={closeMobileMenu}>
                  Pricing
                </a>
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link href="/register">
                  <a className="btn-link">
                    <Button buttonStyle="btn--outline">Sign up</Button>
                  </a>
                </Link>
              ) : (
                <Link href="/register">
                  <a className="btn-link" onClick={closeMobileMenu}>
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      href="/register"
                    >
                      Sign up
                    </Button>
                  </a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
