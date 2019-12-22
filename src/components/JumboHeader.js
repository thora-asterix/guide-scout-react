import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class JumboHeader extends Component {

    render(){
        return (
               <div>
                <Jumbotron fluid className={this.props.classApply} id={this.props.id}>
                 <h2 className="text-center">{this.props.title}</h2>             
              </Jumbotron>
              </div>
        )
    }
}

export default  JumboHeader