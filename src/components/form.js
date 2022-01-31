import {useState} from 'react';

const Form = (props) => {
    const [ formState, setFormState]= useState({
        searchTerm: "",
    })

    const handleChange = (evt) => {
        setFormState({searchTerm: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault(); // prevent browser refresh
        setFormState({searchTerm: ""}); // clear the form after submit

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formState.searchTerm} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Form;