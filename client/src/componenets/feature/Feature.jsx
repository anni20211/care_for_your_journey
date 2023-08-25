import React from 'react';
import useFetch from '../../Hooks/useFetch.js';
function Feature() {
   const {data,loading,error}=useFetch("/hotels/countByCity?cities=delhi,agra,kolkata");
  return (
    <div className='feature'>
      {loading ? ("please wait,data is loading") :(<><div className='featuredItem'>
       <img src='https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=' alt='' className='featuredImg'/>
         <div className='featuredTitles'>
           <h1>delhi</h1>
           <h2>{data[0]}</h2>
         </div>
      </div>
      <div className='featuredItem'>
       <img src='https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=' alt='' className='featuredImg'/>
         <div className='featuredTitles'>
           <h1>Agra</h1>
           <h2>{data[1]}</h2>
         </div>
      </div>
      <div className='featuredItem'>
       <img src='https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=' alt='' className='featuredImg'/>
         <div className='featuredTitles'>
           <h1>kolkata</h1>
           <h2>{data[2]}</h2>
         </div>
      </div>
      <div className='featuredItem'>
       <img src='https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=' alt='' className='featuredImg'/>
         <div className='featuredTitles'>
           <h1>India</h1>
           <h2>345</h2>
         </div>
      </div>
      <div className='featuredItem'>
       <img src='https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=' alt='' className='featuredImg'/>
         <div className='featuredTitles'>
           <h1>India</h1>
           <h2>345</h2>
         </div>
      </div>
      <div className='featuredItem'>
       <img src='https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=' alt='' className='featuredImg'/>
         <div className='featuredTitles'>
           <h1>India</h1>
           <h2>345</h2>
         </div>
      </div>
      <div className='featuredItem'>
       <img src='https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=' alt='' className='featuredImg'/>
         <div className='featuredTitles'>
           <h1>India</h1>
           <h2>345</h2>
         </div>

         
      </div></>)}
    </div>
  );
}

export default Feature;
