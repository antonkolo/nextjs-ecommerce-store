'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';
import { emptyCart } from '../../util/cookies';
import styles from './CheckoutForm.module.scss';

export default function CheckoutForm() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Sending');

    await emptyCart();
    router.replace('/thank-you');
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>

        <label>
          Name
          <input required name="name" />
        </label>
        <label>
          Last Name
          <input required name="last-name" />
        </label>
        <label>
          E-mail
          <input required type="email" name="e-mail" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Shipping information</legend>
        <label>
          Address
          <input required name="address" />
        </label>
        <label>
          City
          <input required name="city" />
        </label>
        <label>
          Postal Code
          <input required name="postal-code" />
        </label>
        <label>
          Country
          <input required name="country" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Payment Information</legend>
        <label>
          Card Number
          <input required name="country" />
        </label>
        <label>
          CVV
          <input required name="expiration" maxLength={3} minLength={3} />
        </label>
        <label>
          Expiration
          <input required type="month" name="expiration" />
        </label>
      </fieldset>
      <button>Submit Order</button>
    </form>
  );
}
