import React, { useState } from "react";
import { User } from "../model/user.model";
import { Button } from "app/components/Button";

function UserForm() {
    const [formState, setFormState] = useState<User>({} as User);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormState((prevState) => ({ ...prevState, [fieldName]: fieldValue }))
    };

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //dispatch(userActions.login(formState));
    };
    return (
    <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleInputChange} />
        <Button callBack={submit} >Submit</Button>
    </form>);
}

export default UserForm;

