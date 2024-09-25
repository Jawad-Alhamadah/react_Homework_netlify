import React from 'react'
import Card from './Card'
function CardsContainer(props) {
  props.cardsInfo
  return (
    <div className='row g-0 cards-container mt-3'>
      <div className='col-12 row g-0 justify-content-center'>

        {
          props.cardsInfo.map((card, index) =>
            <Card
              key={index}
              type={card.type}
              title={card.title}
              location={card.location}
              duration={card.duration}
              startDate={card.start_date} />)
        }

      </div>

    </div>
  )
}

export default CardsContainer
