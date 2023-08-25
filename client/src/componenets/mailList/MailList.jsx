import React from 'react';

const MailList = () => {
  return (
    <div className='Ml'>
     <h1 className='mailTitle'>Save time, save money!</h1>
     <span className='maildesc'>Sign up and we'll send the best deals to you</span>
      <div className='mailContainer'>
       <input type="text" placeholder=' Enter Your mail'/>
       <button>Subscribe</button>

      </div>
    </div>
  );
}

export default MailList;
