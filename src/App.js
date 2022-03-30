import React,{ useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import Footer from "./components/Footer/Footer";
import AnimeList from './components/AnimeList/AnimeList';
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 100 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }

  return (
    <div className='app' data-theme={theme}>
      <div className='wrapper'>
         <header className={navbarClasses.join(" ")}>
          <div className="logo">
              Anime News
          </div>
          <div className='theme-toggle'>
            <i onClick={switchTheme} class='fas fa-toggle-on'></i>
          </div>
        </header>

        <AnimeList /> 
        <Footer />

      </div>  
    </div>
  )
}

export default App;