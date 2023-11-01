import './App.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import FetchProducts from './components/FetchProducts';

function App() {
  const [params, setParams] = useState({});
  const { products, loading, error } = FetchProducts(params);
  return (
    <Container className='my-4'>
    <h1 className='mb-4'> Product List</h1>
    {/* <SearchBar params={params} handleParamChange={handleParamChange} />
    <JobPagination page={page} setPage={setPage} hasNextPage={true} /> */}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, try refreshing!</h1>}
      {/* {jobs.map(job => {
        return (
          <JobCard key={job.id} job={job} />
        )
      })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
    </Container>
  );
}

export default App;
