import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const onSortChange = () => {
    // TODO: change the state of product list to sorted based on the option chosen by the user
}
const SearchBar = ({ params, onSearchChange, onSortChange }) => {
    const handleSearch = (e) => {
        const searchText = e.target.value;
        onSearchChange(searchText);
    };

    const handleSortChange = (e) => {
        const selectedSortOption = e.target.value;
        onSortChange(selectedSortOption);
    };


    return (
        <Form className='mb-4'>
            <Row className='align-items-end'>
                <Form.Group as={Col}>
                    <Form.Label>Search 🔍</Form.Label>
                    <Form.Control onChange={handleSearch} value={params.text} name='description' type='text' />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Sort by ⇅</Form.Label>
                    <Form.Control as="select" onChange={handleSortChange} value={params.sortBy} name="sortBy">
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