import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cartIcon from '../../public/svg/cart-icon.svg';
import logo from '../../public/svg/logo.svg';
import { getCartItems } from '../../util/cookies';
import styles from './Header.module.scss';

export default async function Header() {
  // get cart items quantity
  const cartItemsCount = (await getCartItems()).reduce((acc, currVal) => {
    return acc + currVal.quantity;
  }, 0);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">
              <Image src={logo} alt="Logo" className={styles.logo} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className={styles.title}>CRATE</div>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <div className={styles['cart-container']}>
                <Image src={cartIcon} alt="Cart icon" />
                <span className={styles.itemsCounter}>
                  {cartItemsCount > 99 ? '❕' : cartItemsCount}
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
