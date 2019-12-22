import React, { useState, Component } from 'react';
import { Jumbotron,  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,Modal, ModalHeader, ModalBody, Button,Card, CardImg, CardText, CardBody, CardTitle,Label  } from 'reactstrap';





function  LocalGuidesCarousel(props)  {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.guides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.guides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.guides.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-fluid"   />
       <CarouselCaption captionText={item.altText} captionHeader={item.caption} />

      </CarouselItem>
    );
  });

  return (
    <div>
    <section id="local-guides" className="local-guides">
        <div className="container">
            <div className="row mb-5">
                 <div className="col-md-4 d-flex justify-content-center p-3 bg-warning">
                     <h4 className="align-self-center ">Meet our guides</h4>
                    </div>
                <div className="col-md-4 mx-auto ">
                <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={props.guides} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>                </div>
                <div className="col-md-4 d-flex justify-content-center p-3 bg-warning">
                        <h4 className="align-self-center">Our Local Experts</h4>
                       </div>
            </div>
        </div>
    </section>
              </div>

  );
}

export default LocalGuidesCarousel;