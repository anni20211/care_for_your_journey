import React, { useContext, useState } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {DateRange} from 'react-date-range';
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
function Header({type}) {
  const [destination,setDestination]=useState("");
    const [openDate,setOpenDate]=useState(false);
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const navigate=useNavigate();
      const [openOptions,setOpenOptions]=useState(false);
      const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1,
      });
      const {user}=useContext(AuthContext);
      
      const handleClick=(name,opration)=>{
        setOptions((prev)=>{
            return{
               ...prev, [name]:opration==="inc"?options[name]+1:options[name]-1,
            }
        })
      }
      // console.log(dates);
      const {dispatch}=useContext(SearchContext);
      const handleSearch=()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
        navigate("/hotels",{state:{destination,dates,options}})
      }
  return (
    <div className="header">
      <div className={type==='list'?"header-container listMode":"header-container"}>
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentels</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTrain} />
            <span>Train</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>

        </div>
        {type !=="list" &&
        <>
        <h1 className="heading-content">
        Find your next stay
        </h1>
        <p className="header-description">
        Search deals on hotels, homes, and much more...
        </p>
        {!user &&
        <button className="header-button">Sign in/Register</button>
        }
        <div className="headerSearch">
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
            <input type="text" placeholder="Where are you going?" className="inputSearch" onChange={e=>setDestination(e.target.value)} />
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon" />
              <span onClick={()=>setOpenDate(!openDate)} className="dateSearch">{`${format(dates[0].startDate,"mm/dd/yyyy")} to ${format(dates[0].endDate,"mm/dd/yyyy")}`}</span>
              {openDate&&<DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                minDate={new Date()}
                className="date-container"
                />}
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="dateSearch">{`${options.adult} adult . ${options.children} children . ${options.room} room . `}</span>
              {openOptions&&<div className="options">
                <div className="option-items">
                  <span  className="optionText">Adult</span>
                  <div className="optionCounterButton">
                    <button disabled={options.adult<=1} className="optionCounter" onClick={()=>{handleClick("adult","dec")}}  >-</button>
                     <span className="optionCounterText">{options.adult}</span>
                    <button className="optionCounter" onClick={()=>{handleClick("adult","inc")}}>+</button>
                    </div>
                </div>
                <div className="option-items">
                  <span  className="optionText">Children</span>
                    <div className="optionCounterButton">

                    <button  disabled={options.children<=1}className="optionCounter" onClick={()=>{handleClick("children","dec")}}  >-</button>
                     <span className="optionCounterText">{options.children}</span>
                    <button className="optionCounter" onClick={()=>{handleClick("children","inc")}} >+</button>
                    </div>
                </div>
                <div className="option-items">
                  <span  className="optionText">Room</span>
                  <div className="optionCounterButton">
                    <button disabled={options.room<=1} className="optionCounter" onClick={()=>{handleClick("room","dec")}}  >-</button>
                     <span className="optionCounterText">{options.room}</span>
                    <button className="optionCounter" onClick={()=>{handleClick("room","inc")}}>+</button>
                    </div>
                </div>

              </div>
              }
          </div>
          <div className="headerSearchItems">
          <button className="header-button" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>
        }
      </div>
    </div>
  );
}
export default Header;
