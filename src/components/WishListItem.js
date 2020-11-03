import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px lightblue;
`;
// theoretisch war hier title importiert für title="Caro"
export default function WishListItem({ goToDetailsLink }) {
  return (
    <>
      <Container>{goToDetailsLink}</Container>
    </>
  );
}

WishListItem.propTypes = {
  // title: PropTypes.string.isRequired,
  goToDetailsLink: PropTypes.element.isRequired,
};
