import React from 'react';
import {Link} from 'react-router-dom';


export default function NavBar(props) {
  return (
  <header>
    <nav>
      <ul>
        {props.links.map((link, key)=> <li key ={key}><Link to={link.href}>{link.title}</Link></li>)}
      </ul>
    </nav>
  </header>
  );
}
/*
props.links.map(link=> <li><a href={link.href}>{link.title}</a></li>)

Equivalente a:

props.links.map(link=>(
  <li><a href={link.href}>{link.title}</a></li>
))
Equivalente a:

props.links.map(link=>){
  return<li><a href={link.href}>{link.title}</a></li>
})
Equivalente a:

props.links.map(function(link){
  return<li><a href={link.href}>{link.title}</a></li>
})

Equivalente a:

function transformacion(link){
  return<li><a href={link.href}>{link.title}</a></li>
}

const returnElements =[];

for (i=0; i< props.link.lenght ; i++){
  const link =links[i];
  returnElements[i]= transformacion(link);
}
*/
