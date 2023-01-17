import React from 'react'


export default function Card (props){
    return (
        <div className='flex flex-row m-auto w-3/4 p-10'>
            <div className='w-2/4'>
                <img src={props.imageUrl} className='h-80 w-full rounded-lg' />
            </div>
            <div className=' p-14 w-2/4'>
                <div className='flex flex-row'>
                    <h4 > {props.location}</h4>
                    <a href={props.googleMapsUrl}>View in Google Maps</a>
                </div>
                <h1 className='font-bold text-xl pb-3'>{props.title}</h1>
                <h2>{props.startDate}</h2>
                <h2>{props.endDate}</h2>
                <p>{props.description}</p>
            </div>
           
            
        </div>
    )
}
