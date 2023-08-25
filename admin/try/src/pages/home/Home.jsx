import React from 'react';
import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import List from '../../components/Table/Table';
import Widget from '../../components/Widget/Widget';
import "./Home.scss";

const Home = () => {
  return (
    <div>
    <h1 className='home'>
     <Sidebar/>
      <div className='homeContainer'>
      <Navbar/>
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="orders"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
         <Featured/>
         <Chart aspect={2/1} title="User Spending ( Last 6 Months)" />
        </div>
          <div className='listContainer' >
          <div className='listTitle'>
             container
          </div>
          <List/>
          </div>
      </div>
    </h1>
    </div>
  );
}
export default Home;
