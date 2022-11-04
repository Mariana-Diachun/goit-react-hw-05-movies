import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { Movies } from 'components/Movies/Movies';
import { Link, Container, Header } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Container>
  );
};
