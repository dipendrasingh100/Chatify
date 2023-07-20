import React, {useRef} from 'react'
import "../css/newpopup.css"
import { useContacts } from "../contexts/ContactsProvider"

const NewContact = ({togglePopup, showPopup}) => {
  const idRef = useRef();
  const nameRef = useRef();
  const {createContact} = useContacts()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., submit to a backend server)
    createContact(idRef.current.value, nameRef.current.value)
    // Close the popup
    togglePopup();
  };
  return (
    <div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>New Contact</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                name="id"
                id="id"
                ref={idRef}
                required
              />

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                ref={nameRef}
                required
              />

              <button type="submit">Submit</button>
              <button onClick={togglePopup}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewContact
