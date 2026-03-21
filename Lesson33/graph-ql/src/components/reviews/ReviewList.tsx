import React from 'react'
import type { IReview } from '../../interfaces/review.interface'
import ReviewItem from './ReviewItem'

interface ReviewListProps {
  review: IReview[] | undefined
}

const ReviewList: React.FC<ReviewListProps> = ({ review }) => {
  return (
    <div>
      {review?.map(({ id, content, rating }) => (
        <ReviewItem key={id} content={content} rating={rating} />
      ))}
    </div>
  )
}

export default ReviewList