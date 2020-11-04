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
export default function Welcome({ goToDetailsLink, goToAddLink }) {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <>
      <ContainerWelcome>
        {/* <Link to="/philipp">Philipp&apos;s Wishlist</Link>
        <Link to="/leon">Leon&apos;s Wishlist</Link> */}
        {lists?.map((list) => (
          <Link key={list.id} to={`/${list.id}`}>
            {list.title}
          </Link>
        ))}

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
