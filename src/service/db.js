import {gql} from '@apollo/client'

export const getCityById = () => {
    
    const citybyId = gql`
        query GetCityById($cityId: [String!]) {
            getCityById(id: $cityId, config: { units: metric, lang: sp }) {
            name
            country
            weather {
                summary{
                    icon
                }
                temperature {
                    actual
                    feelsLike
                }
                wind{
                    speed
                }
                clouds{
                    humidity
                }
            }
            }
        }
    `;

    return citybyId;  
}