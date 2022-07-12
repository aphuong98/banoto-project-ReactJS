import React from "react";
import { UncontrolledCarousel } from 'reactstrap';
import './style.scss'
function Carousel() {

  return (
    <div>
      <UncontrolledCarousel
        items={[
          {
            altText: "Slide 1",
            caption: "Car 1",
            key: 1,
            src: "https://picsum.photos/id/1070/2000/600",
          },
          {
            altText: "Slide 2",
            caption: "Car 2",
            key: 2,
            src: "https://picsum.photos/id/111/2000/600",
          },
          {
            altText: "Slide 3",
            caption: "Car 3",
            key: 3,
            src: "https://picsum.photos/id/133/2000/600",
          },
        ]}
      />
    </div>
  );
}
export default Carousel;