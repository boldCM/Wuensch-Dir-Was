import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const AddContainer = styled.div`
  border: 1px solid red;
`;

export default function AddPage() {
  return (
    <>
      <AddContainer>Add a new List</AddContainer>
    </>
  );
}
