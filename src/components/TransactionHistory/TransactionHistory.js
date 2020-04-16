import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.row}>
        <th className={styles.rowItem}>Type</th>
        <th className={styles.rowItem}>Amount</th>
        <th className={styles.rowItem}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.row}>
          <td className={styles.rowItemTransaction}>{item.type}</td>
          <td className={styles.rowItemTransaction}>{item.amount}</td>
          <td className={styles.rowItemTransaction}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
