import { Routes, Route, NavLink } from 'react-router-dom';
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
        <Route psth="/movies" element={<Movies />} />
      </Routes>
    </Container>
  );
};
