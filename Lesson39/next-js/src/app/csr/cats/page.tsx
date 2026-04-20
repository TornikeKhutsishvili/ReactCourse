"use client"
import { ICat } from '@/core/interfaces/cat.interface';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const BaseUrl = 'https://api.thecatapi.com/v1'

const CatsPage:React.FC = () => {
    const [cats, setCats] = useState<ICat[]>([]);

    useEffect(() => {
        const fetchCats = async () => {
          try {
            const response = await fetch(
              `${BaseUrl}/images/search?limit=10&api_key=${process.env.CAT_API_KEY}`
            );
            const data = await response.json();
            setCats(data);
          } catch (error) {
            console.error('Error fetching cats:', error);
          }
        };

        fetchCats();
    }, [cats]);

  return (
    <div className='flex w-200 m-auto my-2 flex-wrap'>
      {cats.map(({id, url}: ICat) => (
        <div key={id} className='w-56 h-64 relative m-2'>
          <Image className="object-cover"
            src={url}
            alt={`URL: ${url} Cat`}
            fill={true}
            sizes='{max-width: 758px} 100vw, {max-width: 1200px} 50vw, 33vw'
        />
        </div>
      ))}
    </div>
  )
}

export default CatsPage;
