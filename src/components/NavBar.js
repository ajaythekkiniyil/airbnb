import Airbnb from '../images/airbnb.png'
export default function NavBar(){
    return(
        <nav>
            <img src={Airbnb} alt="airbnb-logo"  className='airbnb-logo'/>
        </nav>
    )
}