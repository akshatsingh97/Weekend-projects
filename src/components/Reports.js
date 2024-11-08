import React from 'react';
import './Report-tile.css';

const Reports = ({data}) => {

    //Destructing of props
    const { title, url, image_url, news_site} = data;

  return (
    <div className='report-tile'>
        <h1>{title}</h1>
        <img src={image_url}/>
        <a href={url}><h4>Link to the news</h4></a>
        <p>Source: {news_site}</p>
    </div>
  )
}

export default Reports