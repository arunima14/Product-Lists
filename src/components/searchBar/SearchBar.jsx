import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const SearchBar = ({ params, onParamChange}) => {
  return (
    <Form className='mb-4'>
        <Row className='align-items-end'>
            <Form.Group as={Col}>
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={onParamChange} value={params.text} name='description' type='text' />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={onParamChange} value={params.location} name='location' type='text' />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Sort by</Form.Label>
                <Form.Control as="select" onChange={onSortChange} value={params.sortBy} name="sortBy">
                    <option value="relevance">Relevance</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    {/* Add more sorting options as needed */}
                </Form.Control>
            </Form.Group>
        </Row>
    </Form>
  )
}

export default SearchBar