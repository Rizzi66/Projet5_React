import Banner from '../../components/Banner'
import CardsContainer from '../../components/CardsContainer'
import './index.scss'

function Home() {
  return (
    <main className="main">
      <Banner bannerText="Chez vous, partout et ailleurs" bannerImage={1}/>
      <CardsContainer />
    </main>
  )
}

export default Home
