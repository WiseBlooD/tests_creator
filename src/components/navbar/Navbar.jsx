import React, {useContext} from 'react';
import {Context} from "../../main";
import {Container, Navbar, NavDropdown,Nav} from "react-bootstrap";
import {LOGIN_ROUTE, MAIN_ROUTE, PRIVATE_OFFICE_ROUTE, REGISTRATION_ROUTE} from "../../consts";

const Mynavbar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            {user.isAuth ?
                <Container>
                    <Navbar.Brand href={MAIN_ROUTE}>Main page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={PRIVATE_OFFICE_ROUTE}>Личный кабинет</Nav.Link>
                            <Nav.Link href={MAIN_ROUTE}>Выход</Nav.Link>
                            <Nav.Link href={LOGIN_ROUTE}>Login</Nav.Link>
                            <Nav.Link href={REGISTRATION_ROUTE}>Registration</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container> :
                <Container>
                    <Navbar.Brand href={MAIN_ROUTE}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={REGISTRATION_ROUTE}>Регистрация</Nav.Link>
                            <Nav.Link href={LOGIN_ROUTE}>Вход</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            }

        </Navbar>
    );
};

export default Mynavbar;