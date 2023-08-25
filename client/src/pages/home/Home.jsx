import React from 'react';
import Header from '../../componenets/header/Header';
import Navbar from '../../componenets/navbar/Navbar';
import Feature from '../../componenets/feature/Feature';
import PropertyList from '../../componenets/propertyList/PropertyList';
import FeaturedProperty from '../../componenets/featuredProperty/FeaturedProperty';
import MailList from '../../componenets/mailList/MailList';
import Footer from '../../componenets/footer/Footer';
function Home() {
  return (
    <div className='home'>
    <Navbar/>
    <Header/>
    <div className='HomeContainer'>
     <Feature/>
     <h1 className='homeTitle'>
     Browse by property type
     </h1>
     <PropertyList/>
     <h1 className='fpTitle'>Home Only for You</h1>

     <FeaturedProperty/>
     <MailList/>
     <Footer/>
    </div>
    </div>
  );
}
export default Home;
