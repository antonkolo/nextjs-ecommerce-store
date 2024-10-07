import React from 'react';
import { getRecord } from '../../database/records';

export default function ProductPage(props) {
  console.log(props);
  const record = getRecord(1);

  return <div>Title: {record.title}</div>;
}
