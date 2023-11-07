import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    if(!isLogin){
        window.location.href='/login';
    }
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='login' element={isLogin?<REdirect to={'/login'}/> : <Login />} />
                <Route path='gallery' element={<Gallery />} />
                <Route path='guestbook' element={<Guestbook />} />
            </Routes>
        </Router>
    );
}