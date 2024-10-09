import React from 'react';
import styles from './styles/not-found.module.scss';

export default function RootNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p>Nothing here</p>
    </div>
  );
}
