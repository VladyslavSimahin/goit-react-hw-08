import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectTextFilter } from "../filters/slice";

export const selectVisibleContacts = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, textFilter) => {
    console.log("selectVisibleContacts");
    return contacts.filter(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
