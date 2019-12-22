import React, { Component } from 'react';
import { waitForElementToBeRemoved } from '@testing-library/dom';

class Footer extends Component {
    render (){
        return (
            <footer id="page-footer">
            <div className="container-fluid">
                    <div className="row ">
                        <div className="col-12 col-md-4 my-5">               
                           <a href="#header"> <img src="/assets/img/logoGuideScoutGrey.png" className="d-block img-fluid mx-auto"  alt="logoGuideScout" /></a>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-around align-items-center mb-5 mb-md-0">               
                              <div><a href="#"><i className="fab fa-twitter-square"></i></a></div>  
                              <div><a href="#"><i className="fab fa-facebook-square"></i></a></div>
                              <div><a href=""><i className="fab fa-instagram"></i></a></div>
                            </div>
                            <div id="page-footer-copyright" className="col-12 col-md-4 d-flex flex-column justify-content-center mb-3 mb-md-0 ">               
                              <div className="align-self-center">Copyright <i className="far fa-copyright"></i>GuideScout</div>    
                            
                              <div className="align-self-center">design By Thora Petropoulos-Huang</div> 
                          </div>
                    </div>
            </div>
            </footer>
        )
    }
}

export default Footer;