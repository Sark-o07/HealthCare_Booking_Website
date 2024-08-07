import React from 'react'
import { formateDate } from "../../utils/formateDate";

export const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold
            flex items-center gap-2'>
                About
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    Aki Ander
                </span>
            </h3>
            <p className="text_para">
                Dr. Aki Ander is a dedicated and compassionate physician with over 15 years of
                experience in the medical field. Specializing in internal medicine, Dr. Ander
                is committed to providing comprehensive and personalized care to patients of
                all ages. With a focus on preventative health, chronic disease management, and
                patient education, Dr. Ander takes the time to understand each patient’s unique
                needs and concerns. Known for a warm bedside manner and a holistic approach to
                healthcare, Dr. Ander strives to build long-lasting relationships with patients,
                ensuring they receive the highest quality of care in a supportive and caring environment.
            </p>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px]">
                        {formateDate('2013-12-12')} - {formateDate('2014-06-12')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Oncology
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        New Hope Hospital, Titanium Valley.
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px]">
                            {formateDate('2013-12-12')} - {formateDate('2014-06-12')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Oncology
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        New Hope Hospital, Titanium Valley.
                    </p>
                </li>
            </ul>
        </div>

        <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className="text-yellowColor text-[15px] leading-6 font-semi-bold">
                    {formateDate('07-08-2018')} - {formateDate('12-09-2022')}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                    Sr. Surgeon
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Hope Hospital, Titanium Valley.
                </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className="text-yellowColor text-[15px] leading-6 font-semi-bold">
                    {formateDate('07-08-2018')} - {formateDate('12-09-2022')}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                    Sr. Surgeon
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Hope Hospital, Titanium Valley.
                </p>
            </li>
        </ul>
        </div>
    </div>
  )
}
