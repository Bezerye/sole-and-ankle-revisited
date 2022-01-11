import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const BreadCrumbsEl = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">
        Shoes
      </Breadcrumbs.Crumb>
    </Breadcrumbs>
  )
}

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <MobileArrangeWrapper>
            <BreadcrumbsMobileWrapper>
              <BreadCrumbsEl></BreadCrumbsEl>
            </BreadcrumbsMobileWrapper>
            <Title>Running</Title>
          </MobileArrangeWrapper>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadCrumbsEl></BreadCrumbsEl>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tablet} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weights-medium);
`;

const BreadcrumbsMobileWrapper = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    display: block;
  }
`

const MobileArrangeWrapper = styled.div`
  @media ${QUERIES.tablet} {
    display: flex;
    flex-direction: column;
  }
`

export default ShoeIndex;
