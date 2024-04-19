import Card from '../Card'
import CardsData from '../../datas/annonces.json'
import './index.scss'

function CardsContainer() {
  return (
    <section className="cardscontainer">
      {CardsData.map((card) => (
        <Card key={card.id} title={card.title} picture={card.cover} />
      ))}
    </section>
  )
}

export default CardsContainer
