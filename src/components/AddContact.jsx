// Imports
import './../App.css'
import AddContactForm from './AddContactForm';

// Function
const AddContact = ({ContactList}) => {
    console.log({ContactList})   // Error - undefined!! 
    const newContact = AddContactForm()
    console.log({newContact})
    return (
        // Request the contact data and add them to the contact list
        // {ContactList}.push(
        //     AddContactForm()
        // )
        {newContact}
    );
}

// Exports
export default AddContact;
