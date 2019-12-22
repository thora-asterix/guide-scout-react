import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './components/Header';
import GuidesMenuPanel from './components/GuidesMenuPanel.js';
import NavigationMenu from './components/NavigationMenu';
import JumboHeader from './components/JumboHeader';
import LocalGuidesCarousel from './components/LocalGuidesCarousel';
import LocalGuidesCards from './components/LocalGuidesCards';
import GuidedExperiences from './components/GuidedExperiences';
import ContactUs from './components/ContactUs';
import { EXPERIENCES } from './shared/experiences';
import { GUIDES } from './shared/guides'
import Footer from './components/Footer';
import BookForm from './components/BookForm';
import './App.css';


class App extends Component {

constructor(props){
   super(props);
   this.state = {
      experiences: EXPERIENCES,
      guides: GUIDES
   };
}


   render() {
      const expList = this.state.experiences.map(item => item );
      const guidesList = this.state.guides.map(item => item);
     console.log(expList);
     return (
      <div>
          <Header />
          <GuidesMenuPanel />
          <NavigationMenu />
          <JumboHeader title="Our local guides know the best our city has to offer" id="jumbo-guides" classApply="grey-jumbo"/>
          <LocalGuidesCarousel guides={guidesList} />
          <LocalGuidesCards />
          <JumboHeader  title="Food and Wine" id="food-header" classApply="white-jumbo" />
          <GuidedExperiences id="food-guides" category="food" experiences={expList}/>
          <JumboHeader  title="Adventure" id="adventure-header" classApply="green-jumbo" />
          <GuidedExperiences id="adventure-guides" category="adventure" experiences={expList} />
          <JumboHeader  title="Culture" id="culture-header" classApply="white-jumbo" />
          <GuidedExperiences id="culture-guides" category="culture" experiences={expList} />
          <JumboHeader  title="Events" id="events-header" classApply="light-grey-jumbo" />
          <GuidedExperiences id="culture-guides" category="events" experiences={expList} />
          <ContactUs id="contact-info" />
          <Footer />
          
  </div>
     )
   }

}


export default App;
