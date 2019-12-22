import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Modal, ModalBody, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';



class  GuidedExperiences extends Component {
 constructor(props) {
     super(props);
     this.toggleModal = this.toggleModal.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
     this.state = {
       isModalOpen: false,
       tripDescription: '',
       name: '',
       email: '',
       phoneNum: '',
       numPeopleGroup: 0,
       comment: ''
     };
 }
 toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox'? target.checked : target.value;

    this.setState({
        [name] : value
    })
}

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
        [name] : value
    })
    this.setState({
        isModalOpen: !this.state.isModalOpen
      });
}
    render() {


        const gExp = this.props.experiences.filter(item => item.category === this.props.category).map(item => {
            return (
                <div key={item.id} className="col-md-6">
                  <Card className="mb-2">
                    <CardImg width="100%" src={item.image} top  />
                    <CardBody className="card-body">
                        <img  className="small-image rounded-circle" src={item.imageSmall} />
                        <CardTitle><h3 className="card-title text-center mt-5 text-danger">{item.title}</h3>
                        <h4 className="text-center mb-5">{item.guideName}</h4>
                        </CardTitle>
                        <CardText>{item.description}
                        </CardText>
                        <div class="text-center"> <a href="#booking-header" className="btn btn-warning text-white mx-5" onClick={this.toggleModal} >Book It</a></div> 
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                           <ModalBody>
                           <Form onSubmit={this.handleSubmit}>
                           <FormGroup row>
                                <Label htmlFor="name" md={2}>Trip Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="name" name="name" disabled value={item.title} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="numPeople" md={2}>Group</Label>
                                <Col md={10}>
                                    <Input type="select" id="numPeople" name="numPeople"     
                                        value={this.state.numPeopleGroup} onChange={this.handleInputChange} > 
                                            <option>Number of people</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                      </Input>              
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

                           </ModalBody>
                       </Modal>
                    </CardBody>
                </Card>
                </div>
            )
        });
        return (
        
            <section id={this.props.id}>
            <div className="container mb-5">
                <div className="row">
                    {gExp}
                    </div>
                </div>
                </section>
    
        )
    }

    }


    export default GuidedExperiences;