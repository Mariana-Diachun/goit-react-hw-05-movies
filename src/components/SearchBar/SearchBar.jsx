import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Button,
  Box,
  Form,
} from 'components/SearchBar/SearchBar.styled';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (query === '') {
      alert('Please enter a word');
      return;
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          query={query}
          onChange={handleNameChange}
          autoComplete="off"
        />
        <Button type="submit">Search film</Button>
      </Form>
    </Box>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
