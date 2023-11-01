import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ product }) => {

  return (
    <Card className='mb-10'>
    <Card.Body>
        <div className='d-flex justify-content-between'>
            <div>
                <Card.Img src={product.images[0]} alt={product.title} fluid={true} />
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Subtitle className='text-muted mb-2'>
                    {product.description}
                </Card.Subtitle>
            </div>
        </div>
    </Card.Body>
    </Card>
  )
}

export default ProductCard