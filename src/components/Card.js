import React from 'react'

export default function Card(props){
    return(
        <div className='cardbox'>
            <div className="container--img">
                <img src={props.items.imageUrl} />
            </div>
            <section>
            <div className='section--header'>
                <p ><span className="iconify icon--location" data-icon="fluent:location-16-filled"></span>State: {props.items.State}</p>
                <p><a target="_blank" href={props.items.googleMapsUrl}>view on google maps</a></p>
            </div>
                <h3>{props.items.title}</h3>
                <p className='description'>{props.items.description}</p>
                <p ><a className='wikipedia--anchor' target="_blank" href={props.items.wikipedia}>wikipedia</a></p>
            </section>
        </div>
    );
}