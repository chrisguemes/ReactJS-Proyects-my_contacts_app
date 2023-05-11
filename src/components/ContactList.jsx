// Imports
import { useState } from 'react';
import './../App.css'

import ContactCard from './ContactCard';

// Function
const ContactList = ({dataContacts}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [search, setSearch] = useState("")

  const handlerName = (event) => setName(event.target.value)
  const handlerEmail = (event) => setEmail(event.target.value)
  const handlerPhone = (event) => setPhone(event.target.value)
  const handlerSearch = (event) => setSearch(event.target.value)

  const addContact = () => { 
      dataContacts.setContacts([...dataContacts.contacts, { name, email, phone }])
  }

  return (
    <div>
      <h2>Lista de Contactos</h2>
      {
        dataContacts.contacts.length > 0 
        ?
          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              {
                dataContacts
                  .contacts
                  .filter(contact => 
                      contact.name.length > 0 &&
                      contact.name.startsWith(search))
                  .map((contact, index) => 
                    <ContactCard contactData={contact} key={index}/>
                  )
              }
            </table>
          </div>
        :
          <p>No hay contactos cargados</p>
      }

      <h2>Añadir Nuevo Contacto</h2>
      <div>
          <p>Name: <input type='text' onChange={handlerName}/></p>
          <p>Email: <input type='text' onChange={handlerEmail}/></p>
          <p>Movil: <input type='text' onChange={handlerPhone}/></p>
      </div>
      <button onClick = {addContact}>Añadir Contacto</button>

      <h2>Search Bar</h2>
      <p>Filtrar por: <input type="text" onChange={handlerSearch}/></p>

    </div>
  );
}

// Exports
export default ContactList;
