import React from 'react';
import LineField from './LineField';


export default function InputLine(props){
  const {
     label,
     type,
     placeholder,
     required,
     minLength,
     maxLength,
     min,
     max,
     step,
     list,
     onChange,
     name,
     error,
     value
   } = props;
  /*
  const label = props.label;
  const type = props.type;
  const placeholder = props.placeholder;
  const requeried = props.requeried;
  */

  /*
  list= {if(list){ return list.id}}
  */


  return (

    <LineField label={label}>
      <input
       type={type}
       placeholder={placeholder}
       minLength={minLength}
       maxLength={maxLength}
       min={min}
       max={max}
      step={step}
      list={list && list.id}
      required={required}
      onChange = {(event) => onChange(name, event)}
      value={value}
      className={error ? 'inputError': undefined } />
    {list &&
      <datalist id={list.id}>
        {list.options.map((option, key) => <option key={key}>{option}</option>)}
      </datalist>
    }
    </LineField>
  );
}
