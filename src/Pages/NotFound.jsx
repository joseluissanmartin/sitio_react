import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';

const links = [
  {href: 'Login', title:'Ingresar'},
  {href: 'Register', title:'Registrarse'},
  {href: 'contact', title:'Contacto'}
];

function Login () {
   return (
     <>
     <NavBar links={links} />
     <Content title="Pagina no encontrada 404" />
     <Footer />
     </>
   );
}

export default Login;
