import DropdownsContainer from '../../components/DropdownsContainer'
import { useParams } from 'react-router-dom'
import CardsData from '../../datas/annonces.json'
import './index.scss'

function Location() {

    const { idlocation } = useParams();
    const current = CardsData.filter((card) => (card.id === idlocation))[0]

    return (
        <main className="main">
            <div>{current.title}</div>
            <DropdownsContainer type='location' current={current} />
        </main>
    )
}

export default Location
