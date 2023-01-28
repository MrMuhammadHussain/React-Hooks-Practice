import axios from 'axios'
import { useState, useEffect } from "react"
import Loader from './Loader'


import Coin from './Prodect'

const Home = () => {
    const [Coins, setCoins] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const allData = async () => {
            try {
                const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&per_page=50")
                console.log(data);
                setCoins(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                const h1 = document.createElement("h1")
                h1.innerText = `${error}`
                document.body.appendChild(h1)

            }

        }
        allData()
    }, [])



    return (
        <div>
            <div className='home'>
                {/* <Prodect  value={1}/> */}
                {Loading ? (<Loader />) : (

                    Coins.map((index) =>
                        <Coin name={index.name
                        } symbol={index.symbol} imge={index.image} price={index.current_price}
                            key={index.id} />)
                )


                }





            </div>
        </div>
    )
}

export default Home