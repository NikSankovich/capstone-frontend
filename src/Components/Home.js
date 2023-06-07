import { Link } from 'react-router-dom'
import "../Style/home.css"


const Home = () => {

    return (
        <div className="Home">
            <h1> ATX Show Spot</h1>
            <Link to="/register" >Interested? Register Here</Link>
            
            <Link to="/login" >Already a member? Login Here</Link>
        </div>
    )
}

export default Home;