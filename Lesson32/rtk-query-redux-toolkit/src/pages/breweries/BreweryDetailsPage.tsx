import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchDetailsBreweryQuery } from '../../store/beers/breweries.api';
import ErrorPage from '../ErrorPage';
import BreweryDetailCard from '../../components/BreweryDetailsCard';

const BreweryDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useFetchDetailsBreweryQuery(String(id))

  if (isLoading) return <h1>Loading . . .</h1>
  if (isError) return <ErrorPage />

  return (
    <section id="brewery_section_id">
      <h1 className='title'>Details Brewery</h1>
      <div>
        {data && <BreweryDetailCard key={id} brewery={data} />}
      </div>
    </section>
  )
}

export default BreweryDetailsPage;