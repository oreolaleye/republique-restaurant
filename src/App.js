import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import ReservationScreen from './components/ReservationScreen';
import ContactScreen from './components/ContactScreen';



function App() {
  return (
    <Router>
      <div className="App">
            <Switch>
              <Route path="/contact">
                <ContactScreen />
              </Route>
              <Route path="/reservations">
                <ReservationScreen />
              </Route>
              <Route path="/menu">
                <MenuScreen />
              </Route>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch> 
      </div>
    </Router>
    
  );
}

export default App;
