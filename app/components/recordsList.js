import React from 'react';

export default function RecordsList(props) {
  return (
    <ul>
      {props.records.map((record) => {
        return (
          <li key={`record-${record.id}`}>
            <div>
              <h1>{record.title}</h1>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
