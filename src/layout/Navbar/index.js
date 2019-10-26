import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

const navItemsDefault = [
  {
    slug: "home", 
    title: "Inicio"
  },
  {
    slug: "about", 
    title: "Sobre"
  },
  {
    slug: "contact", 
    title: "Contato"
  }
]

const NavbarComponent = ({config, navBarApparence, navItems = navItemsDefault}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar 
      color={navBarApparence.style} 
      light={navBarApparence.style == 'light'} 
      dark={navBarApparence.style == 'dark'} 
      fixed={navBarApparence.fixed} 
      sticky={navBarApparence.sticky} 
      expand="md"
      >
      <Container>
        <NavbarBrand href="/">{config.page_name}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navItems.map(item => (
              <NavItem key={item.slug}>
                <NavLink href={`#${item.slug}`}>{item.title}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;