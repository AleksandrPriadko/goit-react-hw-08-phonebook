import React from "react";
import AddContactForm from "components/PhoneBookForm";
import Contacts from "components/Contacts";

export function ContactsView() {
  return (
    <div>
      <h1>Phonebook</h1>
      <div className="container">
        <AddContactForm />
        <Contacts />
      </div>
    </div>
  );
}
