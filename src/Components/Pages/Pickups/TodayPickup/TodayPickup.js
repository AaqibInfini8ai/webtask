
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BiUser } from 'react-icons/bi';
import Traveling from '../../../../assets/traveling.png'
// import styles from './todaypick.module.css'
const TodayPickup = () => {
 const API_URL_TASK = process.env.REACT_APP_Setup
  let pickupModal = {
    consignmentNo: '',
    courier: '',
    date: ""
  }
  const [pickupData, setPickupData] = useState([]);
  const [state, setState] = useState(pickupModal);
  // const arr = [
  //   { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
  //   { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
  //   { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
  //   { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
  //   { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
  //   { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
  // ]
  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setState((prevState)=>({
  //     ...prevState,
  //     [name]: value,
  //   }))
  // }
  useEffect(() => {

    getPickup()
  }, []);
  const getPickup = () => {
console.log('a');
    axios
      .post(API_URL_TASK+`/consignment`, {
        request: {
          method: "getConsignmentsFilter",
          data: {
            consignmentNo: state.consignmentNo,
            courier: state.courier,
            date: state.date
          },
        },
      })
      .then((res) => {
console.log('b');

        let response = res.data.response.data.consignments
        console.log('c');

        setPickupData(response)
        // console.log('resss',res.data.response.data.consignments);
        console.log('d');

      })

  }
  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-12'>
          <h2 className='text-danger'>Today Pickup</h2>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 col-12'>
          <div className="select-container">
            <select id="month" style={{ borderColor: 'red', borderRadius: '1px solid red', width: '100%', padding: '10px' }} >
              <option value="all">Please Select</option>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <input type='date' style={{ borderColor: "rgb(149, 0, 20)", width: '100%', padding: '5px' }}  />
        </div>   <div className='col-sm-12 col-md-6 col-lg-3 w-5' >
          <input type='text' style={{ borderColor: "rgb(149, 0, 20)", width: '100%', padding: '5px' }}  />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <button type="button" style={{ backgroundColor: "rgb(149, 0, 20)", borderColor: "rgb(149, 0, 20)", padding: '5px' }}>
            <span className="text-white">Filter</span></button>
        </div>

      </div>
      {pickupData.map((item) => {

        return (
          <div className='row  mt-5 ' style={{ padding: '10px', backgroundColor: 'white' }}>
            <div className='card_s'>
              <>
                <div className='col-sm-12 col-md-6 col-lg-3  '>
                  <div className="v-list-item__title fontColor text-left align-self-center text-wrap">
                 <div style={{fontSize:'40px',color:'red'}}>< BiUser/></div> 
                  <h6 className="subtitle">   {item.receiverName} </h6>
                  <h6 >{item.created_by} </h6></div>

                  {/* <span>{item.created_by}</span> */}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 '>
                  <div class="v-list-item__title text-left">
                  <h6 class="subtitle-2 black--text"><span> Consignment No </span>{item._id} </h6>
                  <h6 class="subtitle-2 font-weight-light black--text"> Weight:{item.weight} KG </h6>
                  <h6 class="subtitle-2 font-weight-light"> Date:{item.date} </h6><h6 class="subtitle-2 green--text text-green darken-2"> Amount: </h6></div>
                  {/* {item.city} */}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 '>
                <div class="mt-10 text-left ml-4">
                <h6 class="subtitle-2"> {item.creatorOrigin} <span><img src={Traveling} alt='travel'/></span> {item.origin_city} </h6>
                </div>
                  {/* {item.address} */}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3  '>
                  <div className='card_btn'>
                    <button type="button" style={{ backgroundColor: "rgb(149, 0, 20)", borderColor: "rgb(149, 0, 20)", }}>
                      <span className="text-white">View Detail</span></button>
                    <button type="button" style={{ backgroundColor: "rgb(149, 0, 20)", borderColor: "rgb(149, 0, 20)", }}>
                      <span className="text-white">Delete</span></button>
                  </div>

                </div>

              </>

            </div>

          </div>
        )
      })}
    </>
  );
}

export default TodayPickup;
