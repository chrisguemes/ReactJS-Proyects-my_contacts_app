// Imports
import './../App.css'

import ContactCard from './ContactCard';

// Function
const ContactList = ({list}) => {
  return (
    <div>
      <ul>
        {
          list.map((contact, index) => <ContactCard name={contact.name} email={contact.email} key={index}></ContactCard>)
        }
      </ul>
    </div>
  );
}

// Exports
export default ContactList;
