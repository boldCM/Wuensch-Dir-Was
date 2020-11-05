import { useState } from 'react';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import { postList } from '../api/lists';
// import PropTypes from 'prop-types';

const AddContainer = styled.div`
  border: 1px solid red;
`;

export default function AddPage() {
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postList({ title });
    setTitle('');
  };

  return (
    <>
      <AddContainer>
        Add a new List for
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={title}
              onChange={onChange}
              placeholder="Enter Name"
            />
          </label>
          <Button type="submit">Add</Button>
        </form>
      </AddContainer>
    </>
  );
}
