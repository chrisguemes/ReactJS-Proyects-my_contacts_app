import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

// Function
const ContactCard = ({contactData, removeContact}) => {
    return (
        <tr>
          <td>
            <Button onClick={() => removeContact(contactData.id)} variant="contained" startIcon={<DeleteIcon />} size='small'>
              Delete
            </Button>
          </td>
          <td>
            <Button  variant="contained" startIcon={<EditNoteOutlinedIcon />} size='small'>
              Edit
            </Button>
          </td>
          <td>{ contactData.name }</td>
          <td>{ contactData.email }</td>
          <td>{ contactData.phone }</td>
        </tr>
    );
}

// Exports
export default ContactCard;
