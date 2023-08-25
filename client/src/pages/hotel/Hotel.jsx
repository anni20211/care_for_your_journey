import React ,{ useContext, useState}from "react";
import Header from "../../componenets/header/Header";
import Navbar from "../../componenets/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../componenets/mailList/MailList";
import Footer from "../../componenets/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../componenets/reserve/Reserve";
const Hotel = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const [slideNumber,setSlideNumber]= useState(0);
  const [open, setOpen]= useState(false);
  const [openModal, setOpenModal]= useState(false);
  const {data,loading,error}=useFetch(`/hotels/find/${id}`);
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();

  const {dates,options}=useContext(SearchContext);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleArrow=(move)=>{
    let newSliderNumber;
    if(move==='left'){
      newSliderNumber=slideNumber==0?5:slideNumber-1;
    }else{
      newSliderNumber=slideNumber==5?0:slideNumber+1;
    }
    setSlideNumber(newSliderNumber);
  }
 const  handleClick=()=>{
  if(user){
    setOpenModal(true);
  }else{
    navigate("/login");

  }
 }
  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />
      {loading?"Loading":(<div className="hotelContainer">
         {open&&<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="cancel" onClick={()=>setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleArrow("left")} />
           <div className="sliderWrapper">
            <img src={data.photos[slideNumber]} alt="" className="wrapperImg" />
           </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleArrow("right")} />
         </div>}
        <div className='"hotelContainerwrapper'>
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotalDist">Exact Location - {data.distance}m from center</span>
          <span className="hotalPriceHighlight">
            Book a stay over ${data.cheapestPrice}at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={data.photos}  alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.description}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for {days}-night stay</h1>
              <h4>Breakfast Info</h4>
              <span>Vegetarian, Halal, Buffet</span>
              <h2>
                <b>${days*data.cheapestPrice*options.room}</b>({days} night)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>)}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};
export default Hotel;
