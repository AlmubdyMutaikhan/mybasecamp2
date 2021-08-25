import Cards from "../components/Cards/Cards"
import DescriptionSection from "../components/Description/Description"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"

const Home = () => {
    return(
        <>
            <Hero/>
            <DescriptionSection/>
            <Cards />
            <Footer/>
        </>
    )
}

export default Home;