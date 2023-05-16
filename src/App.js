import { useEffect, useState } from "react";
import './App.css';
import AddContactContext from "./context/AddContactContext"
import DarkModeContext from "./context/DarkModeContext"
import svgImg from "./assets/dark.svg"

import ContactList from "./components/ContactList"
import ContactForm from './components/ContactForm'

//function App() {
const App = () => {

  // Initialize Data
  const [contacts, setContacts] = useState([])

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false)
  const handlerDarkMode = (event) => setDarkMode(darkMode? false : true)

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
            id : user.id,
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
      <div id={darkMode? "containerDark" : "container"}>

        <header>
        <button className="darkButton" onClick={handlerDarkMode}><img alt="" src={svgImg} height ="20" width="20"/></button>
          <h1>{headerApp}</h1>
        </header>

        <div className="clearfix"></div>

        <section id="content">
          {/* <DarkModeContext.Provider value={ {darkMode} }> */}
            <AddContactContext.Provider value={ {contacts, setContacts} }>
              <ContactList />
            </AddContactContext.Provider>
          {/* </DarkModeContext.Provider> */}
        </section>

        <aside>
          <AddContactContext.Provider value={ {contacts, setContacts} }>
              <ContactForm />
          </AddContactContext.Provider>
        </aside>

        <div className="clearfix"></div>

        <footer>
          CGB ReactJS &copy; 2023
        </footer>

      </div>
    </div>
  );
}

export default App;
