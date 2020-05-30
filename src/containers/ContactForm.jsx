import React from 'react';
import InputLine from '../components/InputLine';
import TextareaLine from '../components/TextareaLine';
import { validateEmail, isEmpty } from '../utils/validations';


export default class ContactForm extends React.Component {
  state = {
    contactData: {
      email: '',
      name: '',
      comments: ''
    },
    errors: {
      email: false,
      name: false,
      comments: false
    }
  };

  onChange = (name, event) => {
    const value = event.target.value;
    const contactData = Object.assign({}, this.state.contactData);
    contactData[name] = value;
    this.setState({
      contactData
    });
  }

  doContact = (event) => {
    const { email, name, comments } = this.state.contactData;
    const emailError = !validateEmail(email);
    const nameError = isEmpty(name);
    const commentsError = isEmpty(comments)

    this.setState({
      errors: {
        email: emailError,
        name: nameError,
        comments: commentsError
      }
    });

    event.preventDefault();
  }

  render() {
    const { email, name, comments } = this.state.contactData;
    const { errors } = this.state;

    return (
      <form>
        <InputLine
          name="email"
          label="Correo"
          type="text"
          onChange={this.onChange}
          error={errors.email}
          value={email}
        />
        <InputLine
          name="name"
          label="Nombre"
          type="text"
          onChange={this.onChange}
          error={errors.name}
          value={name}
        />
        <TextareaLine
          name="comments"
          label="Comentarios"
          rows="8"
          placeholder="Texto ejemplo"
          onChange={this.onChange}
          error={errors.comments}
          value={comments}
        />
        <button onClick={this.doContact}>Cont&aacute;ctanos</button>
      </form>
    );
  }
}
