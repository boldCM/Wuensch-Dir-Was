import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';
import { getLists } from '../api/lists';

const ContainerWelcome = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`;

// theoretisch wurde hier title für die WishListItem übergeben
// hier war mal goToDetailsLink aus der App geholt worden in den Argemunten
export default function Welcome({ goToAddLink }) {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <>
      <ContainerWelcome>
        <WishListItem
          goToDetailsLink={lists?.map((list) => (
            <li>
              <Link key={list.id} to={`/${list.id}`}>
                {list.title}
              </Link>
            </li>
          ))}
        />
        <Button>{goToAddLink}</Button>
      </ContainerWelcome>
    </>
  );
}

Welcome.propTypes = {
  // title: PropTypes.string.isRequired,
  goToAddLink: PropTypes.element.isRequired,
  // goToDetailsLink: PropTypes.element.isRequired,
};
