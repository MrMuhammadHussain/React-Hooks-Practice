// import {useParams} from "react-router-dom"

// function Prodect() {

//     const param = useParams()
//   return (
//     <div>#{param.id}</div>
//   )
// }

// export default Prodect


const Coin = ({ name , symbol , imge , price}) => {
  return (
    <div className="coin">
      <img src={imge} alt={name} />
      <h1>{symbol}</h1>
      <p>{name}</p>
      <h4>Rs:{price}</h4>



    </div>
  )
}

export default Coin