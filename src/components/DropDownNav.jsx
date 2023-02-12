import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function DropDownNav() {
  return (
    <div>
                <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="МОИ РАБОТЫ"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Одностраничные сайты</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Онлайн-Магазины</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Многостраничные сайты</NavDropdown.Item>
            </NavDropdown>
          </Nav>
    </div>
  )
}
