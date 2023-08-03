import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo_footer.svg";
import instagram from "../../assets/instagram.svg"
import youtube from "../../assets/youtube.svg"
import facebook from "../../assets/facebook.svg"

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.footer_block}>
      <div className={styles.left_footer}>
        <img src={logo} alt="" />
 
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
    <div className={styles.social_icon
    }>
             <p>© 2023 makers. All rights reserved</p>
      <div>

<img src={instagram} alt="" />
<img src={youtube} alt="" />
<img src={facebook} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Footer;
