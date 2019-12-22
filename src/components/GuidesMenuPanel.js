import React, { Component } from 'react';
import { Button } from  'reactstrap';

class GuidesMenuPanel extends Component {

constructor(props){
    super(props);
    this.state = {};
}

  render(){
      return (
        <section id="guides-panel" className="py-5">
        <div className="container">
            <div className="row mb-5">
             <h2 className="text-center col">Choose a guided experience that would upgrade your visit</h2>
           </div>
           <div id="categories" className="row no-gutters">
                 <div id="food-categ" className="col-md-6 ">
                         <img src="/assets/img/fishdish.jpg" className="img-fluid" alt="food and wine" />
                     <div className="over-cover d-flex"><a className="align-self-center mx-auto" href="#food-header"><span className="display-4 text-white d-block">Food</span></a></div>
                   </div>
               <div id="adventure-categ" className="col-md-6">
                     <img src="/assets/img/ziplinning1.jpg" className="img-fluid" alt="food and wine" />
                 <div className="over-cover d-flex"><a className="align-self-center mx-auto" href="#adventure-header"><span className="display-4 text-white d-block">Adventure</span></a></div>
               </div>
               <div id="culture-categ" className="col-md-6">
                     <img src="/assets/img/museums1.jpg" className="img-fluid" alt="food and wine" />
                 <div className="over-cover d-flex"><a className="align-self-center mx-auto" href="#culture-header"><span className="display-4 text-white">Culture</span></a></div>
               </div>            
               <div id="sports-categ" className="col-md-6">
                     <img src="/assets/img/events2.jpg" className="img-fluid" alt="food and wine" />
                 <div className="over-cover d-flex"><a className="align-self-center mx-auto" href="#events-header"><span className="display-4 text-white">Events</span></a></div>
               </div>   
           </div>  
        </div>
    </section>
      )

  }

}

export default GuidesMenuPanel