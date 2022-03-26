import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './City.css'
import { Link } from 'react-router-dom';
import { getCityById } from '../../../service/db';
import { useQuery } from '@apollo/client';

const City = ({cityId}) => {

function CityById() {
  const {loading, error, data} = useQuery(getCityById(), {variables: {cityId}})

  if (loading) return <div className="spinner"> <svg className="circular" viewBox="25 25 50 50"> <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"></circle></svg></div>;
  if (error) return <p>Error :(</p>;

  return data.getCityById.map(({ name, weather, country }) => (
    <div key={name}>
      <Link to={`/city/${cityId}`}>
      <Card className="city">
      <CardImg className='img' alt='Weather image' src={`http://openweathermap.org/img/wn/${weather.summary.icon}@2x.png`}/>
      <CardBody>
        <CardTitle tag="h5">
          {name}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {country}
        </CardSubtitle>
        <CardText>
          {Math.round(weather.temperature.actual)} °C
        </CardText>
      </CardBody>
      </Card>
      </Link>
    </div>
  ));
}

  return (
    <div><CityById/></div>
  )
}

export default City