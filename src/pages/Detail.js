import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getListById } from '../api/lists';

const DetailsContainer = styled.div`
  border: 1px solid darkblue;
`;

export default function Details() {
  const { listId } = useParams();
  const [list, setList] = useState(null);

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);
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
        <Link to="/">Back</Link>
      </DetailsContainer>
    </>
  );
}
