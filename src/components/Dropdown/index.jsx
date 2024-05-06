import './index.scss'
import { useState } from 'react'
import Arrow from '../../assets/arrow_dropdown.svg'


function Dropdown({ title, description }) {
  const [open, setOpen] = useState(false)

  function openContent() {
    open ? setOpen(false) : setOpen(true)
  } 

  const classContent = `${open ? 'dropdown__content dropdown__content--open' : 'dropdown__content'}`
  const classButton = `${open ? 'dropdown__button dropdown__button--open' : 'dropdown__button'}`

  return (
    <div className='dropdown'>
      <div className='dropdown__menu'>
          <h2 className='dropdown__title'>{title}</h2>
          <button className={classButton} onClick={openContent} >
            <img src={Arrow} />
          </button>
      </div>
      {Array.isArray(description) ? (
        <div className={classContent}>
          {description.map((element, index) => {
            return (
              <p key={`${element}-${index}`}>{element}</p>
            )
          })}
        </div>
      ) : (
        <p className={classContent}>{description}</p>
      )}
    </div>
  )
}
  
  export default Dropdown
  