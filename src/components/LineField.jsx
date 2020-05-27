import React from 'react';


export default function LineField(props){
  const{label, children}=props;

  return(
    <div>
      <label>{label}</label>
      {children}
    </div>
  );
}
