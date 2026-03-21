import { useQuery } from '@apollo/client/react';
import { useParams } from 'react-router-dom';
import { GET_REVIEW } from '../../graphql/queries/get-review';
import React from 'react'
import ErrorPage from '../ErrorPage';
import ReviewList from '../../components/reviews/ReviewList';
import type { IReview } from '../../interfaces/review.interface';

type ReviewQuery = {
  review: IReview[];
};

const Review: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<ReviewQuery>(GET_REVIEW, {
    variables: { reviewId: id }
  });

  if (loading) return <h1>Loading . . .</h1>
  if (error) return <ErrorPage />

  return (
    <div>
      <ReviewList review={data?.review} />
    </div>
  )
}

export default Review
