import React from 'react'
import type { Ibreweries } from '../interfaces/breweries.interface'

interface BreweryDetailsCardProps {
  brewery: Ibreweries
}

const BreweryDetailsCard: React.FC<BreweryDetailsCardProps> = ({
  brewery: {
    name, brewery_type, country, state, state_province, city, street, address_1,
    address_2, address_3, postal_code, latitude, longitude, phone, website_url
  }
}) => {
  return (
    <div className='brewery-card'>
      <div>
        <h1 className='title'>{name}</h1>
      </div>
      <div className='content'>
        <h2>Brewery Type: {brewery_type}</h2>
        <h3>Country: {country}</h3>
        <h3>State: {state}</h3>
        <h3>State Province: {state_province}</h3>
        <h3>City: {city}</h3>
        <h3>Street: {street}</h3>
        <h3>Address 1: {address_1}</h3>
        <h3>Address 2: {address_2}</h3>
        <h3>Address 3: {address_3}</h3>
        <h3>Postal code: {postal_code}</h3>
        <h3>Latitude: {latitude}</h3>
        <h3>Longitude: {longitude}</h3>
        <h3>Phone: {phone}</h3>
        <p>Website Url: {website_url}</p>
      </div>
    </div>
  )
}

export default BreweryDetailsCard;
