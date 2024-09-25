import React from 'react'
import logo from "../assets/logo_navbar.svg"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top white-on-hover tuwaiq-nav mb-5">
    <div className="container-fluid">
      <span className="navbar-brand " >
        <img src={logo} alt=""/>
      </span >
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon color-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav g-3 w-100">
          <li className="nav-item hover-bg-grey current-link" aria-current="page">
            <span className="nav-link active text-white" href="index.html">
              <svg className="d-lg-none" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor"
                 viewBox="0 0 16 16">
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>الرئيسية
            </span >
          </li>
          <li className="nav-item hover-bg-grey" aria-current="page">
            <span className="nav-link text-white" href="#">
              <svg className="d-lg-none" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor"
                 viewBox="0 0 16 16">
                <path
                  d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
              </svg>المعسكرات والبرامج</span >
          </li>
          <li className="nav-item hover-bg-grey" aria-current="page">
            <span className="nav-link text-white" href="aboutpage.html">
              <svg className="d-lg-none" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path
                  d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>حول الأكاديمية</span >
          </li>
          <li className="nav-item hover-bg-grey" aria-current="page">
            <span className="nav-link text-white" aria-current="page">
              <svg className="d-lg-none" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                <path
                  d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
              </svg>الأكاديميات التابعة</span >
          </li>
          <li className="nav-item hover-bg-grey">
            <span className="nav-link text-white" aria-current="page" href="#">
              <svg className="d-lg-none" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor"
                 viewBox="0 0 16 16">
                <path
                  d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
              </svg>مركز الاختبارات</span >
          </li>

            <li className='me-lg-auto'>
            <span className="nav-link text-white mt-2" >
               تسجيل الدخول - <span>English</span></span >
             
            </li>

        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
