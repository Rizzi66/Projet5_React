import star from '../../assets/star.svg'
import './index.scss'

function Rate( {current} ) {  
  const maxStar = 5
  const numberOfStar = parseInt(current.rating)
  const remainingStar = maxStar - numberOfStar

  const arrayStar = []
  for (let i = 0; i < numberOfStar; i++) {
    arrayStar.push(true)
  }
  for (let i = 0; i < remainingStar; i++) {
    arrayStar.push(false)
  }

  return (
    <div className='rate'>
      {arrayStar.map((element, index) => (
        element 
        ?
          <img key={index} className='rate__star rate__star--color' src={star} />
        :
          <img key={index} className='rate__star' src={star} />
      ))}
    </div>
  )
}

export default Rate
