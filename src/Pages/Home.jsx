import { useEffect, useRef, useState } from "react"
import Footer from "../Components/Home/Footer"
import InfoSection from "../Components/Home/InfoSection"
import LandingSection from "../Components/Home/LandingSection"
import NavBar from "../Components/Home/NavBar"
import ContactSection from "../Components/Home/ContactSection"
import Menu from "../Components/Home/Menu"
import StackSection from "../Components/Home/StackSection"
import { motion } from 'framer-motion';

const Home = () => {
    const isConsoleLogged = useRef(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); 


    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const scrollToSection = (sectionId) => {
        var section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ block: "start", behavior: "smooth" });
        } else {
          console.log("No se encontró la sección");
        }
      };
  
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(() => {
          return position;
        });
      };

      console.log(scrollPosition);
      

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
    useEffect(() => {
        if (!isConsoleLogged.current) {
            console.log(`

              
                

                ░░░░░▄░░░░░▄░░░░░▄░░░░
                ░░░░▀▄▀░░░▀▄▀░░░▀▄▀░░░
                ░░░▀▄╣░░░▄░║░░░░░║░▄░░
                ░░░▄░║░▄░░▀╣░▄░▄░╠▀░░░
                ▒▒▒▒▀╬▀▒▒▒▒╠▀▒▒▒▀╣▒▒▒▒

                

        Welcome to Bautista Calvo's Portfolio
            `);
            isConsoleLogged.current = true; // Evita que se imprima más de una vez
        }
    }, []);


    useEffect(() => {
      if (scrollPosition > 1700) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
    }, [scrollPosition]);
  

    return (
        <div className="no-scrollbar overflow-hidden" >
          <motion.div 
          className="fixed z-20 top-0 left-0 w-full h-full"
          initial={{ y: 0 }} 
          animate={{ y: isVisible ? 0 : -200 }} 
          transition={{ duration: 0.5 }} 
          >
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} scrollPosition={scrollPosition} />
          </motion.div>
            {
              isOpen && (
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed z-20 top-0 left-0 w-full h-full ">
                  <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
                </button>
              )
            }
            <div id="landing">
                <LandingSection scrollToSection={scrollToSection}/>
            </div>
            <div id="infoSection">
                <InfoSection scrollPosition={scrollPosition}   />
            </div>
            <div id="experincieSection">
                <StackSection scrollPosition={scrollPosition} />
            </div>
            <div id="contactSection">
                <ContactSection  />
            </div>
            <div className="bg-turquoise">
                <Footer scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
            </div>
        </div>
    )
}

export default Home