import React from 'react'

function ApplicationIcon(props) {
  return (
    <div className={'d-flex flex-column justify-content-center col-2  align-items-center'}>
     <span className={'application-icon  d-flex align-items-center justify-content-center'+" "+props.icon}></span>
     <span className='mt-4 icon-title'>{props.title}</span></div>
  )
}

export default ApplicationIcon
