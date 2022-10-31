import './App.css';
import Header from './components/layout/header/header';
import Main from './pages/main/main';
import About from './pages/about/about';
import Services from './pages//services//services';
import Footer from './components/layout/footer/footer';
import Projects from './pages/projects/projects';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Redirect exact from="/" to="/Main" />
          <Route path="/Main" component={Main} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Projects" component={Projects} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
