import React from 'react';

export default function Content(props){
  const {title, children}=props;


  return (
    <section>
        <div className="tarjeta">
            <header>
                <h3>{title}</h3>
            </header>
          {children}
        </div>
    </section>
  );
}
