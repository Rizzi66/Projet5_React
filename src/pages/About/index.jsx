import Banner from '../../components/Banner'
import DropdownsContainer from '../../components/DropdownsContainer'
import './index.scss'

function About() {
  return (
    <main className="main">
      <Banner bannerText={false} bannerImage={2}/>
      <DropdownsContainer type='about' />
    </main>
  )
}

export default About
