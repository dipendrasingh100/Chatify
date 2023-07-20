import React from 'react'
import { useConversations } from '../contexts/ConversationProvider';

const Conversations = () => {
  const {conversations} = useConversations()
  return (
    <div>
      <ul>
        {conversations.map((conversation, index) => {
          return <li key={index}>{conversation.recipients.map(recipient => recipient.name ).join(', ')}</li>;
        })}
      </ul>
    </div>
  )
}

export default Conversations
