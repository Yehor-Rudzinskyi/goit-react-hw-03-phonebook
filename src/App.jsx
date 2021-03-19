import React, { Component } from 'react';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
      <div>
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
