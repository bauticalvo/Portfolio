import { useEffect, useRef, useState } from "react"
import Footer from "../Components/Home/Footer/Footer"
import InfoSection from "../Components/Home/InfoSection"
import LandingSection from "../Components/Home/LandingSection"
import NavBar from "../Components/Home/Header/NavBar"
import ContactSection from "../Components/Home/ContactSection"
import Menu from "../Components/Home/Header/Menu"
import StackSection from "../Components/Home/StackSection"
import { motion } from 'framer-motion'
import { t } from "i18next"

const Home = () => {
    const isConsoleLogged = useRef(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true) 
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767)
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1280)	
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280 && window.innerWidth < 1920)
    const [isExtralargeScreen, setIsExtralargeScreen] = useState(window.innerWidth >= 1920)


    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth
        setIsSmallScreen(width <= 767)
        setIsMediumScreen(width >= 768 && width < 1280)
        setIsLargeScreen(width >= 1280 && width < 1920)
        setIsExtralargeScreen(width >= 1920)
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    const scrollToSection = (sectionId) => {
        var section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ block: "start", behavior: "smooth" })
        } else {
          console.log("No se encontró la sección")
        }
      }
  
      const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(() => {
          return position
        })
      }

      

      useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      }, [])
    
    useEffect(() => {
        if (!isConsoleLogged.current) {
            console.log(`

              
                

                ░░░░░▄░░░░░▄░░░░░▄░░░░
                ░░░░▀▄▀░░░▀▄▀░░░▀▄▀░░░
                ░░░▀▄╣░░░▄░║░░░░░║░▄░░
                ░░░▄░║░▄░░▀╣░▄░▄░╠▀░░░
                ▒▒▒▒▀╬▀▒▒▒▒╠▀▒▒▒▀╣▒▒▒▒

                

        Welcome to Bautista Calvo's Portfolio
            `)
            isConsoleLogged.current = true // Evita que se imprima más de una vez
        }
    }, [])


    useEffect(() => {
      var firstSize = 1600
      var secondSize = 3000
      if(isSmallScreen){
        firstSize = 2500
        secondSize = 3500
      }else if(isMediumScreen){
        firstSize = 1900
        secondSize = 3500
      } else if(isLargeScreen){
        firstSize = 1300
        secondSize = 2500
      } 
      if (scrollPosition > firstSize && scrollPosition < secondSize && !isOpen) {
        setIsVisible(false) 
      } else {
        setIsVisible(true) 
      }
    }, [scrollPosition, isOpen, isSmallScreen, isMediumScreen, isLargeScreen])
  

    return (
        <div className="overflow-hidden no-scrollbar" >
          <motion.div 
          className={`fixed  top-0 left-0 w-full h-1/4 ${isOpen ? 'z-[60]' : 'z-20'}`}
          initial={{ y: 0 }} 
          animate={{ y: isVisible ? 0 : -200 }} 
          transition={{ duration: 0.5 }} 
          >
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} className={`${isOpen ? '' : 'z-20'}`} 
            isSmallScreen={isSmallScreen} 
            isMediumScreen={isMediumScreen}
            isLargeScreen={isLargeScreen}
            isExtralargeScreen={isExtralargeScreen}
            />
          </motion.div>
            {
              isOpen && (
                   <Menu isOpen={isOpen} setIsOpen={setIsOpen} scrollToSection={scrollToSection} t={t} />
              )
            }
            <div id="landing">
                <LandingSection isLargeScreen={isLargeScreen} t={t} />
            </div>
            <div id="infoSection">
                <InfoSection  t={t} isSmallScreen={isSmallScreen} />
            </div>
            <div id="experincieSection">
                <StackSection scrollPosition={scrollPosition}  t={t} />
            </div>
            <div id="contactSection">
                <ContactSection   t={t} />
            </div>
            <div className="bg-turquoise">
                <Footer scrollToSection={scrollToSection}   />
            </div>
        </div>
    )
}

export default Home