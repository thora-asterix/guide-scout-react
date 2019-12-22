import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
class Header extends Component {

constructor(props){
    super(props);
    this.state = {
        isNavOpen: false,
        isModalOpen: false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }
      toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState
        (
            {
                isModalOpen: !this.state.isModalOpen
            }
        );
    }
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render(){
        return (
            <div id="header">
            <div className="color-cover">
            <div className="container-fluid">
                <div className="row pt-4 ">
                    <div className="col-12  col-md-7 mt-1 mb-5 my-md-0">
                      <img className="img-fluid d-block mx-auto ml-md-0"  src="/assets/img/guideScoutLogo.png" alt="logo" />
                      </div>
                    <div className="col-12  col-md-5 ">
                        <div className="row justify-content-center justify-content-md-end">
                        <Button className="btn btn-lg bg-white btn-outline-light" data-toggle="modal" data-target="#register">Register</Button>
                       <Button className="btn btn-lg mx-2 bg-white btn-outline-light" onClick={this.toggleModal}>Login</Button> 
                       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                    </div>
                    </div>
                </div>
                <div className="row pt-4">
                      <h1 className="col-sm-10 mx-auto mt-5 text-center">Explore With Us</h1>
                </div>
            </div>
          </div>
         </div>
        )
    }
}

export default Header