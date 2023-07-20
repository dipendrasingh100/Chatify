import React from "react";
import { useContacts } from "../contexts/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContacts();
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Contacts;
