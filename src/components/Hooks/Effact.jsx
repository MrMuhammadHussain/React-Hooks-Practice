import axios from "axios"
import { useState, useEffact } from "react"



const Effact = () => {
    useEffact(() => {
        const Alldata = async () => {
            const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&per_page=100")
        }


        Alldata()

    }, [])

    return (
        <div>Effact</div>
    )
}

export default Effact