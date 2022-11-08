import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import {
//   Form,
//   Input,
//   Label,
//   Button,
// } from 'components/SearchBar/SearchBar.styled';

function SearchBar({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));

  function handleSubmit(event) {
    event.preventDefault();
    if (query === '') {
      alert('Please enter a word');
      return;
    }
    const newQuery = event.currentTarget.elements.query.value;
    setQuery(newQuery);
    setSearchParams({ query: newQuery });
    onSubmit(newQuery);
    setQuery('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search film</button>
      </form>
    </div>
  );
}

export default SearchBar;
