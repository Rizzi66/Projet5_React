import Banner from '../../components/Banner'
import Card from '../../components/Card'
import CardsData from '../../datas/annonces.json'
import './index.scss'

function Home() {
  return (
    <main>
      <Banner bannerText="Chez vous, partout et ailleurs" bannerImage={1}/>
      <section className="cardsContainer">
        {CardsData.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} picture={card.cover} />
        ))}
      </section>
    </main>
  )
}

export default Home
