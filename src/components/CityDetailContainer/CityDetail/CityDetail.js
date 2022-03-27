import React from 'react'
import {useQuery} from '@apollo/client'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getCityById } from '../../../service/db';
import './CityDetail.css'
import HomeButton from '../../Buttons/HomeButton/HomeButton';

const CityDetail = ({cityId}) => {

  const { loading, error, data} = useQuery(getCityById(), {variables: {cityId}});

  if (loading) return <div className="spinner"> <svg className="circular" viewBox="25 25 50 50"> <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"></circle></svg></div>;
  if (error) return <p>Error :(</p>;

  return data.getCityById.map(({ name, weather, country }) => (
    <div key={name}>   
        <Card className="cityDetail">
        <CardImg className='img' alt='Weather image' src={`http://openweathermap.org/img/wn/${weather.summary.icon}@2x.png`}/>
        <CardBody>
        <CardTitle tag="h5">
            {name}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            {country}
        </CardSubtitle>
        <CardText>
            Temperatura: {Math.round(weather.temperature.actual)} °C
        </CardText>
        <CardText>
            Sensacion: {Math.round(weather.temperature.feelsLike)} °C
        </CardText>
        <CardText>
            Viento: {weather.wind.speed} Km/h
        </CardText>
        <CardText>
            Humedad: {weather.clouds.humidity}%
        </CardText>
        </CardBody>
        </Card>
        <Link to="/"><HomeButton/></Link>
    </div>
  ));

}

export default CityDetail