import starPicture from '../../assets/star.svg'
import './index.scss'

function Rate({ rating }) {
  const maxStar = 5
  const numberOfStar = parseInt(rating)
  const remainingStar = maxStar - numberOfStar

  const arrayStar = []
  for (let i = 0; i < numberOfStar; i++) {
    arrayStar.push(true)
  }
  for (let i = 0; i < remainingStar; i++) {
    arrayStar.push(false)
  }

  return (
    <div className="rate">
      {arrayStar.map((star, index) =>
        star ? (
          <img
            key={index}
            className="rate__star rate__star--color"
            src={starPicture}
            alt="étoile vide"
          />
        ) : (
          <img
            key={index}
            className="rate__star"
            src={starPicture}
            alt="étoile pleine"
          />
        ),
      )}
    </div>
  )
}

export default Rate
