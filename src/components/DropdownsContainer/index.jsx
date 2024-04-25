import Dropdown from '../Dropdown'
import AboutData from '../../datas/about.json'
import './index.scss'

function DropdownsContainer( {type, current} ) {
  
  let descriptionValue = ''
  let equipmentsValue = ''
  if (type === 'accommodation') {
      const currentArray = Object.entries(current);
      const currentFilter = currentArray.filter(([key, value]) => (key === "description") || (key === "equipments"))
     
      descriptionValue = (currentFilter[0])[1]
      equipmentsValue = (currentFilter[1])[1]
    }

  return (
    <section className='dropdownsContainer'>
      {type === 'about'
      ?
        AboutData.map((drop) => (
          <Dropdown key={drop.id} title={drop.title} description={drop.description} />
        ))
      :
        <div className='dropdownsContainer__accommodation'>
          <Dropdown title="Description" description={descriptionValue} />
          <Dropdown title="Équipements" description={equipmentsValue} />
        </div>
      }
    </section>
    )
}

export default DropdownsContainer
