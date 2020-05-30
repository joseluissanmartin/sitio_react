import React from 'react';
import LineField from './LineField';

export default function SelectLine(props){
  const{name, label, options, required, error,onChange, value }=props;

   return(
     <LineField label={label}>
         <select
         value={value}
         required={required}
         onChange={(event) => onChange(name, event)}
         className={error ? 'inputError':undefined }
         >
          {options.map((option, Key) => (
            <option
            Key={Key}
             value={option.value}
             disabled ={option.value === ''}
            >{option.label}</option>)
          )}
         </select>
      </LineField>
   );
}
