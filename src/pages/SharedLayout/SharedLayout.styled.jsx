import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 25px 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.41;
  color: #292929;
  :not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #a84c6d;
  }
`;
