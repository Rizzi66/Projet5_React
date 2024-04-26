import Banner from '../../components/Banner'
import AboutData from '../../datas/about.json'
import Dropdown from '../../components/Dropdown'

import './index.scss'

function About() {
  return (
    <main className="main">
      <Banner bannerText={false} bannerImage={2}/>
      <section className='dropdownsContainer'>
        {AboutData.map((drop) => (
            <Dropdown key={drop.id} title={drop.title} description={drop.description} />
          ))}
      </section>
    </main>
  )
}

export default About
