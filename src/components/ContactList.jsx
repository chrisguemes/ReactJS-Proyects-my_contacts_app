// Imports
import { useState, useContext } from 'react';
import './../App.css'

import ContactCard from './ContactCard';
import ContactContext from '../context/AddContactContext'

// Function
const ContactList = () => {

  const dataContacts = useContext(ContactContext)

  const [search, setSearch] = useState("")

  const handlerSearch = (event) => setSearch(event.target.value)

  const contactRemove = (id) => {
    console.log("Borrando id:", id)
    const newContactList = dataContacts
                            .contacts
                            .filter(contact => contact.id !== id)

    dataContacts.setContacts(newContactList)  
  }

  return (
    <div>
      <h2>Lista de Contactos</h2>
      {
        dataContacts.contacts.length > 0 
        ?
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataContacts
                    .contacts
                    .filter(contact => 
                        contact.name.length > 0 &&
                        contact.name.startsWith(search))
                    .map((contact, index) => 
                      <ContactCard contactData={contact} removeContact={contactRemove} key={index}/>
                    )
                }
              </tbody>
            </table>
          </div>
        :
          <p>No hay contactos cargados</p>
      }

      <h2>Search Bar</h2>
      <p>Filtrar por: <input type="text" onChange={handlerSearch}/></p>

    </div>
  );
}

// Exports
export default ContactList;
