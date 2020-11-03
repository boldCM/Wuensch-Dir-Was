import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
  background-image: url('https://images.unsplash.com/photo-1510284876186-b1a84b94418f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
  width: 100vw;
  height: 150px;
  background-size: contain;
  background-attachment: fixed;
  text-align: center;
  padding: 140px;
  font-weight: 800;
  text-shadow: 5px 5px 10px #084905;
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>All I want for Christmas is:</HeaderContainer>
    </>
  );
}
