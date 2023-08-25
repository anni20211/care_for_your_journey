import React from 'react';
import useFetch from '../../Hooks/useFetch.js';
const PropertyList = () => {
  const {data,loading,error}=useFetch("/hotels/countByType");
  const images=[
   'https://www.shutterstock.com/image-photo/beautiful-taj-mahal-hotel-260nw-1455231200.jpg',
   'https://www.shutterstock.com/image-photo/beautiful-taj-mahal-hotel-260nw-1455231200.jpg',
   'https://www.shutterstock.com/image-photo/beautiful-taj-mahal-hotel-260nw-1455231200.jpg',
   'https://www.shutterstock.com/image-photo/beautiful-taj-mahal-hotel-260nw-1455231200.jpg',
   'https://www.shutterstock.com/image-photo/beautiful-taj-mahal-hotel-260nw-1455231200.jpg',
  ]
  return (
    <div className='proprtyList'>
    {loading?"loading":(
     <>
      {data &&images.map((image,i)=>(
       <div className='propertyListItem' key={i}>
       <img src={image} alt='' className='propertyImage'/>
        <div className='propertyListTitle'>
        <h1>
        {data[i]?.type}
        </h1>
        <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
        </div>
      ))
      }
      </>
      )}
    </div>
  );
}

export default PropertyList;
