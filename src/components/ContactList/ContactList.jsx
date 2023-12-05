import { Wrapper, List } from "./ContactList.styled";

import ContactItem from "components/ContactItem/ContactItem";

const ContactList = ({ contacts, deleteContact }) => {
    
    return (
        <Wrapper>
            <List>
           { contacts.map((contact) => 
               <ContactItem
                   key={contact.id}
                   id={contact.id}
                   name={contact.name}
                   number={contact.number}
                   deleteContact={deleteContact}        
               />)}
            </List>
        </Wrapper>
    )
}
export default ContactList;