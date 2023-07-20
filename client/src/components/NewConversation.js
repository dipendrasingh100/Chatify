import React, {useState} from 'react'
import "../css/newpopup.css"
import { useContacts } from '../contexts/ContactsProvider';
import { useConversations } from '../contexts/ConversationProvider';

const NewConversation = ({togglePopup, showPopup}) => {
    const { contacts } = useContacts()
    const { createConversation } = useConversations()
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the form data (e.g., submit to a backend server)
      createConversation(selectedContactIds)
      // Close the popup
      togglePopup();
    };

    const handleCheckboxChange = (contactId)=>{
        setSelectedContactIds(prevSelectedContactIds=>{
          console.log(prevSelectedContactIds)
          if(prevSelectedContactIds.includes(contactId)){
            return prevSelectedContactIds.filter(prevId => {
              return contactId !== prevId 
            })
          } else {
            return [...prevSelectedContactIds, contactId]
          }
        })
    }
    return (
      <div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>New Conversation</h2>
              <form onSubmit={handleSubmit}>
                { contacts.map(contact =>(
                    <div key="contact.id">
                      <input type="checkbox" name="name" id="name" value={selectedContactIds.includes(contact.id)} onChange={()=> handleCheckboxChange(contact.id)} />
                      <label htmlFor="name">{contact.name}</label>
                    </div>
                )
                )}
  
                <button type="submit">Submit</button>
                <button onClick={togglePopup}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  

export default NewConversation
