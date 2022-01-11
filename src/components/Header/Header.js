import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <IconWrapper>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} size={24} ></Icon>
            <VisuallyHidden>Shopping Cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} size={24} ></Icon>
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} size={24} ></Icon>
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </IconWrapper>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tablet} {
    justify-content: space-between;
  }

  @media ${QUERIES.phone} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  gap: clamp(
    1rem,
    6.8vw - 3rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tablet} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weights-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const IconWrapper = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
    gap: 32px;
    margin-left: auto;
    align-self: center;
  }

  @media ${QUERIES.phone} {
    gap: 16px;
  }
`

export default Header;
