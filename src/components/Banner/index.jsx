import './index.scss'
import bannerImage_1 from '../../assets/bannerImage_1.jpg'
import bannerImage_2 from '../../assets/bannerImage_2.jpg'


function Banner( {bannerText , bannerImage} ) {
  return (
    <div className="banner">
      <img className='banner__image' src={bannerImage === 1 ? bannerImage_1 : bannerImage_2} alt="" />
      <h2 className="banner__title">{bannerText}</h2>
    </div>
  )
}

export default Banner
