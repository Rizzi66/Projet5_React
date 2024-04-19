import './index.scss'

function Card({ picture, title }) {
  return (
    <div className="card">
      <img src={picture} alt={title} />
      <h2 className="card__title">{title}</h2>
    </div>
  )
}

export default Card
