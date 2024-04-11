import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";
export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <div className={css.card}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};
