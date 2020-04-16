import React from "react";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        {friend.isOnline && <span className={styles.isOnline}></span>}
        {!friend.isOnline && <span className={styles.isNotOnline}></span>}
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;
