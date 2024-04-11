import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        console.log("addContact fulfilled");
        resetForm();
      })
      .catch((error) => {
        console.error("addContact rejected:", error);
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.inputfield}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="name"
            className={css.label}
            autoComplete="off"
          />

          <ErrorMessage name="name" component="div" className={css.required} />
          <label htmlFor="number" className={css.inputfield}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="number"
            className={css.label}
            autoComplete="off"
          />
          <ErrorMessage
            name="number"
            component="div"
            className={css.required}
          />
          <button type="submit" className={css.submitbutton}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
