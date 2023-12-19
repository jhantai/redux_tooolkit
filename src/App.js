import React from 'react';
import {Routes, Route} from "react-router-dom";
import CharacterList from "./pages/CharacterList/CharacterList";
import DetailInfo from "./pages/DetailInfo/DetailInfo";
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route exact path={'/'}  element={<CharacterList />}/>
                <Route exact path={'/detail'}  element={<DetailInfo />}/>
            </Routes>
        </div>
    );
};

export default App;