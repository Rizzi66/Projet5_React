import './index.scss'

function Banner({ bannerText, bannerImage }) {
  return (
    <div className="banner">
      <img className="banner__image" src={bannerImage} alt="Bannière du site" />
      <h1 className="banner__title">{bannerText}</h1>
    </div>
  )
}

export default Banner
