import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
// import Footer from './components/Footer/Footer';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';

import loadanimation from "../src/loadanimation.gif"

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title="Find weather by entering the city name" />

      {!loading ?  weatherData && <Weather data={weatherData}/> : <h2 className="is-size-3 py-2"><img src={loadanimation} width="20px" alt="medium"/></h2>}
      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
      
    </div>
  );
}

export default App;
