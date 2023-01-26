import State from '../components/Hooks/State'


import Prodect from './Prodect'

const Home = () => {
    const arr = ["Prodect1", "Prodect2", "Prodect3", "Prodect4"]

    return (
        <div>
            {/* <Prodect  value={1}/> */}
            {
                arr.map((index) =>
                    <Prodect value={index} key={index} />)
            }
            <div>
                <State />
            </div>
            


        </div>
    )
}

export default Home