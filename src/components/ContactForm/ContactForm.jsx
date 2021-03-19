import { Component } from 'react';
import shortid from 'shortid';

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
      <form action="" onSubmit={this.handleFormSubmit}>
        <label htmlFor="">
          {' '}
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleNameNumberChange}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            value={number}
            name="number"
            onChange={this.handleNameNumberChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ContactForm;
