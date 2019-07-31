import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'
import Auth from '../components/Auth'

function Login (props) {
    const authUser = () => {
        Auth.login(() =>{
            props.history.push("/")
        })
    }
    return(
        <div>
            <Navbar />
            <Jumbotron title="Login" subtiltle="Sign In" />
            <div className="container">
                <h2>
                    Please Login User
                </h2>
               <button 
               onClick={authUser}
               >Login</button>
            </div>
            <Footer />
        </div>
    )
}
export default Login