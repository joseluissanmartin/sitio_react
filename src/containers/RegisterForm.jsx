import React from 'react';
import InputLine from '../components/InputLine';
import SelectLine from '../components/SelectLine';
import TextareaLine from '../components/TextareaLine';
import OutputLine from '../components/OutputLine';
import { validateEmail, isEmpty } from '../utils/validations';


const browsers = [
  {value: '', label: 'Seleccione...'},
  {value: 'google_chrome', label: 'Google Chrome'},
  {value: 'mozilla_firefox', label: 'Mozilla Firefox'},
  {value: 'safari', label: 'Safari'},
  {value: 'microsoft_edge', label: 'Microsoft Edge'},
];


const languages = {
  id: 'lenguajes',
  options: ['Javascript', 'Python', 'Java']
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
      email: false,
      password: false,
      confirmation: false,
      browser: false,
      age: false,
      description: false,
      language: false,
    }
  };

  onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, this.state.registerData);
    registerData[name] = value;
    this.setState({
      registerData
    });
  }

  validateConfirmation = (value, compareValue) => {
    if (this.isEmpty(value)) {
      return false;
    }

    if (value !== compareValue) {
      return false;
    }

    return true;
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
    } = this.state.registerData;

    const emailError = !validateEmail(email);
    const passwordError = isEmpty(password);
    const confirmationError = !this.validateConfirmation(confirmation, password);
    const browserError = isEmpty(browser);
    const ageError = isEmpty(age);
    const descriptionError = isEmpty(description);
    const languageError = isEmpty(language);

    this.setState({
      errors: {
        email: emailError,
        password: passwordError,
        confirmation: confirmationError,
        browser: browserError,
        age: ageError,
        description: descriptionError,
        language: languageError,
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
      language,
      currentDate
    } = this.state.registerData;
    const { errors } = this.state;

    return (
      <form>
        <InputLine
          name="email"
          label="Correo"
          type="email"
          placeholder="correo@ejemplo.cl"
          required={true}
          onChange={this.onChange}
          error={errors.email}
          value={email}
        />
        <InputLine
          name="password"
          label="Contrase&ntilde;a"
          type="password"
          required={true}
          minLength="4"
          maxLength="8"
          onChange={this.onChange}
          error={errors.password}
          value={password}
        />
        <InputLine
          name="confirmation"
          label="Confirmar Contrase&ntilde;a"
          type="password"
          required={true}
          minLength="4"
          maxLength="8"
          onChange={this.onChange}
          error={errors.confirmation}
          value={confirmation}
        />
        <SelectLine
          name="browser"
          label="Navegador Preferido"
          options={browsers}
          required={true}
          onChange={this.onChange}
          error={errors.browser}
          value={browser}
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
          error={errors.age}
          value={age}
        />
        <TextareaLine
          name="description"
          label="Descripci&oacute;n"
          rows="8"
          placeholder="Texto ejemplo"
          onChange={this.onChange}
          error={errors.description}
          value={description}
        />
        <InputLine
          name="language"
          label="Lenguaje de Programaci&oacute;n Preferido"
          type="text"
          list={languages}
          required={true}
          onChange={this.onChange}
          error={errors.language}
          value={language}
        />
        <OutputLine
          name="currentDate"
          label="Fecha de hoy"
          value={currentDate}
        />
        <button onClick={this.doRegister}>Registrarse</button>
      </form>
    );
  }
}
