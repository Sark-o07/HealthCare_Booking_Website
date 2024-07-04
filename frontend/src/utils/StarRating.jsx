import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';


export const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
    return (
      <div>
        {
        [...Array(5).keys()].map((_, index) => {
          index += 1;
          return (
          <button
            type='button'
            key={index}
            className={`${index <= ((rating && hover) || hover)?
            "text-yellowColor":
            "text-gray-400"}
            bg-transparent border-none outline-none text-[22px] cursor-pointer`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setHover(0);
              setRating(0);
            }}
          >
            <span>
              <AiFillStar />
            </span>
          </button>
          );
        })}
      </div>
      
    )
  }