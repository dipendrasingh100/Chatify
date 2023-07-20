import React, { useState } from 'react'
import "../css/sidebar.css"
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewConversation from './NewConversation'
import NewContact from './NewContact'

const Sidebar = ({id}) => {
    const [active, setActive] = useState('conv')

    const [showPopup, setShowPopup] = useState(false);
    
    const ConversationsOpen = active === "conv"
    const handleConversation = ()=>{
        setActive('conv')
        document.getElementById("cont").classList.remove("sel-cont")
        document.getElementById("conv").classList.add("sel-conv")
    }
    
    const handleContact = ()=>{
        setActive('cont')
        document.getElementById("conv").classList.remove("sel-conv")
        document.getElementById("cont").classList.add("sel-cont")
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
      };
    
    const ConversationPopup = ConversationsOpen && showPopup
    const ContactPopup = !ConversationsOpen && showPopup

  return (
    <aside className='side-bar'>
        <nav className='nav-bar'>
            <ul>
                <li className="tabs sel-conv" id="conv" onClick={handleConversation}>Conversations</li>
                <li className="tabs" id="cont" onClick={handleContact}>Contacts</li>
            </ul>
        </nav>
        <div className="side-container">
        { ConversationsOpen ? <Conversations/> : <Contacts/> }
        </div>
        <div className="idBox">Your Id: <span className='text-muted'>{id}</span></div>
        <button className='new-Btn' onClick={togglePopup}>New { ConversationsOpen ? "Conversation" : "Contact"}</button>

        { ConversationPopup && <NewConversation togglePopup={togglePopup} showPopup ={showPopup}/>}
        { ContactPopup && <NewContact togglePopup={togglePopup} showPopup ={showPopup}/>}
    </aside>
  )
}

export default Sidebar
