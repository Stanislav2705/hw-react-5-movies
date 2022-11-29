import PropTypes from 'prop-types';
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { Notify } from 'notiflix';
import { Block, Button, Form, Input } from './SearchBox.styled';

export default function SearchBox({ submit }) {
  const [movieName, setMovieName] = useState('');

  function handleChange(e) {
    setMovieName(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (movieName.trim() === '') {
      return Notify.warning("Fill this field");
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
