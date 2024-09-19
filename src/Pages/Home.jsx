import Footer from "../Components/Home/Footer"
import InfoSection from "../Components/Home/InfoSection"
import Landing from "../Components/Home/Landing"
import NavBar from "../Components/Home/NavBar"


const Home = () => {
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