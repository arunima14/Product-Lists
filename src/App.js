import './App.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import FetchProducts from './components/FetchProducts';
import ProductCard from './components/ProductCard';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  const [params, setParams] = useState({});
  const { products, loading, error } = FetchProducts(params);

  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    // setPage(1);
    setParams( prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className='my-4'>
    <h1 className='mb-4'> Product List</h1>
    <SearchBar params={params} handleParamChange={handleParamChange} />
    {/* <JobPagination page={page} setPage={setPage} hasNextPage={true} /> */}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, try refreshing!</h1>}
      
        <div className='container'>
          <div className='row'>
            { products.map(product => (
              <div key={product.id} className="col-md-4 col-sm-6 col-xs-12">
                <ProductCard className='mb-10' product={product} />
              </div>
            ))}
          </div>
        </div>
      
      {/* <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
    </Container>
  );
}

export default App;
