// Imports
import './../App.css'
import deletePng from "../assets/delete.png"

// Function
const ContactCard = ({contactData}, {removeContact}) => {
    return (
        <tr>
            <td><button className="removeBtn" onClick={() => <removeContact id = { contactData.id }/>}><img alt="" src={deletePng} height ="20" width="20"/></button></td>
            <td>{ contactData.name }</td>
            <td>{ contactData.email }</td>
            <td>{ contactData.phone }</td>
        </tr>
    );
}

// Exports
export default ContactCard;
