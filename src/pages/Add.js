import { useState } from 'react';
import styled from 'styled-components/macro';
import Button from '../components/Button';
// import PropTypes from 'prop-types';

const AddContainer = styled.div`
  border: 1px solid red;
`;

export default function AddPage() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`submitted ${value}`);
  };

  return (
    <>
      <AddContainer>
        Add a new List for
        <form onSubmit={handleSubmit}>
          <label placeholder="Enter Name">
            <input type="text" value={value} onChange={onChange} />
          </label>
          <Button type="submit">Add</Button>
        </form>
      </AddContainer>
    </>
  );
}
