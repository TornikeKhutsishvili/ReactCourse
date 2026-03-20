import React from 'react'
import type { Ibreweries } from '../interfaces/breweries.interface'
import { useNavigate } from 'react-router-dom'

interface BreweriesCardProps {
  breweries: Ibreweries
}

const Card: React.FC<BreweriesCardProps> = ({breweries: {
  id, name, brewery_type, country, state, city, street, address_1, phone, website_url
}}) => {
  const navigate = useNavigate()

  return (
    <div className='breweries-card' onClick={() => navigate(`/breweries/${id}`)}>
      <div>
        <h1 className='title'>{name}</h1>
      </div>
      <div className='content'>
        <h2>Brewery Type: {brewery_type}</h2>
        <h3>Country: {country}</h3>
        <h3>State: {state}</h3>
        <h3>City: {city}</h3>
        <h3>Street: {street}</h3>
        <h3>Address: {address_1}</h3>
        <h3>Phone: {phone}</h3>
        <p>Website Url: {website_url}</p>
      </div>
    </div>
  )
}

export default Card;