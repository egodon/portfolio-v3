import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { color, font_size } from 'style';
import { side_padding } from 'components/SideNav';

console.log(side_padding)
const NavLink = (props) => (
  <NavItem>
    <Link
      {...props}
      getProps={({ isCurrent }) => ({
        style: {
          color: isCurrent ? '#fff' : color.white,
          backgroundColor: isCurrent ? color.grey_500 : color.black,
        },
      })}
    />
  </NavItem>
);

export const itemHeight = '3.6rem';

const NavItem = styled.li`
  cursor: pointer;

  &:hover {
    background-color: ${color.grey_500};
  }

  a {
    height: ${itemHeight};
    line-height: ${itemHeight};
    padding: 0 3.2rem;
    letter-spacing: 1px;
    font-size: ${font_size.medium};
    display: block;
  }
`;
export default NavLink;
