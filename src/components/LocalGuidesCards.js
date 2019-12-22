import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

const items = [
    {
      id: 1,
      src: '/assets/img/aniaborder.jpg',
      altText: 'Ania',
      caption: 'Ania',
      description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat, ipsum dolorum ab dignissimos quae aperiam, dolores nisi perferendis ad voluptates recusandae? Doloremque, nesciunt necessitatibus. Voluptatum explicabo vero in incidunt'

    },
    {
      id: 2,
      src: '/assets/img/saihborder.jpg',
      altText: 'Saih',
      caption: 'Saih',
      description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat, ipsum dolorum ab dignissimos quae aperiam, dolores nisi perferendis ad voluptates recusandae? Doloremque, nesciunt necessitatibus. Voluptatum explicabo vero in incidunt'

    },
    {
      id: 3,
      src: '/assets/img/taniaborder.jpg',
      altText: 'Tania',
      caption: 'Tania',
      description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat, ipsum dolorum ab dignissimos quae aperiam, dolores nisi perferendis ad voluptates recusandae? Doloremque, nesciunt necessitatibus. Voluptatum explicabo vero in incidunt'

    },
    {
      id: 4,
        src: '/assets/img/mariaborder.jpg',
        altText: 'Maria',
        caption: 'Maria',
        description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat, ipsum dolorum ab dignissimos quae aperiam, dolores nisi perferendis ad voluptates recusandae? Doloremque, nesciunt necessitatibus. Voluptatum explicabo vero in incidunt'

      }
  ];

function RenderCardItem({guide}) {
    return (
        <Card className="col-10 m-auto pt-3">
            <CardImg width="100%" src={guide.src} />
            <CardBody>
                <CardTitle><h2 className="text-warning">{guide.caption}</h2></CardTitle>
                <CardText>{guide.description}</CardText>
            </CardBody>
        </Card>
    )
}

function LocalGuidesCards() {

    const localGuides = items.map(item => {
        return (
            <div key={item.id} className="col-md-6">
                <RenderCardItem guide={item} />
            </div>
        )
    });

return (
    <div className="container">
        <div className="row">
            {localGuides}
            </div>
        </div>

)

}

export default LocalGuidesCards;


