import React from 'react';
import { Link } from 'react-router-dom';
const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
      <img src={item.photos[0]} alt="" className='searchImage' />
      <div className='searchIDesc'>
        <h1 className='sTitle'>{item.name}</h1>
        <span className='sDistance'>{item.distance}</span>
        <span className='sTaxi'>Free airport Taxi</span>
        <span className='sSubtitle'>
           Studio Apartment with Air conditioning
        </span>
        <span className='sFeatures'>
         {item.desc}
        </span>
        <span className='sCancel'>
          Free cancellation
        </span>
        <span className='sCancelOpSubtitle'>
          You can cancel later, so look in this great price today!
        </span>
      </div>
      <div className='searchIDetails'>
        {item.rating &&  <div className='sRating'>
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className='sTextDetails'>
          <span className='sPrice'>${item.cheapestPrice}</span>
          <span className='sTaxOp'>Includes all taxes and fees</span>
          <Link  to={`/hotels/${item._id}`}>
          <button className='sClassButton'>See Availability</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
