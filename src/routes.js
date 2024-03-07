import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Page404 from './Pages/Page404';
import User from './Pages/User';
import Login from './Pages/Login';
import Protected from './Pages/Protected';
import UsersListing from './Pages/UsersListing';
import UserDetail from './Pages/UserDetail';
import CreateUser from './Pages/CreateUser';
import EditUser from './Pages/EditUser';
import UserListing from './Redux-Toolkit-Components/Userlisting';
import ReduxUserDetail from './Redux-Toolkit-Components/ReduxUserDetail';
import CreateReduxUser from './Redux-Toolkit-Components/CreateReduxUser';
import ReduxEditUser from './Redux-Toolkit-Components/ReduxEditUser';


function AppRoutes(){
    return(

        // {/* protected routes way */}
        //   {/* <Routes>
        //     <Route path='/' element={<Protected Component={Home}/>} />
        //     <Route path='/about-us' element={<Protected Component={About}/>}/>
        //     <Route path='/contact-us' element={<Protected Component={ContactUs}/>}/>
        //     <Route path='/login' Component={Login}/>
        //     <Route path='/user/:name' element={<Protected Component={User}/>}/>
        //     <Route path='/*' Component={Page404}/>
        //   </Routes> */}
        // {/* protected routes way */}

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/redux-users' element={<UserListing/>}/>
            <Route path='/redux/user/:id' element={<ReduxUserDetail/>} />
            <Route path='/create/redux/user' element={<CreateReduxUser/>} />
            <Route path='/redux-user/edit/:id' element={<ReduxEditUser/>} />

            {/* <Route path='/user/:name' element={User}/> */}
            {/* <Route path='/users' element={<UsersListing/>}/>
            <Route path='/user/:id' element={<UserDetail/>}/>
            <Route path='/create/user' element={<CreateUser/>}/>
            <Route path='/edit/user/:id' element={<EditUser/>}/> */}

            <Route path='/users' element={<Protected Component={UsersListing } />} />
            <Route path='/user/:id' element={<Protected Component={UserDetail} />} />
            <Route path='/create/user' element={<Protected Component={CreateUser } />} />
            <Route path='/edit/user/:id' element={<Protected Component={EditUser } />} />
            <Route path='/*' element={<Page404/>}/>
        </Routes>
    )
}
export default AppRoutes;