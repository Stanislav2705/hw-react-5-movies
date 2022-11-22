import PropTypes from 'prop-types';
// import { Field, Formik } from "formik";
// import { Form } from "formik";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from "react-toastify";

export default function SearchBox({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  function handleChange(e) {
    setMovieName(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (movieName.trim() === '') {
      return toast.info("Fill this field");
    }

    onSubmit({ movieName });
    reset();
  }

  function reset() {
    setMovieName('');
  }

  return (
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <button type="onSubmit">
            <AiOutlineSearch size='20'/>
          </button>

          <input
            name="movieName"
            value={movieName}
            type="text"
            autoComplete="off"
            onChange={handleChange}
            autoFocus
            placeholder="Search movie"
          />
        </div>
      </form>
  );
};

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
