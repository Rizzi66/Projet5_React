import Dropdown from '../../components/Dropdown'
import { useParams } from 'react-router-dom'
import CardsData from '../../datas/annonces.json'
import Carrousel from '../../components/Carrousel'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Rate from '../../components/Rate'
import Error from '../Error'
import './index.scss'

function Accommodation() {
  const { idAccommodation } = useParams()
  const current = CardsData.filter((card) => card.id === idAccommodation)[0]

  if (current === undefined) {
    return <Error />
  }

  return (
    <main>
      <article>
        <Carrousel pictures={current.pictures} title={current.title} />
        <div className="accom__grid">
          <div className="accom__text">
            <h1 className="accom__title">{current.title}</h1>
            <h2 className="accom__loc">{current.location}</h2>
          </div>
          <Host name={current.host.name} picture={current.host.picture} />
          <div className="accom__tags">
            {current.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} content={tag} />
            ))}
          </div>
          <Rate rating={current.rating} />
        </div>
        <div className="accom__dropdown">
          <Dropdown title="Description" description={current.description} />
          <Dropdown title="Équipements" description={current.equipments} />
        </div>
      </article>
    </main>
  )
}

export default Accommodation
