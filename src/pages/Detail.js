import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
// import PropTypes from 'prop-types';

const DetailsContainer = styled.div`
  border: 1px solid darkblue;
`;

export default function Details() {
  const { details } = useParams();

  return (
    <>
      <DetailsContainer> Write some Wishes for {details}</DetailsContainer>
    </>
  );
}
