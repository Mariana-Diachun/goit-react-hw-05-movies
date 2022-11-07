import { StyledLink } from 'components/BackLink/BackLink.styled';
import { FiArrowLeft } from 'react-icons/fi';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <FiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
