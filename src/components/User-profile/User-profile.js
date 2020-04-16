import React from "react";
import PropTypes from "prop-types";
import styles from "./User-profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="user avatar"
        width="150"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>views</span>
        <span className={styles.quantity}> {stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>likes</span>
        <span className={styles.quantity}> {stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  name: "anonim",
  location: "inkognito",
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1200px-Question_Mark.svg.png"
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired
};

export default Profile;
