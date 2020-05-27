import React from 'react';
import InputLine from './InputLine';
import SelectLine from './SelectLine';
import TextareaLine from './TextareaLine';
import OutputLine from './OutputLine';

const browsers = [
  {value: '', label: 'Seleccione...'},
  {value: 'google_chrome', label:'Google Chrome'},
  {value: 'mozilla_firefox', label:'Mozilla Firefox' },
  {value: 'Safari', label:'Safari' },
  {value: 'Microsoft_edge', label:'Microsoft Edge' },
];


const languages = {
  id:'lenguajes',
  options: ['JavaScript','Pyton','Java']
};


export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      email: '',
      password: '',
      confirmation: '',
      browser: '',
      age: '',
      description: '',
      language: '',
      currentDate: '27/05/2020'
    },
    errors: {
      email:false,
      password:false,
      confirmation:false,
      browser:false,
      age:false,
      description:false,
      lenguaje:false,

    }
  };

  isEmpty = (value) => {
    return value.trim()==='';
  }

  onChange = (name, event) => {
    const value = event.target.value;
    const registerData=Object.assing({},this.state.registerData);
    registerData[name]= value
    this.setState({
      registerData
    });
  }
  doRegister = (event) => {
    const {
      email,
      password,
      confirmation,
      browser,
      age,
      description,
      language
    }=this.state.registerData;

    const emailError = this.isEmpty(email);
    const passwordError =this.isEmpty(password);
    const confirmationError = this.isEmpty(confirmation);
    const browserError = this.isEmpty(browser);
    const ageError = this.isEmpty(age);
    const descriptionError = this.isEmpty(description);
    const languageError = this.isEmpty(language);

    this.setState({
      errors: {
        email:emailError,
        password:passwordError,
        confirmation:confirmationError,
        browser:passwordError,
        age:ageError,
        description:descriptionError,
        language:languageError,

      }
    });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      confirmation,
      browser,
      age,
      description,
      languaje,
      currentDate
    } = this.state.registerData;
    const { errors }= this.state;


   return (
    <form>
        <InputLine
        name="email"
        label="Correo"
        type='email'
        placeholder="correo@ejemplo.cl"
        required={true}
        onChange={this.onChange}
        errors={errors.email}
        />
        <InputLine
        name="password"
        label="Contrase&ntilde;a"
        type="password"
        required={true}
        minLength="4"
        maxLength="8"
        onChange={this.onChange}
        errors={errors.password}
        />
        <InputLine
        name="confirmation"
        label="Confirmar contrase&ntilde;a"
        type="password"
        required={true}
        minLength="4"
        maxLength="8"
        onChange={this.onChange}
        errors={errors.confirmation}
        />
        <SelectLine
        name="browser"
        label="Navegadore Preferido"
        options={browsers}
        required={true}
        onChange={this.onChange}
        errors={errors.browser}
        />
        <InputLine
        name="age"
        label="Edad"
        type="number"
        min="1"
        max="150"
        step="any"
        required={true}
        onChange={this.onChange}
        errors={errors.age}
        />
        <TextareaLine
        name="description"
        label="Descripci&oacute;n"
        rows="8"
        placeholder="Texto de ejemplo"
        onChange={this.onChange}
        errors={errors.description}
        />
        <InputLine
        label ="Lenguaje de programac&oacute;n preferido"
        type="text"
        list={languages}
        required={true}
        onChange={this.onChange}
        errors={errors.lenguaje}
        />
      <OutputLine
      name="currentDate"
      label="Fecha de hoy"
      value={currentDate}
      />
        <button onClick ={this.doRegister}>Registrarse</button>
    </form>
  );
}
}
