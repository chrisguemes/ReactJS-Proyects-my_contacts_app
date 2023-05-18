import { useEffect, useState } from "react";
import AddContactContext from "./context/AddContactContext"
import DarkModeContext from "./context/DarkModeContext"

import ContactList from "./components/ContactList"
import ContactForm from './components/ContactForm'

import useFetch from "./hooks/useFetch"

import { Routes, Route } from "react-router-dom"

import Menu from "./components/Menu"
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

//function App() {
const App = () => {

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false)
  const handlerDarkMode = (event) => setDarkMode(darkMode? false : true)
  
  // Set app header
  const headerApp = "My First Contacts App"
  
  // Initialize Data
  const [contacts, setContacts, loadingContacts, dataError] = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <Container>

      <Grid container>
        <Grid item xs={11} sm={11} md={11}>
          <Typography variant="h2" textAlign={"center"} mt={5}>{headerApp}</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Button onClick={handlerDarkMode} variant="contained" startIcon={<SettingsBrightnessIcon />} size='small'/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          {/* Nav menu */}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="contacts" element={ 
              <AddContactContext.Provider value={ {contacts, setContacts, loadingContacts, dataError} }>
                <ContactList />
              </AddContactContext.Provider>
            }/>
            <Route path="addcontact" element={ 
              <AddContactContext.Provider value={ {contacts, setContacts, loadingContacts, dataError} }>
                <ContactForm />
              </AddContactContext.Provider>
            }/>
            <Route path="*" element={ <NoMatch/> } />
          </Routes>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          CGB ReactJS &copy; 2023
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
