import {HashRouter, Link,  Route, Switch} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/style/style.css";

//import components
import MoviesList from './pages/Movies/MoviesList.jsx';
import PersonCards from './pages/PersonCards';
import HomePage from './pages/HomePage.jsx';

function App() {
  
  return (
    <div className="App">
        {/* <CardsComponent/> */}
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <div className="container-fluid">
              <HashRouter>
                  <Link className="btn navbar-brand" to="/">HOME</Link>
              </HashRouter>
                 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <HashRouter>
                      {/* instead of using a href */}
                       <Link className="btn" to="/Persons">Persons</Link>
                       <Link className="btn" to="/MoviesList">Movie List</Link>
                    </HashRouter>   
                    </div>
                </div>
            </div>
        </nav>
       

        <HashRouter>
            <Switch>
            <Route exact path="/"> <HomePage/> </Route>
              <Route exact path="/Persons"> <PersonCards/> </Route>
              <Route exact path="/MoviesList"> <MoviesList/> </Route>
            </Switch>
        </HashRouter>
       
      </div>
    
  );
}

export default App;
