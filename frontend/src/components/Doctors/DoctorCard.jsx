import React from 'react'
// import { Link } from 'react-router-dom';
// import { starIcon } from "../../assets/images/Star.png";
// import { BsArrowRight } from 'react-icons/bs';

export const DoctorCard = (props) => {
    const { 
        name, avgRating, totalRating, 
        photo, specialty, totalPatient, 
        hospital
    } = props.doctor;
  return (
    <div className="p-3 lg:p-5">
        <div>
            <img src={photo} alt="" className='w-full'/>
        </div>
        <h2 className='text-[10px] leading-[30px] lg:text-[26px] lg:leading-9
          text-headingColor font-[700] mt-3 lg:mt-5'>
            {name}
        </h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
            <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2
              lg:py-2 lg:px-6 text-[12px] lg:text-[16px] lg:leading-7 font-semibold rounded'>
            {specialty}
            </span>
        </div>
    </div>
  )
}
