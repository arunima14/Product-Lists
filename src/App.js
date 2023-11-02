import './App.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import FetchProducts from './components/FetchProducts';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import Pagination from '@mui/material/Pagination';

function App() {
  const [params, setParams] = useState({text: '', sortBy: 'relevance', page: 1});
  const { products, loading, error, currentPage } = FetchProducts(params);
  const PAGE_SIZE = 10;

  const handleSearchChange = (searchText) => {
    setParams({ ...params, text: searchText });
  };

  const handleSortChange = (selectedSortOption) => {
    setParams({ ...params, sortBy: selectedSortOption });
  };

  const handlePageChange = (event, page) => {
    setParams({ ...params, page });
  };

  return (
    <Container className='my-4'>
      <h1 className='mb-4'> Product List</h1>
      <SearchBar params={params} onSearchChange={handleSearchChange} onSortChange={handleSortChange} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, try refreshing!</h1>}
    
      <div className='container'>
        <div className='row'>
          { products.map(product => (
            <div key={product.id} className="col-md-4 col-sm-6 col-xs-12 mb-5">
              <ProductCard className='mb-10' product={product} />
            </div>
          ))}
        </div>
      </div>
      
      <Pagination
        className='mt-4' style={{alignItems:"center"}}
        count={Math.ceil(products.length / PAGE_SIZE)}
        page={params.page}
        onChange={(event, page) => handlePageChange(page)}
      />
    </Container>
  );
}

export default App;
