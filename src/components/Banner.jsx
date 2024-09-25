import React from 'react'

function Banner() {
  return (
   
    <div className='row g-0 mt-5 help-block justify-content-center'>

    <div class="form-group">
     &nbsp;
    </div>
    <div class="form-group">
     &nbsp;
    </div>
    <div class="form-group">
     &nbsp;
    </div>

     <div className='col-12 col-sm-10 col-md-10 col-lg-10 d-flex justify-content-evenly bg-gray align-items-center'>
       <div className='col-3 col-sm-5 col-md-5 col-lg-5 h3 align-items-center d-flex my-3 text-purple'>المعسكرات و البرامج</div>
       <div className='col-4 col-sm-3 col-md-3 col-lg-3 d-flex row  my-3'>
         <button className='btn btn-white  col-lg-5 col-12 '>الكبار</button>
         <button className='btn btn-purple col-lg-5 col-12' >الناشئون</button>
        
       </div>
       <div className='col-1 justify-content-center d-flex align-items-center gray-circle '></div>
     </div>

    </div>
 

  )
}

export default Banner
