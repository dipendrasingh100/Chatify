import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'

const ConversationContext = React.createContext()

export function useConversations(){
    return useContext(ConversationContext)
}

const ConversationProvider = ({children}) => {
    const {contacts} = useContacts()

    const [conversations, setConversation] = useLocalStorage('conversations',[])
    function createConversation(recipients) {
        setConversation((prevConversations) => {
          return [...prevConversations, { recipients, messages:[] }];
        });
      }

      const formatedConversations = conversations.map(conversation => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = (contact && contact.name) || recipient
            return { id: recipient, name}
        })

        return { ...conversation, recipients }
      })

      const value = {
        conversations: formatedConversations,
        createConversation
      }
  return (
    <ConversationContext.Provider value={value}>
        {children}
    </ConversationContext.Provider> 
  )
}

export {ConversationProvider}
