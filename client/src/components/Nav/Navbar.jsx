import React, { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBoot from 'react-bootstrap/Navbar';

function Navbar() {
  const user = useSelector((state) => state.user) || JSON.parse(localStorage.getItem('user'));

  return (
    <NavbarBoot bg="dark" variant="dark">
      <Container>
        <NavbarBoot.Brand href="/">4atik</NavbarBoot.Brand>
        <Nav className="me-auto">
          {user ? (
            <>
              {/* <Nav.Link href="/profile">My Profile</Nav.Link> */}
              <Nav.Link href="/dialogues">Dialogues</Nav.Link>
              {['admin', 'moderator'].includes(user.role)
              && <Nav.Link href="/settings">Settings</Nav.Link>}
              <Nav.Link href="/signout">Sign Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </>
          )}

        </Nav>
      </Container>
    </NavbarBoot>
  );
}

export default Navbar;
