import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map((friend) => (
      <li key={friend.id} className={styles.item}>
        {friend.isOnline && <span className={styles.isOnline}></span>}
        {!friend.isOnline && <span className={styles.isNotOnline}></span>}
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
