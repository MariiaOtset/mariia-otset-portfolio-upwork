import css from "./ContactsList.module.css";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

const ContactsList = () => {
  return (
    <ul className={css.iconsWrapper}>
      <li className={css.linkWrapper}>
        <a
          href="https://github.com/MariiaOtset"
          target="_blank"
          className={css.link}
        >
          <VscGithub className={css.socialsIcon} />
        </a>
      </li>
      <li className={css.linkWrapper}>
        <a
          href="https://www.linkedin.com/in/mariia-otset/"
          target="_blank"
          className={css.link}
        >
          <FaLinkedin className={css.socialsIcon} />
        </a>
      </li>
      <li className={css.linkWrapper}>
        <a
          href="https://wa.me/qr/AH7BFQPMKJPKN1"
          target="_blank"
          className={css.link}
        >
          <IoLogoWhatsapp className={css.socialsIcon} />
        </a>
      </li>
      <li className={css.linkWrapper}>
        <a
          href="mailto:mariiaotset@gmail.com"
          target="_blank"
          className={css.link}
        >
          <BiLogoGmail className={css.socialsIcon} />
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
