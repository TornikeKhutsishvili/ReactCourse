import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ReviewsItemProps {
  id: string,
  content: string;
  rating: number;
}

const ReviewsItem: React.FC<ReviewsItemProps> = ({ id, content, rating }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/reviews/${id}`)} className='card'>
      <h1>{content}</h1>
      <h2>{rating}</h2>
    </div>
  )
}

export default ReviewsItem