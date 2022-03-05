import React,{useEffect} from 'react';
import './Header.css';

const Navbar=() => {
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
      <header className={navbarClasses.join(" ")}>
          <div className="logo">
              Kimolaki
          </div>
          <nav className="navigation">
           
          </nav>

      </header>
    )
};
export default Navbar;