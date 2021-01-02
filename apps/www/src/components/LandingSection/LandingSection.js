import React, { useEffect } from "react";
import Link from "next/link";
import Button from "../Button";

const LandingSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  return (
    <div
      className={
        lightBg ? "home__landing-section" : "home__landing-section darkBg"
      }
    >
      <div className="container">
        <div
          className="row home__landing-row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="col">
            <div className="home__landing-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__landing-subtitle"
                    : "home__landing-subtitle dark"
                }
              >
                {description}
              </p>
              <Link href="/register">
                <a>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home__landing-img-wrapper">
              <img src={img} alt={alt} className="home__landing-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
