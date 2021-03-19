import React, { Component } from 'react';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './styles/app.scss';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(contacts);
    if (parsetContacts) this.setState({ contacts: parsetContacts });
  }

  componentDidUpdate(prevState, prevProp) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleOnSubmitForm = data => {
    if (
      this.state.contacts.find(
        ({ name, number }) => data.name === name || data.number === number,
      )
    )
      return alert('АстАнавитесь!');
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  handleFilter = value => {
    this.setState({ filter: value });
  };

  handleDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter),
    );
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleOnSubmitForm} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
