import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

const ContainerWelcome = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`;

// theoretisch wurde hier title für die WishListItem übergeben
export default function Welcome({ goToDetailsLink, goToAddLink }) {
  return (
    <>
      <ContainerWelcome>
        <WishListItem goToDetailsLink={goToDetailsLink} />
        <Button>{goToAddLink}</Button>
      </ContainerWelcome>
    </>
  );
}

Welcome.propTypes = {
  // title: PropTypes.string.isRequired,
  goToAddLink: PropTypes.element.isRequired,
  goToDetailsLink: PropTypes.element.isRequired,
};
