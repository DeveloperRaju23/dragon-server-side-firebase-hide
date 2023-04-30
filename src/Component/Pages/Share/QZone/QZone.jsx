import React from 'react';
import qzone1 from "../../../../assets/qZone1.png"
import qzone2 from "../../../../assets/qZone2.png"
import qzone3 from "../../../../assets/qZone3.png"
import bg from "../../../../assets/bg.png"
const QZone = () => {
    return (
        <div className='mt-5 mb-4'>
                <div className='bg-light mb-5'>
                    <h4 className='fs-3 ps-3'>Q-Zone</h4>
                    <div className='text-center'>
                    <img src={qzone1} alt="" />
                      <img src={qzone2} alt="" />
                      <img src={qzone3} alt="" />
                    </div>
                </div>
                <div>
                   <div className='qzoneBg'>
                    <img className='img-fluid' src={bg} alt="" />
                    <div className=''>
                       <div className='qzoneAbsolute'>
                       <h3 className='fs-2 text-center fw-bold'>Create an <br /> Amazing <br /> Newspaper</h3>
                        <p className=' text-center px-4 fs-5 mt-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className='header-btn mx-auto d-block'>Learn More</button>
                       </div>
                    </div>
                   </div>
                </div>
        </div>
    );
};

export default QZone;