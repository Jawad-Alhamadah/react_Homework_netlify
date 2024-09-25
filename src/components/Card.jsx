import React from 'react'

function Card(props) {

  let cardStyle = "card-ended"
  if (props.type==="برنامج") cardStyle="card-program"
  if (props.type==="معسكر") cardStyle="card-bootcamp"
  if (props.type==="لقاء") cardStyle="card-talk"

  let card_date = props.startDate.split("/")
  let card_day = parseInt(card_date[0])
  let card_month = parseInt(card_date[1])
  let card_year = parseInt(card_date[2])


  let current_date = new Date()
  let day = current_date.getDate()
  let month = current_date.getMonth()+1 
  let year = current_date.getFullYear()

  if (card_year< year) cardStyle="card-ended"
  if (card_year=== year) {

    if(card_month<month)cardStyle="card-ended"

    if(card_month=== month){
       if (card_day<day)cardStyle="card-ended"
    }
  }
  




  return (
    <div className={"card text-right  card-course shadow-sm m-3 "+cardStyle} >
        <div className="card-body gy-4 row">
          <div>
            <h6 className="card-title card-bootcamp-subtitle">{props.type}</h6>
            <h6 className="card-title card-bootcamp-title">{props.title}</h6>
          </div>
          <div>
            <div className="d-flex gap-3">
              <p className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9caccc" className="bi bi-pin-map"
                  viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                  <path fill-rule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                </svg>{props.location}
              </p>
              <p className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9caccc" className="bi bi-clock"
                  viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>{props.duration}
              </p>
            </div>

            <div className="d-flex gap-3">
              <p className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9caccc" className="bi bi-calendar3"
                  viewBox="0 0 16 16">
                  <path
                    d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                  <path
                    d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>البداية: {props.startDate}
              </p>
              <button className="me-auto card-bootcamp-btn rounded-pill col-sm-5 col-5">
                التفاصيل
              </button>
            </div>
          </div>
        </div>
      </div>
  


  )
}

export default Card
