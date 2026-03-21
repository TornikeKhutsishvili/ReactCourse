import React from 'react'
import type { IReviews } from '../../interfaces/review.interface';
import { useQuery } from '@apollo/client/react';
import { GET_REVIEWS } from '../../graphql/queries/get-reviews';
import ErrorPage from '../ErrorPage';
import ReviewsList from '../../components/reviews/ReviewsList';

type ReviewsQuery = {
  reviews: IReviews[] | undefined;
};

const Reviews: React.FC = () => {
  const { data, loading, error } = useQuery<ReviewsQuery>(GET_REVIEWS);

  if (loading) return <h1>Loading . . .</h1>
  if (error) return <ErrorPage />

  return (
    <div>
      <ReviewsList reviews={data?.reviews} />
    </div>
  )
}

export default Reviews