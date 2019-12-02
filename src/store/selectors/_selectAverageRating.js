import {createSelector} from 'reselect'

export const _selectAverageRating = createSelector(
  (state, ownProps) => state.reviews,
  (state, ownProps) => ownProps.reviewsId,
  (reviews, reviewsId) => {
    const totalRating = reviewsId.reduce((totalRating, review) => {
      return (totalRating = totalRating + reviews[review].rating)
    }, 0)

    const rawRating = totalRating / reviewsId.length
    return Math.floor(rawRating * 2) / 2
  }
)
