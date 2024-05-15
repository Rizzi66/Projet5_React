import Banner from '../../components/Banner'
import AboutData from '../../datas/about.json'
import Dropdown from '../../components/Dropdown'
import bannerImage_2 from '../../assets/bannerImage_2.jpg'
import './index.scss'

function About() {
  return (
    <main>
      <Banner bannerText={''} bannerImage={bannerImage_2} />
      <section className="dropdownsContainer">
        {AboutData.map((drop) => (
          <Dropdown
            key={drop.id}
            title={drop.title}
            description={drop.description}
          />
        ))}
      </section>
    </main>
  )
}

export default About
