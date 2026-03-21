import React from 'react'

interface ReviewItemProps {
  content: string;
  rating: number;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ content, rating }) => {
  return (
    <div>
      <h2>{content}</h2>
      <h3>{rating}</h3>
    </div>
  )
}

export default ReviewItem