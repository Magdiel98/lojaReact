import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
//Reaproveitamento 
import { Outlet } from 'react-router-dom';


function App() {

  useEffect(() => {
    document.body.classList.add("bg-dark-subtle");

    return() => {
      document.body.classList.remove("bg-dark-subtle");
    };

  }, []);

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
