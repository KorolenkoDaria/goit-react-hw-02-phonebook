import { Label } from "../ContactForm/ContactForm.styled";
import { Wrapper, Field, Input, } from "./Filter.styled";

const Filter = ({handleFilter,value}) => { 
 
        return (
            <Wrapper>
                <Field>
                    <Label htmlFor='filter'> Find contacts by name </Label>
                    <Input onChange={handleFilter} value={value} id='filter' type="text" name="filter" required />
                </Field>
            </Wrapper>
        )

}

export default Filter;
