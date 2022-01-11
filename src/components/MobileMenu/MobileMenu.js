/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
  <Overlay isOpen={isOpen} onDismiss={onDismiss} >
      <ContentWrapper aria-label='Menu'>
        <ButtonWrapper onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} size={24}></Icon>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </ButtonWrapper>
        <Side></Side>
        <MobileMenuNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileMenuNav>
        <MobileMenuFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </MobileMenuFooter>
      </ContentWrapper>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-overlay);
  display: flex;
  justify-content: flex-end;
`;

const ContentWrapper = styled(DialogContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: var(--color-white);
  padding: 32px;
`;

const ButtonWrapper = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

const MobileMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const MobileMenuFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: none;
  font-size: ${18 / 16}rem;
  font-weight: var(--weights-medium);
  text-transform: uppercase;

  &:nth-of-type(1) {
    color: var(--color-secondary);
  }
`

const FooterLink = styled.a`
  color: var(--color-gray-900);
  font-size: ${14 / 16}rem;
  text-decoration: none;
`

export default MobileMenu;
