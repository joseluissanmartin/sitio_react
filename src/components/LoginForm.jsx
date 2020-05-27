import React from 'react';
import InputLine from './InputLine';

export default class LoginForm extends React.Component{
 state = {
   loginData: {
     email: '',
     password:''
   },
   errors:{
     email:false,
     password:false
   }
 };

 isEmpty = (value) => {
   return value.trim() === '';

   /*if (value ===''){
     return true;
   }else{
     return false;
   }*/
   }

doLogin = (event) => {
  const {email, password}= this.sate.loginData;
  const emailError = this.isEmpty(email);
  const passwordError =this.isEmpty(password);

  console.log('Email error:'+ emailError);
  console.log('passwordError'+ passwordError )

  this.setState({
    errors:{
      email:emailError,
      password:passwordError
    }
  });

  event.preventDefault();
}

onChange = (name, event) => {
  const value = event.target.value;
  const loginData=Object.assing({},this.state.loginData);
  loginData[name]= value
  this.setState({
    loginData
  });

}

  render(){
    const {errors}=this.state;
    return (
      <form>
        <InputLine name="email"
         label="Correo"
         type="text"
         onChange={this.onChange}
         error={errors.email}
          />
        <InputLine
         name="password"
         label="Contrase&ntilde;a"
         type="password"
         onChange={this.onChange}
         error={errors.password}
          />
        <button onClick ={this.doLogin}>Ingresar</button>
      </form>
    );
  }
}
/*
export default function LoginForm() {
  return (
    <form>
      <InputLine label="Correo" type="text" />
      <InputLine label="Contrase&ntilde;a" type="password" />
      <button>Ingresar</button>
    </form>
  );
}
*/
