import React from 'react'
import BreweriesCard from '../../components/BreweriesCard'
import { useFetchRandomBreweryQuery } from '../../store/beers/breweries.api';
import ErrorPage from '../ErrorPage';

const BreweriesRandom: React.FC = () => {
  const { data, isError, isLoading } = useFetchRandomBreweryQuery();

  if (isLoading) return <h1>Loading . . .</h1>
  if (isError) return <ErrorPage />

  return (
    <section id="random_breweries_section_id">
      <h1 className='title'>Random Breweries</h1>
      <div>
        {(data)?.map((random_b) => (
          <BreweriesCard key={random_b.id} breweries={random_b} />
        ))}
      </div>
    </section>
  )
}

export default BreweriesRandom;
