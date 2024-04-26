import './index.scss'
import Arrow from '../../assets/arrow_dropdown.svg'

function Dropdown({ title, description }) {


    return (
      <div className='dropdown'>
        <div className='dropdown__menu'>
            <h2 className='dropdown__title'>{title}</h2>
            <button className='dropdown__button' /*onClick={handleClick}*/ >
              <img src={Arrow} />
            </button>
        </div>
        {Array.isArray(description) ? (
          <div className="dropdown__content">
            {description.map((element, index) => {
              return (
                <p key={`${element}-${index}`}>{element}</p>
              )
            })}
          </div>
        ) : (
          <p className="dropdown__content">{description}</p>
        )}
      </div>
    )
  }
  
  export default Dropdown
  