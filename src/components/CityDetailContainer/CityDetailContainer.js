import { useParams } from "react-router-dom"
import CityDetail from "./CityDetail/CityDetail"

const CityDetailContainer = () => {

    const {id} = useParams()

  return (
    <div>
        <CityDetail cityId={id}/>
    </div>
  )
}

export default CityDetailContainer