import DropdownsContainer from '../../components/DropdownsContainer'
import { useParams } from 'react-router-dom'
import CardsData from '../../datas/annonces.json'
import './index.scss'
import Carrousel from '../../components/Carrousel'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Rate from '../../components/Rate'


function Accommodation() {

    const { idAccommodation } = useParams();
    const current = CardsData.filter((card) => (card.id === idAccommodation))[0]

    return (
        <main className="accom">
            <Carrousel  current={current} />
            <div className='accom__grid'>
                <div>
                    <h2 className='accom__title'>{current.title}</h2>
                    <p className='accom__loc'>{current.location}</p>
                </div>
                <Host current={current} />
                <Tag current={current} />
                <Rate current={current} />
            </div>
            <DropdownsContainer type='accommodation' current={current} />
        </main>
    )
}

export default Accommodation