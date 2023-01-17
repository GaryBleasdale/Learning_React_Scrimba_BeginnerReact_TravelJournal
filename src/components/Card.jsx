import React from 'react'


export default function Card (props){
    return (
        <div className='flex  m-auto w-3/4 p-10 flex-col lg:flex-row '>
            <div className=' w-full lg:w-1/4'>
                <img src={props.imageUrl} className='h-80 w-full rounded-lg object-cover' />
            </div>
            <div className=' lg:p-14 lg:w-3/4'>
                <div className='flex md:py-5 '>
                    <h4 className="pr-5"> {props.location}</h4>
                    <a className='text-red-500'href={props.googleMapsUrl}>View in Google Maps</a>
                </div>
                <h1 className='font-bold text-xl pb-3'>{props.title}</h1>
                <span className='font-bold'>{props.startDate}</span> - <span className='font-bold'>{props.endDate}</span>
                <p className='pt-5'>{props.description}</p>
            </div>
           
            
        </div>
    )
}
