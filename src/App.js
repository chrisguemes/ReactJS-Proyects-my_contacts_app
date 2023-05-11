import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';

import ContactList from "./components/ContactList"

//function App() {
const App = () => {

  // Initialize Data
  const [contacts, setContacts] = useState([])

  // Set app header
  const headerApp = "My First Contacts App"

  //Side effect: se ejecuta cada vez que hay una renderización
  useEffect(() => {
    // Retrieve data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(jsonData => {
        const dataFormatted = jsonData.map(user => {
          return {
            name : user.name,
            email : user.email,
            phone : user.phone
          }
        })
        // console.log(dataFormatted)
        setContacts(dataFormatted)
      })
  }, [])  // Only First render

  return (
    <div>
      <h1>{headerApp}</h1>
      <ContactList dataContacts = { {contacts, setContacts} }/>
    </div>
  );
}

export default App;
