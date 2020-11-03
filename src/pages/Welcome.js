import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

const ContainerWelcome = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`;

export default function Welcome() {
  return (
    <>
      <ContainerWelcome>
        <WishListItem title="Caro">
          <Link to="/Details" />
        </WishListItem>
        <Link to="/Add">
          <Button>+</Button>
        </Link>
      </ContainerWelcome>
    </>
  );
}
