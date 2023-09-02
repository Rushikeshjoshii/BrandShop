import { useSelector } from 'react-redux';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Authentication =()=>{

    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);

    return(
        <div>
            {!isLoggedIn && <Login/>}
            
        </div>
    );
}

export default Authentication;