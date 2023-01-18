import { ThemeProvider } from 'styled-components';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/section/About';
import Faq from './components/section/Faq';
import Home from './components/section/Home';
import ScrollTop from './components/ScrollTop';
import ShowCase from './components/section/ShowCase';
import Team from './components/section/Team';
import './styles/App.css';
import { light } from './styles/Themes';

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Team />
        <ShowCase />
        <Faq />
        <Footer />
        <ScrollTop />
      </ThemeProvider>
    </>
  );
}

export default App;
