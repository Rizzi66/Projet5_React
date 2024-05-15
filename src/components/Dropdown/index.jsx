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
    <div className="dropdown">
      <div className="dropdown__menu">
        <h3 className="dropdown__title">{title}</h3>
        <button className={classButton} onClick={openContent}>
          <img src={Arrow} alt="flèche du menu déroulant" />
        </button>
      </div>
      {Array.isArray(description) ? (
        <div className={classContent}>
          {description.map((element, index) => {
            return <p key={`${element}-${index}`}>{element}</p>
          })}
        </div>
      ) : (
        <div className={classContent}>{description}</div>
      )}
    </div>
  )
}

export default Dropdown
