import { useState } from "react";
import css from "./Navigation.module.css";
import { RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { PiReadCvLogo } from "react-icons/pi";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let offset;
      if (window.innerWidth >= 768) {
        offset = 90;
      } else {
        offset = 100;
      }
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={css.mobileNavigation}>
        <a href="#about" className={css.mobileLink} onClick={handleLinkClick}>
          My portfolio
        </a>
        <button className={css.buttons} type="button" onClick={toggleMenu}>
          <RxHamburgerMenu className={`${css.icon} ${css.iconOpenMenu}`} />
        </button>
      </div>
      <div className={`${css.container} ${isMenuOpen ? "" : css.hidden}`}>
        <button
          className={`${css.buttons} ${css.close}`}
          type="button"
          onClick={toggleMenu}
        >
          <RiCloseFill className={css.icon} />
        </button>
        <ul className={css.wrapper}>
          <li className={css.linkWrapper}>
            <a href="#about" className={css.link} onClick={handleLinkClick}>
              About me <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#skills" className={css.link} onClick={handleLinkClick}>
              Skills <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#projects" className={css.link} onClick={handleLinkClick}>
              Projects <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#education" className={css.link} onClick={handleLinkClick}>
              Education <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#contacts" className={css.link} onClick={handleLinkClick}>
              Contacts <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.cvLinkWrapper}>
            <a
              href="https://drive.google.com/file/d/1IQ73lZulXV1R1utAYksxJ9mRsdrQAqCV/view?usp=sharing"
              className={`${css.link} ${css.cvWrapper}`}
              target="_blank"
            >
              <p className={css.cv}>Download CV</p>
              <PiReadCvLogo className={css.cvIcon} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
