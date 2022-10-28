import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import Carousel, { Item } from 'react-bootstrap/Carousel';

export default CarouselItem = ({ image }) => {
    return <Item interval={1000}>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Item>
}

CarouselItem.propTypes = {
    image: propTypes.string.isRequired
}