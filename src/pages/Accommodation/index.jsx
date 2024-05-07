import Dropdown from '../../components/Dropdown'
import { useParams } from 'react-router-dom'
import CardsData from '../../datas/annonces.json'
import './index.scss'
import Carrousel from '../../components/Carrousel'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Rate from '../../components/Rate'
import Error from '../Error'


function Accommodation() {

    const { idAccommodation } = useParams();
    const current = CardsData.filter((card) => (card.id === idAccommodation))[0]

    if (current === undefined) {
        return <Error />

    } else {
        const currentArray = Object.entries(current);
        const currentFilter = currentArray.filter(([key]) => (key === "description") || (key === "equipments"))
        const descriptionValue = (currentFilter[0])[1]
        const equipmentsValue = (currentFilter[1])[1]

        return (
            <main className="accom">
                <Carrousel  current={current} />
                <div className='accom__grid'>
                    <div className='accom__text'>
                        <h2 className='accom__title'>{current.title}</h2>
                        <p className='accom__loc'>{current.location}</p>
                    </div>
                    <Host current={current} />
                    <Tag current={current} />
                    <Rate current={current} />
                </div>
                <div className='accom__dropdown'>
                    <Dropdown title="Description" description={descriptionValue} />
                    <Dropdown title="Équipements" description={equipmentsValue} />
                </div>
            </main>
        )

    }


}

export default Accommodation
