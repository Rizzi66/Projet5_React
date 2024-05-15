import './index.scss'

function Host({ name, picture }) {
  return (
    <div className="host">
      <h3 className="host__name">{name}</h3>
      <img className="host__pict" src={picture} alt={`Photo de ${name}`} />
    </div>
  )
}

export default Host
