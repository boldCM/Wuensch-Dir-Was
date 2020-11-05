import { useParams, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { deleteListById, getListById } from '../api/lists';
import DangerButton from '../components/DangerButton';

const DetailsContainer = styled.div`
  border: 1px solid darkblue;
`;

export default function Details() {
  const { listId } = useParams();
  const [list, setList] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  if (!list) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };

  return (
    <>
      <DetailsContainer>
        Write some Wishes for &nbsp;
        {list?.title}
        <ul>
          {list?.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <DangerButton onClick={() => handleDelete()}>
          Delete full List
        </DangerButton>
        <Link to="/">Back</Link>
      </DetailsContainer>
    </>
  );
}
