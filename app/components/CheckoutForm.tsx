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
          <input data-test-id="checkout-first-name" required name="name" />
        </label>
        <label>
          Last Name
          <input data-test-id="checkout-last-name" required name="last-name" />
        </label>
        <label>
          E-mail
          <input
            required
            type="email"
            name="e-mail"
            data-test-id="checkout-email"
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Shipping information</legend>
        <label>
          Address
          <input required name="address" data-test-id="checkout-address" />
        </label>
        <label>
          City
          <input required name="city" data-test-id="checkout-city" />
        </label>
        <label>
          Postal Code
          <input
            required
            name="postal-code"
            data-test-id="checkout-postal-code"
          />
        </label>
        <label>
          Country
          <input required name="country" data-test-id="checkout-country" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Payment Information</legend>
        <label>
          Card Number
          <input required name="country" data-test-id="checkout-credit-card" />
        </label>
        <label>
          CVV
          <input
            required
            name="expiration"
            maxLength={3}
            minLength={3}
            data-test-id="checkout-security-code"
          />
        </label>
        <label>
          Expiration
          <input
            required
            type="month"
            name="expiration"
            data-test-id="checkout-expiration-date"
          />
        </label>
      </fieldset>
      <button data-test-id="checkout-confirm-order">Submit Order</button>
    </form>
  );
}
