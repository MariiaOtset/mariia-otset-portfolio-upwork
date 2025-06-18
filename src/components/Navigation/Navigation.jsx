import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import css from "./Navigation.module.css";
import { RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { FaDownload } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navigationItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#education", label: "Education" },
    { href: "#next-steps", label: "Contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`${css.navigation} ${scrolled ? css.scrolled : ''}`}
      >
        <div className={css.navContainer}>
          <motion.a 
            href="#hero" 
            className={css.logo} 
            onClick={handleLinkClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={css.logoText}>Mariia</span>
            <span className={css.logoAccent}>Otset</span>
          </motion.a>

          <div className={css.desktopNav}>
            <ul className={css.navList}>
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className={css.navLink} 
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className={css.resumeButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className={css.downloadIcon} />
              Resume
            </motion.button>
          </div>

          <button 
            className={css.mobileMenuButton} 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <RxHamburgerMenu className={css.menuIcon} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div className={`${css.mobileMenuOverlay} ${isMenuOpen ? css.open : ''}`}>
        <div className={css.mobileMenuContent}>
          <button
            className={css.closeButton}
            type="button"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <RiCloseFill className={css.closeIcon} />
          </button>

          <nav className={css.mobileNav}>
            <ul className={css.mobileNavList}>
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={css.mobileNavItem}
                >
                  <a 
                    href={item.href} 
                    className={css.mobileNavLink} 
                    onClick={handleLinkClick}
                  >
                    {item.label}
                    <GoArrowUpRight className={css.linkArrow} />
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className={css.mobileResumeButton}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 50 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className={css.downloadIcon} />
              Download Resume
            </motion.button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;