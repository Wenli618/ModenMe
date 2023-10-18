import { Fragment } from 'react'
import { toast } from 'react-toastify'

import * as styles from "./Home.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dress1 from '../assets/dress1.jpg';
import dress2 from '../assets/dress2.jpg';
import dress3 from '../assets/dress3.jpg';


const Home = function () {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel fade>

      <Carousel.Item>
        <img src={dress1} className={styles.banner} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={dress2} className={styles.banner} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={dress3} className={styles.banner} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;