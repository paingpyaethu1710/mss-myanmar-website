import React from "react";
import { images } from "../../themes";

import "./Contact.scss";
const Contact = () => {
  return (
    <div id="contact us" className="app__contact">
      <p className="title">Contact Us</p>
      <div className="app__contact-content">
        <img src={images.contactImg} alt="contact.png" />
        <div>
          <div className="app__contact-desc">
            <h3>Email</h3>
            <p>info.mssmyanmar.com</p>
          </div>
          <div className="app__contact-desc">
            <h3>Visit Us</h3>
            <p>23/5 Thiri Mingalar Ave, Yankin Township, Yangon, Myanmar</p>
          </div>
        </div>
        <div>
          <div className="app__contact-desc">
            <h3>LinkedIn</h3>
            <p>MSSMyanmar</p>
          </div>

          <div className="app__contact-desc">
            <h3>Contact</h3>
            <p>mssmyanmar.com</p>
            <p>(+959) 450015991</p>
          </div>
        </div>
      </div>

      <span className="copyright">© Copyright 2022 All rights reserved.</span>
    </div>
  );
};

export default Contact;
