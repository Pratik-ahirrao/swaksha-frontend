import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import '../dashboard.scss'
import ShowCondition from './showCondition';
function App(){
    
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className="listContainer">
                    <div className="listTitle"></div>
                        <ShowCondition />
                    </div>
                </div>
        </div>
    )
}

export default App;