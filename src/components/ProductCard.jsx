import React, { useState } from 'react'
import { Card, Carousel, Col } from 'react-bootstrap'

const ProductCard = ({ product }) => {

  return (
    <Card className='mb-10' style={{height:"100%"}} >
        <Card.Body>
            <div className='d-flex justify-content-between'>
                <div>
                    <Carousel>
                        {product.images.map((image, index) => (
                            <Carousel.Item key={index} interval={3500}>
                                <img src={image} alt={`${product.title} Image ${index}`} className="d-block w-100"style={{maxHeight:"150px"}} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Card.Title className='mt-4'>
                        {product.title}
                    </Card.Title>
                    <Card.Subtitle className='text-muted mb-2'>
                        {product.description}
                    </Card.Subtitle>

                    <h5>
                        <Card.Text> Rs.{product.price}</Card.Text>
                    </h5>
                </div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default ProductCard