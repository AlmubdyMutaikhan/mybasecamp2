import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import BlogPage from './pages/Blog';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/blogs" component={BlogPage}></Route>
      </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default App;
