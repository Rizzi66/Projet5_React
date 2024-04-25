import './index.scss'

function Host( {current} ) {
  return (
    <div className='host'>
      <h3 className='host__name'>{current.host.name}</h3>
      <img className='host__pict' src={current.host.picture} alt={`Photo de ${current.host.name}`}/>
    </div>
  )
}

export default Host
