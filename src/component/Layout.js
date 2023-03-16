import Header from './Header';
import { useSelector } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import User from './User/User';
import Profiles from './User/Profiles';
const Layout = () => {


    const Account = useSelector(state => state.accountThanh.Account)
    return (
<>      
    <Routes>
         <Route path='/' element={<Header />}>
            <Route path={Account.Last_Name} element={<User />} />
            profiles
         </Route>
         <Route path='profiles' element={<Profiles/>}> 

         </Route>
</Routes>
</>
    )
}

export default Layout;