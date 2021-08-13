import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { lazy, Suspense } from 'react';
import Navbar from './pages/Navbar';
import HomeComponent from "./pages/Home/index"
import BlogComponent from "./pages/Blog"
import CloudComponent from"./pages/Cloud";
import DocumentationComponent from "./pages/Documentation";
import EnterpriceComponent from "./pages/Enterprise";
import MarketplaceComponent from "./pages/Marketplace";

function App() {
  return (
    <Router>
        <Suspense fallback={<div>...loading</div>}>
          <Route exact path='/' component={HomeComponent} />
          <Route exact path='/cloud' component={CloudComponent} />
          <Route exact path='/blog' component={BlogComponent} />
          <Route exact path='/enterprise' component={EnterpriceComponent} />
          <Route exact path='/marketplace' component={MarketplaceComponent} />
          <Route exact path='/documentation' component={DocumentationComponent} />
          <Redirect to="/" />
        </Suspense> 
    </Router>
  );
}

export default App;

{/* <div>
<div className="App">
  <Navbar/>
  <Header/>
</div>
<Navbar/>
  <Header/>
  <Navbar/>
  <Header/>
  <Navbar/>
  <Header/>
  <Navbar/>
  <Header/>
  <Navbar/>
  <Header/>
 */}
