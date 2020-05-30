import React from 'react';
import LineField from './LineField';

export default function TextareaLine(props) {
  const { name, label, rows, placeholder, error, onChange, value }= props;
  return(
    <LineField label={label}>
        <textarea
        rows={rows}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event)}
        className={error ? 'inputError':undefined }
        >{value}</textarea>
    </LineField>
  );
}
