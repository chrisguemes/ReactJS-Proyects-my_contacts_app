// Imports
import './../App.css'

// Function
const ContactCard = ({contactData}) => {
    return (
        <tr>
            <td>{ contactData.name }</td>
            <td>{ contactData.email }</td>
            <td>{ contactData.phone }</td>
        </tr>
    );
}

// Exports
export default ContactCard;
