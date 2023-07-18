import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left_footer}>
        <img src={logo} alt="" />
        <p>© 2023 makers. All rights reserved</p>
      </div>
      <div className={styles.right_footer}>
        <div>
          <h4>+996 704 409 409</h4>
          <h4>+996 704 409 409</h4>
        </div>
        <div>
          <h4>Табышалиева 29,</h4>
          <h4>Bishkek Kyrgyzstan</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
