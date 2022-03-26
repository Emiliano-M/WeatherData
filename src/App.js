import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CityDetailContainer from './components/CityDetailContainer/CityDetailContainer';
import CityContainer from './components/CityListContainer/CityContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element= {<CityContainer/>} />
        <Route exact path='/city/:id' element= {<CityDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
