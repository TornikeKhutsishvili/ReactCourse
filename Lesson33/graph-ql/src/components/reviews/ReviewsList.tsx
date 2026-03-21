import React from 'react'
import type { IReviews } from '../../interfaces/review.interface'
import ReviewsItem from './ReviewsItem'

interface ReviewsListProps {
  reviews: IReviews[] | undefined
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <div className="grid-wrapper">
      <div className='grid'>
        {reviews?.map(({ id, content, rating }) => (
          <ReviewsItem key={id} id={id} content={content} rating={rating} />
        ))}
      </div>
    </div>
  )
}

export default ReviewsList