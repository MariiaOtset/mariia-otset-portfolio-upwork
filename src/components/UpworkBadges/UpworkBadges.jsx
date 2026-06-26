import css from "./UpworkBadges.module.css";
import clsx from "clsx";
import { FaCrown } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";

const UpworkBadges = ({ variant = "light" }) => {
  return (
    <div
      className={clsx(
        css.badgesWrapper,
        variant === "dark" && css.darkBadgesWrapper,
        variant === "contact" && css.contactBadgesWrapper
      )}
      aria-label="Upwork achievements"
    >
      <div className={css.badgeItem}>
        <span className={css.successIcon} aria-hidden="true">
          <FaCrown className={css.crownIcon} />
        </span>
        <span>100% Job Success</span>
      </div>

      <div className={css.badgeItem}>
        <span className={css.topRatedIcon} aria-hidden="true">
          <IoStarOutline className={css.starIcon} />
        </span>
        <span>Top Rated</span>
      </div>
    </div>
  );
};

export default UpworkBadges;
