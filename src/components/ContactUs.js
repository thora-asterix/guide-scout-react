import React, { Component } from 'react';


class ContactUs extends Component {


render() {
       return (
        <section id="contact-info">
        <div className="container">
        <div className="row py-5">
          <div className="col-12 col-sm-6 pb-5">
           <h4>Our Office</h4>
           <p>4602 Neverland, Everland TX 75002</p>
           <p></p>
          </div>
          <div className="col-12 col-sm-6 ">
            <h4>Contact Us</h4>
            <p><i className="fas fa-phone"></i>888-800-8888</p>
            <p><i className="fas fa-envelope-square"></i>thora.asterix@gmail.com</p>
          </div>
        </div>
        </div>
      </section>
       )
 }

}

export default ContactUs