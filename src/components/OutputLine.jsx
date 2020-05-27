import React from 'react';
import LineField from './LineField';

export default function OutputLine(props) {
  const { label, value }=props;
  return(
    <LineField label ={label}>
    <output> {value}</output>
    </LineField>
  );

}
