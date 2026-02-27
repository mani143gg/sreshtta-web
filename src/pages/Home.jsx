import Hero from "../components/Hero";
import DanceForms from "../components/DanceForms"
import Artists from "../components/Artists"
import Stats from "../components/Stats"

function Home() {
    return(
        <div>
            <Hero />
            <DanceForms />
            <Artists />
            <Stats />
        </div>
    )
}

export default Home