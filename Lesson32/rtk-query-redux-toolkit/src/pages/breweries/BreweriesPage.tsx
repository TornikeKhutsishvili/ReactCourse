import React, { useState } from 'react'
import { useFetchBreweriesQuery } from '../../store/beers/breweries.api'
import ErrorPage from '../ErrorPage';
import BreweriesCard from '../../components/BreweriesCard';

const BreweriesPage: React.FC = () => {
  const [ page, setPage ] = useState(1);
  const [ per_page, setPer_Page ] = useState(10);
  const { data, isError, isLoading } = useFetchBreweriesQuery({ page, per_page });

  if (isLoading) return <h1>Loading . . .</h1>
  if (isError) return <ErrorPage />

  return (
    <section id="breweries_section_id">
      <h1 className='title'>Breweries</h1>

      <select value={page} onChange={e => setPage(Number(e.target.value))} name="pages" id="pages" title='Pages'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>

      <select value={per_page} onChange={e => setPer_Page(Number(e.target.value))} name="per_pages" id="per_pages" title='Per Pages'>
        <option value={10}>10</option>
        <option value={80}>80</option>
        <option value={150}>150</option>
      </select>

      <div>
        {(data)?.map((breweries) => (
          <BreweriesCard key={breweries.id} breweries={breweries} />
        ))}
      </div>
    </section>
  )
}

export default BreweriesPage;
