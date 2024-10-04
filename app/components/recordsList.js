import React from 'react';

export default function RecordsList(props) {
  return (
    <ul>
      {props.records.map((record) => {
        return (
          <li key={`record-${record.id}`}>
            <div>
              <h2>{record.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
