// Function
const AddContactForm = () => {
  var newName = prompt("What's your name?");
  var newEmail = prompt("What's your email?");
  return ({newName, newEmail});
}

// Exports
export default AddContactForm;
