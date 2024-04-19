import './index.scss'
import background from '../../assets/background.png'

function Banner() {
  return (
    <div className="banner">
      <img src={background} alt="" />
      <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner
