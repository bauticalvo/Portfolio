import { useEffect, useRef, useState } from "react"
import Footer from "../Components/Home/Footer"
import InfoSection from "../Components/Home/InfoSection"
import LandingSection from "../Components/Home/LandingSection"
import NavBar from "../Components/Home/NavBar"
import ExperiencieSection from "../Components/Home/ExperiencieSection"
import ContactSection from "../Components/Home/ContactSection"
import Menu from "../Components/Home/Menu"

const Home = () => {
    const isConsoleLogged = useRef(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <div className="no-scrollbar overflow-hidden" >
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
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
                <InfoSection scrollToTop={scrollToTop}  />
            </div>
            <div id="experincieSection">
                <ExperiencieSection  />
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