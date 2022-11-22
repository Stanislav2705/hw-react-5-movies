import {  Field, Formik } from "formik";
import { Form } from "formik";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from "react-toastify";

export default function SearchBox({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleChange = (e) => {
    setMovieName(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieName.trim() === "") {
      return toast.info("Fill this field")
    }

    onSubmit({movieName})
    reset();
  }

  const reset = () => {
    setMovieName('');
  }

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
      >
        <Form>
          <button type="onSubmit">
            <AiOutlineSearch size='20'/>
          </button>

          <Field
            name="movieName"
            value={movieName}
            type="text"
            autoComplete="off"
            onChange={handleChange}
            autoFocus
            placeholder="Search movie"
          />
        </Form>

      </Formik>
    </div>
  );
};


