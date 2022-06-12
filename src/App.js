import './App.css';

//component
import NavBar from './components/NavBar/NavBar';

// Test 
import BackToTop from './components/BackToTop/BackToTop';
import Section from './components/Section/Section';
import About from './components/About/About';

function App() {
  return (
    <>
      {/* <BackToTop /> */}
      <NavBar />
      <Section 
        component={<About/>} 
        stylish={{backgroundColor : 'var(--accent-color)'}} 
      />
    </>
  );
}

export default App;
