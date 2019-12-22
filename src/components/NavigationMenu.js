import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,NavLink } from 'reactstrap';
import { throwStatement } from '@babel/types';

class NavigationMenu extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            

                <Navbar id="main-nav" sticky="top" light expand="md">
                        <NavbarBrand  href="/">Menu</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto" >
                                <NavItem>
                                    <NavLink href="#header" className="nav-link" to="/header">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#guides-panel" className="nav-link" to="/guides-panel">
                                        Guides
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#jumbo-guides" className="nav-link" to="/jumbo-guides">
                                       Our Team
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#contact-info" className="nav-link" to="/contactus">
                                      Contact Us
                                    </NavLink>
                                </NavItem>                             
                            </Nav>

                        </Collapse>
                </Navbar>

            
        );
    }
}

export default NavigationMenu;