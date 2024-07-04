import React, { useState } from 'react'
import { StarRating } from '../../utils/StarRating';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  return (
    <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
            How would you rate the overall experience?*
        </h3>

        <StarRating />
    </div>
  )
}

export default FeedbackForm