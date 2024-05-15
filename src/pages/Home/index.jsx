import Banner from '../../components/Banner'
import Card from '../../components/Card'
import CardsData from '../../datas/annonces.json'
import bannerImage_1 from '../../assets/bannerImage_1.jpg'
import './index.scss'

function Home() {
  return (
    <main>
      <Banner
        bannerText={'Chez vous,\npartout et ailleurs'}
        bannerImage={bannerImage_1}
      />
      <section className="cardsContainer">
        {CardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            picture={card.cover}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
