import './index.scss'
import { useState } from 'react'
import Arrow from '../../assets/arrow_carrousel.svg'

function Carrousel({ current }) {
  const [currentPicture, setCurrentPicture] = useState(1)

  function leftPicture() {
    (currentPicture === 1) ? setCurrentPicture(current.pictures.length) : setCurrentPicture(currentPicture - 1)
  }

  function rightPicture() {
    (currentPicture === current.pictures.length) ? setCurrentPicture(1) : setCurrentPicture(currentPicture + 1)
  }

  return (
    (current.pictures.length === 0) ? '' :
    <section className='carrousel'>
      {(current.pictures.length === 1) ? '' : 
        <div>
        <button className='carrousel__arrow' onClick={leftPicture}>
          <img src={Arrow} />
        </button>
        <button className='carrousel__arrow carrousel__arrow--right' onClick={rightPicture}>
          <img src={Arrow} />
        </button>
        <p className='carrousel__numbering'>{`${currentPicture}/${current.pictures.length}`}</p>
        </div>
      }
      <div className='carrousel__pictures'>
        {current.pictures.map((picture, index) => (
          <img 
            className=
              {currentPicture === (index + 1) ? 'active' : 
                ((currentPicture === 1 ? current.pictures.length : currentPicture - 1) === (index + 1)) ? 'prev' :
                  ((currentPicture === current.pictures.length ? 1 : currentPicture + 1) === (index + 1)) ? 'next' : ''} 
            key={`${picture}-${index}`} 
            src={picture} 
            alt={`Photo ${index+1} du logement "${current.title}"`} 
          />
        ))}
      </div>
    </section>
  )
}

export default Carrousel
