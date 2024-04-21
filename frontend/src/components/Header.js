import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'lightgray',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
