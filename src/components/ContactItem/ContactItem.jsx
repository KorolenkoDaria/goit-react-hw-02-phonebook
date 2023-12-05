import {Item, Name, Number, Button} from "./ContactItem.styled";

const ContactItem = ({ name, number, id, deleteContact}) => {
    return (
        <Item>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
        </Item>
    )
}
export default ContactItem;