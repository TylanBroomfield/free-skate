import './App.css';
import Navigation from './components/Navigation';
import Map from './components/Map';
import Login from './components/Login';

function App() {
  return (
    <div>
      
      <Navigation />
      {/*Conditionally render the login popup*/}
      <Map />
    </div>
  );
}

export default App;
