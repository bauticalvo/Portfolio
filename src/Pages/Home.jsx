import { useEffect, useRef } from "react"
import Footer from "../Components/Home/Footer"
import InfoSection from "../Components/Home/InfoSection"
import Landing from "../Components/Home/Landing"
import NavBar from "../Components/Home/NavBar"


const Home = () => {

    const isConsoleLogged = useRef(false);

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
            <NavBar />
            <Landing />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Home