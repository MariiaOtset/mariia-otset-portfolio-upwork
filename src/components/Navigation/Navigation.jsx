import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { scrollToSection } from "../../utils/scrollToSection.js";
import css from "./Navigation.module.css";

const navLinks = [
  { href: "#about", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#workflow", label: "Workflow" },
  { href: "#availability", label: "Hire me" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#next-steps", label: "Next Steps" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    scrollToSection(targetId);
    setIsMenuOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className={css.mobileNavigation}>
        <a href="#about" className={css.mobileLink} onClick={handleLinkClick}>
          Mariia Otset
        </a>
        <button
          className={css.buttons}
          type="button"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <RxHamburgerMenu className={`${css.icon} ${css.iconOpenMenu}`} />
        </button>
      </div>
      <div
        className={`${css.container} ${isMenuOpen ? "" : css.hidden}`}
        onClick={handleBackdropClick}
      >
        <button
          className={`${css.buttons} ${css.close}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Close navigation menu"
        >
          <RiCloseFill className={css.icon} />
        </button>
        <ul className={css.wrapper}>
          {navLinks.map(({ href, label }) => (
            <li className={css.linkWrapper} key={href}>
              <a href={href} className={css.link} onClick={handleLinkClick}>
                {label} <GoArrowUpRight className={css.arrow} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
