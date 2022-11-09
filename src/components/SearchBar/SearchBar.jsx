import { useState } from 'react';
import PropTypes from 'prop-types';
// import { useSearchParams } from 'react-router-dom';
import {
  Input,
  Button,
  Box,
  Form,
} from 'components/SearchBar/SearchBar.styled';

function SearchBar({ onSubmit }) {
  // const [searchParams, setSearchParams] = useSearchParams();
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
    // const newQuery = event.currentTarget.elements.query.value;
    // setQuery(newQuery);
    // setSearchParams({ query: newQuery });
    // onSubmit(newQuery);
    // setQuery('');
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
