import { useSelector } from "react-redux";
import { Contact } from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <ul className={css.lists}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.list}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};
