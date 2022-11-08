import { StyledLink } from 'components/BackLink/BackLink.styled';
import { FiArrowLeft } from 'react-icons/fi';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <FiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
