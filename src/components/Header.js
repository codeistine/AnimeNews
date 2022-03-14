import React,{ useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Theme'
import './Header.css';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledApp = styled.div `
  // color: ${props => props.theme.fontColor};
`

const Header=() => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
      <>
      <header className={navbarClasses.join(" ")}>
          <div className="logo">
 
              Kimolaki

          </div>
          <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme}>
          <StyledApp>
            <button onClick={() => themeToggler()}></button>
          </StyledApp>
            <GlobalStyles />
   
          </ThemeProvider>
          
         
      </header>
      </>
    )
}
export default Header;