// Imports
import './../App.css'

// Function
const ContactCard = ({name, email}) => {
  return (
      <li>{ name } : {email}</li>
  );
}

// Exports
export default ContactCard;
