// Imports
import './../App.css'
import AddContactForm from './AddContactForm';

// Function
const AddContact = ({ContactList}) => {
  return (
      // Request the contact data and add them to the contact list
      {ContactList}.push(
        AddContactForm()
      )
  );
}

// Exports
export default AddContact;
