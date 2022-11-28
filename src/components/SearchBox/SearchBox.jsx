import PropTypes from 'prop-types';
// import { Field, Formik } from "formik";
// import { Form } from "formik";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from "react-toastify";
import { Block, Button, Form, Input } from './SearchBox.styled';

export default function SearchBox({ submit }) {
  const [movieName, setMovieName] = useState('');

  function handleChange(e) {
    setMovieName(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (movieName.trim() === '') {
      return toast.info("Fill this field");
    }

    submit({ movieName });
    reset();
  }

  function reset() {
    setMovieName('');
  }

  return (
      <Form
        onSubmit={handleSubmit}
      >
        <Block>
          <Input
            name="movieName"
            value={movieName}
            type="text"
            autoComplete="off"
            onChange={handleChange}
            // autoFocus
            placeholder="Search movie"
        />
        <Button type="submit">
            <AiOutlineSearch size='20'/>
        </Button>
        </Block>
      </Form>
  );
};

SearchBox.propTypes = {
    submit: PropTypes.func.isRequired,
};
