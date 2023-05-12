import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import './dashboard.scss'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'
import Table from './table/Table'

function App(){
    
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                {/* <div className="listContainer">
                    <div className="listTitle"></div>
                        <Table />
                    </div> */}
                </div>
        </div>
    )
}

export default App;
