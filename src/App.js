import logo from './logo.svg';
import './App.css';

import ContactList from "./components/ContactList"
import AddContact from './components/AddContact';

//function App() {
const App = () => {

  // Initialize Data
  const titleApp = "My First Contacts App"
  const contactList = [
    {
      name : "Chris",
      email : "aaaa@gmail.com"
    },
    {
      name : "Luis",
      email : "bbbb@gmail.com"
    }
  ]

  return (
    <div>
      <h1>{titleApp}</h1>
      <ContactList list={contactList}/>
      <button onClick={() => AddContact({contactList})}>Add Contact</button>
    </div>
  );
}

export default App;
