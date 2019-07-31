import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'

function Home () {
    return(
        <div>
            <Navbar />
            <Jumbotron title="Welcome" subtiltle="Home from Task Manager App" />
            <div className="container">
                <h2>
                    Welcome
                </h2>
                <p>
                    This is Just a demo text.
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default Home