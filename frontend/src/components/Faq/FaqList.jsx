import React from 'react'
import { FaqItem } from './FaqItem';
import { faqs } from "../../assets/data/faqs";


export const FaqList = () => {
  return (
    <ul className='mt-[30px]'>
        {faqs.map((item, index) => (
            <FaqItem item={item} key={index} />
        ))}
    </ul>
  )
}
