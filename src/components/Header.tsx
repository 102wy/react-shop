import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <Wrap>
      <Logo to="/">
        <FaShoppingBag size={24} />
        <h1>Shoppy</h1>
      </Logo>
      <Nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <Button>로그인</Button>
      </Nav>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid #bebebe;
  padding: 0.5em;
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
  h1 {
    font-weight: 500;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  a {
    font-weight: 400;
  }
`;

const Button = styled.button``;
