// import {useParams} from "react-router-dom"

// function Prodect() {

//     const param = useParams()
//   return (
//     <div>#{param.id}</div>
//   )
// }

// export default Prodect


function Prodect({ value }) {
  return (
    <div>{value}</div>
  )
}

export default Prodect