import React from "react";
import Link from "next/link";
import Button from "../Button";
import { ClearAll, LinkedIn, GitHub } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership href receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buthrefnStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link href="/sign-up">How it works</Link>
            <Link href="/">Testimonials</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Inveshrefrs</Link>
            <Link href="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link href="/">Contact</Link>
            <Link href="/">Support</Link>
            <Link href="/">Destinations</Link>
            <Link href="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link href="/">Submit Video</Link>
            <Link href="/">Ambassadors</Link>
            <Link href="/">Agency</Link>
            <Link href="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link href="/">
              <a>LinkedIn</a>
            </Link>
            <Link href="/">
              <a>GitHub</a>
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link href="/">
              <a className="social-logo">
                <ClearAll className="navbar-icon" />
                Todo List
              </a>
            </Link>
          </div>
          <small className="website-rights">MANTZARIS © 2021</small>
          <div className="social-icons">
            <Link href="/" target="_blank" aria-label="Facebook">
              <a className="social-icon-link">
                <LinkedIn />
              </a>
            </Link>
            <Link href="/" target="_blank" aria-label="Github">
              <a className="social-icon-link">
                <GitHub />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
