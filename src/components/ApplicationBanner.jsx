import React from 'react'
import ApplicationIcon from './ApplicationIcon'
function ApplicationBanner(props) {
  return (
    <div className='row g-0 d-flex justify-content-center bg-gray mt-5'>
        <div class="form-group">
     &nbsp;
    </div>
    <div class="form-group">
     &nbsp;
    </div>
        <span className='title text-purple text-center'>خطوات التسجيل</span>
        <div class="form-group">
     &nbsp;
    </div>

        <div className='row g-0 d-flex col-10 justify-content-evenly mt-5'>

        
        <ApplicationIcon icon={props.icons[0]}  title="الانضمام الى المنصة"/>        
        <div className={'d-flex align-items-center lines justify-content-center col-2'}>2</div>
        <ApplicationIcon icon={props.icons[1]}  title="التسجيل في المعسكر او البرنامج"/> 
        <div className={'d-flex align-items-center lines justify-content-center col-2'}>4</div>
        <ApplicationIcon icon={props.icons[2]}  title="انتظار رسالة القبول"/> 

        </div>

        <div class="form-group">
     &nbsp;
    </div>
    <div class="form-group">
     &nbsp;
    </div>
    </div>
 

  )
}

export default ApplicationBanner
