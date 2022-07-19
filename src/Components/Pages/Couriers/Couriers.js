
import React from 'react';
// import styles from './allpickup.module.css'
const Couriers = () => {
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
        <div className='col-sm-12 col-md-12 col-lg-12 '>
          <h2 className='text-danger'>Couriers</h2>
        </div>
       
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <input type='date' style={{ borderColor: "rgb(149, 0, 20)", width: '100%', padding: '5px' }} />
        </div>   <div className='col-sm-12 col-md-6 col-lg-3 w-5' >
          <input placeholder='Search' type='text' style={{ borderColor: "rgb(149, 0, 20)", width: '100%', padding: '5px' }} />
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

export default Couriers;
