
import React from 'react';
// import styles from './allpickup.module.css'
const HistoryMenifest = () => {
  const arr = [
    { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
    { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
    { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
    { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
    { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
    { id: 1, name: 'sami', address: 'abc', city: 'rawalpindi' },
  ]
  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-12'>
          <h2 className='text-danger'>HistoryMenifest</h2>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 col-12'>
          <div className="select-container">
            <select id="month" style={{ borderColor: 'red', borderRadius: '1px solid red', width: '100%', padding: '10px' }}>
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
          <input type='date' style={{ borderColor: "rgb(149, 0, 20)", width: '100%', padding: '5px' }} />
        </div>   <div className='col-sm-12 col-md-6 col-lg-3 w-5' >
          <input type='text' style={{ borderColor: "rgb(149, 0, 20)", width: '100%', padding: '5px' }} />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <button type="button" style={{ backgroundColor: "rgb(149, 0, 20)", borderColor: "rgb(149, 0, 20)", padding: '5px' }}>
            <span className="text-white">Filter</span></button>
        </div>

      </div>
      {arr.map((item) => {

        return (
          <div className='row  mt-5 ' style={{ padding: '10px', backgroundColor: 'white' }}>
            <div className='card_s'>
              <>
                <div className='col-sm-12 col-md-6 col-lg-3  '>
                  <h5>customer</h5>
                  {item.name}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 '>
                  <h6>
                    Consignment No :410223
                  </h6>
                  {item.city}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 '>
                  <h6>
                    Karachi  Karachi

                  </h6>
                  {item.address}
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

export default HistoryMenifest;
