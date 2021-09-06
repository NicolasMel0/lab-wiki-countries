import './Components/styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ListaDePais from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App(props) {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="screenAdjustment">
        <ListaDePais />
        <Route path="/:cca3" component={CountryDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
