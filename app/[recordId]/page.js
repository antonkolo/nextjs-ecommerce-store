import React from 'react';
import { getRecord } from '../../data/records';

export default function ProductPage(props) {
  console.log(props);
  const record = getRecord('1');

  return <div>Title: {record.Title}</div>;
}
