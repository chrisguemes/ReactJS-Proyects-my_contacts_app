// Imports
import { useState, useContext } from 'react';
import './../App.css'

import ContactContext from '../context/AddContactContext'

// Function
const ContactForm = () => {

  const dataContacts = useContext(ContactContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handlerName = (event) => setName(event.target.value)
  const handlerEmail = (event) => setEmail(event.target.value)
  const handlerPhone = (event) => setPhone(event.target.value)

  const contactAdd = () => { 
    const id = dataContacts.contacts.length + 1
    dataContacts.setContacts([...dataContacts.contacts, { id, name, email, phone }])
  }

  return (
    <div>
      <h2>Añadir Nuevo Contacto</h2>
      <div>
          <p>Name: <input type='text' onChange={handlerName}/></p>
          <p>Email: <input type='text' onChange={handlerEmail}/></p>
          <p>Movil: <input type='text' onChange={handlerPhone}/></p>
      </div>
      <button onClick = {contactAdd}>Añadir Contacto</button>
    </div>
  );
}

// Exports
export default ContactForm;
