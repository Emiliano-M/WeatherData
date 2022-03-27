import { CardGroup } from "reactstrap";
import { citiesArray } from "../../constants";
import City from './City/City'
import './CityContainer.css'
import Title from "./Title/Title";

const CityContainer = () => {


  return (
    <div>
      <Title/>
      <CardGroup className="cities">
        {
            citiesArray.map((id,i) => <City cityId={id} key={i}/>)
        }
      </CardGroup>
    </div>
  )
}

export default CityContainer