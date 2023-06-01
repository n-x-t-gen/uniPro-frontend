import React from "react";
import styles from "./homeComposedFooter.module.css";
import HomeFooter from "../homeFooter/homeFooter";

import instagram from "../../assets2/icons/instagram.png";
import twitter from "../../assets2/icons/twitter.png";
import whatsapp from "../../assets2/icons/whatsapp.png";
import facebook from "../../assets2/icons/facebook.png";

const HomeComposedFooter = () => (
  <footer className={styles.HomeComposedFooter}>
    <div className={styles.HomeComposedContainer}>
      <div className={styles.SocialMediaArea}>
        <div className={styles.SocialMediaAreaBg}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.Instagram} src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.Twitter} src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.WhatsApp} src={whatsapp} alt="WhatsApp" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.Facebook} src={facebook} alt="Facebook" />
          </a>
        </div>
      </div>
      <HomeFooter />
    </div>
  </footer>
);

HomeComposedFooter.propTypes = {};

HomeComposedFooter.defaultProps = {};

export default HomeComposedFooter;