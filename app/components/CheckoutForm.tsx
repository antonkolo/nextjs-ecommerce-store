'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';
import { emptyCart } from '../../util/cookies';

export default function CheckoutForm() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Sending');

    await emptyCart();
    router.replace('/thank-you');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          Personal Information
          <label>
            Name
            <input name="name" />
          </label>
          <label>
            Last Name
            <input name="last-name" />
          </label>
          <label>
            E-mail
            <input type="email" name="e-mail" />
          </label>
        </fieldset>
        <fieldset>
          Shipping information
          <label>
            Address
            <input name="address" />
          </label>
          <label>
            City
            <input name="city" />
          </label>
          <label>
            Postal Code
            <input name="postal-code" />
          </label>
          <label>
            Country
            <input name="country" />
          </label>
        </fieldset>
        <fieldset>
          Payment Information
          <label>
            Card Number
            <input name="country" />
          </label>
          <label>
            Expiration
            <input type="month" name="expiration" />
          </label>
        </fieldset>
        <button>Submit Order</button>
      </form>
    </div>
  );
}
