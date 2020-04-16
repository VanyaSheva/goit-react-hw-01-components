import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map((item) => (
        <li
          key={item.id}
          className={styles.listItem}
          style={{ backgroundColor: random_bg_color() }}
        >
          <span className={styles.fileReader}>{item.label} </span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

function random_bg_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

random_bg_color();

export default Statistics;
