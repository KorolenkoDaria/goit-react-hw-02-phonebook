import { Component } from 'react';
import { nanoid } from 'nanoid'

import {Label, Input, Form, Field, Button } from "./ContactForm.styled"

class ContactForm extends Component {
  state = {
        name: '',
        number: '',
    }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })  
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        const contactData = {
            name: this.state.name,
            number: this.state.number,
            id: nanoid(),
        }

        this.setState({
            name: '',
            number: '',
        })
        this.props.handleAddContact(contactData);
    }
    
  render() {
      return (
          <Form onSubmit={this.handleSubmit}>
            <Field>
                <Label htmlFor='user-name'> Name </Label>
                  <Input onChange={this.handleInputChange} value={this.state.name} id='user-name' type="text" name="name" required />
              </Field>
              <Field>
                <Label htmlFor='user-phone'> Phone number </Label>
                <Input onChange={this.handleInputChange} value={this.state.number} id='user-phone' type="tel" name="number" required />
              </Field>
              <Button type='submit'>Add contact</Button>
        </Form>
    )
  }
}

export default ContactForm;