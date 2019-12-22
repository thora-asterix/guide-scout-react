import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class BookForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            tripDescription: '',
            name: '',
            email: '',
            numPeopleGroup: 0,
            comment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
          <div id={this.props.id} className="container">
              <div className="row">
                  <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Your Name"
                                        value={this.state.name} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Book
                                    </Button>
                                </Col>
                            </FormGroup>
                    </Form>
              </div>
          </div>
        )
    }
}


export default BookForm;