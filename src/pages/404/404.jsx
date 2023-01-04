import styled from 'styled-components';

const StyledSection = styled.div`
  font-size: 50px;
  text-align: center;
  margin: auto;
  color: red;
  margin-top: 50px;
`;

const NotFound = () => {
  return <StyledSection>404 Page not found.</StyledSection>;
};

export default NotFound;
