import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'

function MyInfo () {
    return(
        <div>
            <Navbar />
            <Jumbotron title="User's Info" subtiltle="Personal Information" />
            <div className="container">
                <h2>
                    Welcome User
                </h2>
                <p>
                    This is Just a demo text.
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default MyInfo