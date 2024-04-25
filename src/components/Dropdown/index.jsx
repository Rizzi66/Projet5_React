import './index.scss'
import Arrow from '../../assets/arrow_dropdown.svg'

function Dropdown({ title, description }) {


    return (
      <div className='dropdown'>
        <div className='dropdown__menu'>
            <h2 className='dropdown__title'>{title}</h2>
            <button className='dropdown__button'>
              <img src={Arrow} />
            </button>
        </div>
        {Array.isArray(description) 
        ?
          <div className="dropdown__text">
            {description.map((element, index) => {
              return (
                <p key={`${element}-${index}`}>{element}</p>
              )
            })}
          </div>
        :
          <p className="dropdown__text">{description}</p>
        }
      </div>
    )
  }
  
  export default Dropdown
  