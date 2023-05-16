// Imports
import { useState, useContext } from 'react';
import './../App.css'

import ContactCard from './ContactCard';
import ContactContext from '../context/AddContactContext'
import ContactForm from './ContactForm'

// Function
const ContactList = () => {

  const {contacts, setContacts, loadingContacts, dataError} = useContext(ContactContext)

  const [search, setSearch] = useState("")

  const handlerSearch = (event) => setSearch(event.target.value)

  const contactRemove = (id) => {
    console.log("Borrando id:", id)
    const newContactList = contacts.filter(contact => contact.id !== id)

    setContacts(newContactList)  
  }

  return (
    <div>
      <section id="content">
        <h2>Lista de Contactos</h2>
        {
  
          loadingContacts
          ?
            <p>Loading data...</p>
          :
            dataError?
              <p>ERROR: Data not found</p>
            :
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
                      contacts
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
        }
      </section>

      <aside>
        <div>
          <h2>Search Bar</h2>
          <p>Filtrar por: <input type="text" onChange={handlerSearch}/></p>
        </div>
        <div>
          <ContactForm />
        </div>
      </aside>
    </div>
  );
}

// Exports
export default ContactList;
