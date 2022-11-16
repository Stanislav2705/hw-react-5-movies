import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "formik";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from "react-toastify";

export default function SearchBox ({ onSubmit }) {
  const handleSubmit = (values) => {
    if (values.query.trim() === "") {
      return toast.info("Fill this field")
    }

    onSubmit(values.query.trim())
  }

  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <button type="submit">
            <AiOutlineSearch size='20'/>
          </button>

          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <ErrorMessage name="query" />
        </Form>

      </Formik>
    </div>
  );
};


