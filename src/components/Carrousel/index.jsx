import './index.scss'
import { useState } from 'react'
import Arrow from '../../assets/arrow_carrousel.svg'

function Carrousel({ pictures, title }) {
  const [currentPicture, setCurrentPicture] = useState(1)
  const prevPicture =
    currentPicture === 1 ? pictures.length : currentPicture - 1
  const nextPicture =
    currentPicture === pictures.length ? 1 : currentPicture + 1

  function leftPicture() {
    currentPicture === 1
      ? setCurrentPicture(pictures.length)
      : setCurrentPicture(currentPicture - 1)
  }

  function rightPicture() {
    currentPicture === pictures.length
      ? setCurrentPicture(1)
      : setCurrentPicture(currentPicture + 1)
  }

  return pictures.length === 0 ? (
    ''
  ) : (
    <div className="carrousel">
      {pictures.length === 1 ? (
        ''
      ) : (
        <div>
          <button className="carrousel__arrow" onClick={leftPicture}>
            <img src={Arrow} alt="Fleche gauche du carrousel" />
          </button>
          <button
            className="carrousel__arrow carrousel__arrow--right"
            onClick={rightPicture}
          >
            <img src={Arrow} alt="Fleche droite du carrousel" />
          </button>
          <p className="carrousel__numbering">{`${currentPicture}/${pictures.length}`}</p>
        </div>
      )}
      <div className="carrousel__pictures">
        {pictures.map((picture, index) => (
          <img
            className={
              currentPicture === index + 1
                ? 'active'
                : prevPicture === index + 1
                  ? 'prev'
                  : nextPicture === index + 1
                    ? 'next'
                    : ''
            }
            key={`${picture}-${index}`}
            src={picture}
            alt={`Photo ${index + 1} du logement "${title}"`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrousel
