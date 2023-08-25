import React from 'react';
import DataTable from '../../components/Datatable/DataTable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./list.scss";

const List = ({columns}) => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <DataTable columns={columns}/>
      </div>
    </div>
  );
}

export default List;
