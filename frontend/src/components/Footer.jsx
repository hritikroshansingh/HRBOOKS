import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logoicon.png";

import { footerStyles as styles } from "../assets/dummystyles";
import { quickLinks, socialLinks } from "../assets/dummydata";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoBlock}>
            <Link to="/" className={styles.logoLink}>
              <img src={logo} alt="Logo" className={styles.logoImg} />
              <h1 className={styles.logoText}>HRBOOKS</h1>
            </Link>
            <p className={styles.aboutText}>
              Your gateway to literary adventures. Discover, explore and immerse
              yoursef in the world of books.
            </p>
            <div className={styles.socialWrap}>
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  href={url}
                  key={i}
                  target="_blank"
                  className={styles.socialButton}
                >
                  <Icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.quickLinksBlock}>
            <h3 className={styles.quickLinksTitle}>Quick Links</h3>
            <ul className={styles.quickLinksList}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.url} className={styles.quickLinkItem}>
                    <span className={styles.quickLinkDot}></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.newsletterBlock}>
            <h3 className={styles.newsletterTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Subscribe to our newsletter for the latest releases and exclusive
              offers.
            </p>

            <form className={styles.formWrap}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                <ArrowRight className=" h-4 w-4" />
              </button>
            </form>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>Contact Us</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>221 Literary Lane, BookVilla, Patna 800023</span>
              </div>

              <div className={styles.contactRow}>
                <Phone className={styles.contactIconInline} />
                <span>+91 7643099297</span>
              </div>

              <div className={styles.contactRow}>
                <Mail className={styles.contactIconInline} />
                <span>contact@hrbooks.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyrightWrap}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} HRBooks. All rights reserved.
          </p>
          <a
            href="https://hexagondigitalservices.com/"
            target="_blank"
            className="text-sm cursor-pointer text-grey-500 hover:text-purple-600"
          >
            Powered By <br />
            Hexagon Digital Services
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
