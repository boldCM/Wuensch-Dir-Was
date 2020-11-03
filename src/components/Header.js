import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
  border: 1px solid green;
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>All I want for Christmas is:</HeaderContainer>
    </>
  );
}
