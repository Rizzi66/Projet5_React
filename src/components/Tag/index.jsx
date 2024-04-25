import './index.scss'

function Tag( {current} ) {
  return (
    <div className='tags'>
      {current.tags.map((tag, index) => (
        <span key={`${tag}-${index}`} className='tags__tag'>{tag}</span>
      ))}
    </div>
  )
}

export default Tag
