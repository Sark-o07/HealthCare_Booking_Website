import React, { useState } from 'react'
import { StarRating } from '../../utils/StarRating';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleSubmitReview = async e => {
        e.preventDefault()

        // I will use api to complete this functionality.
    }
    
  return (
    <form action="">
        <div>
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                How would you rate the overall experience?*
            </h3>

            <StarRating />
        </div>

        <div className="mt-[30px]">
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                Share your feedback or suggestions*
            </h3>

            <textarea className='border border-solid border-[#0066ff34] focus:outline
              outtline-primaryColor w-full px-4 py-3 rounded-end'
              rows="5"
              placeholder='Write your feedback'
              onChange={e => setReviewText(e.target.value)}
            ></textarea>
        </div>

        <button type='submit' onClick={handleSubmitReview} className="btn">
            Submit Feedback
        </button>
    </form>
  )
}

export default FeedbackForm