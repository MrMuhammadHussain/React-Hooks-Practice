// import {useState,useEffect} from "react"
// import axios from "axios"

// const Effact = () => {

//     const [coins, setCoins] = useState([])


//     useEffect(() => {
//         const Alldata = async () => {
//             const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&per_page=20")
//             console.log(data);
//             setCoins(data)
            
//         }


//         Alldata()

//     }, [])
//     return (
//         <div>{coins}</div>
//     )
// }

// export default Effact