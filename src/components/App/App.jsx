import { Component } from "react";

import { Wrapper, H1, H2, } from "./App.styled";

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  } 

  handleAddContact = (contactData) => {

    const addedContacts = this.state.contacts.find(contact => contact.name === contactData.name);

    if (addedContacts) {
     return alert(`${contactData.name} is already in contacts!`);
    }

    this.setState(prevState => {
      return {
        contacts: [contactData, ...prevState.contacts]
      }
    });
  } 
  
  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    });
  }

  handleFilter = (evt) => {
    const value = evt.currentTarget.value;
    this.setState(() => { 
      return {
        filter: value,
      }
    })
  }
  filterContacts = () => {
    const { contacts, filter } = this.state;

    const filterNomal = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNomal));

  }

  render() { 
    return (
      <Wrapper>
        <H1>Phonebook</H1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <H2>Contacts</H2>
        <Filter handleFilter={this.handleFilter} value={this.state.filter}></Filter>
        <ContactList contacts={this.filterContacts()} deleteContact={this.deleteContact}></ContactList>
      </Wrapper>
    );
  }
};

export default App;
