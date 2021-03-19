import { Component } from 'react';
import InputMask from 'react-input-mask';
import shortid from 'shortid';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameNumberChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    const data = {
      id: shortid.generate(),
      name,
      number,
    };
    if (name && number) {
      this.props.onSubmit(data);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form action="" onSubmit={this.handleFormSubmit} className="contact-form">
        <label htmlFor="" className="form-label">
          {' '}
          Name
          <input
            type="text"
            value={name}
            name="name"
            maxLength="13"
            className="form-input-name"
            onChange={this.handleNameNumberChange}
          />
        </label>
        <label htmlFor="" className="form-label">
          Number
          <InputMask
            type="tel"
            value={number}
            name="number"
            mask="+3\80 99 999 99 99"
            className="form-input-number"
            onChange={this.handleNameNumberChange}
          />
        </label>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }
}

export default ContactForm;
