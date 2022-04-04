import React from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { getToken } from '../services/getToken';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MainDashbord from './MainDashbord';


const MainDash = () => {

    const navigate = useNavigate();
    const [user, setuser] = useState()
    const [isActive, setActive] = useState("false");
    const [branchname, setbranchname] = useState()
    const [branchdata, setbranchdata] = useState([])


    useEffect(() => {
        if (getToken) {
            Axios.get("http://localhost:8000/loggedin", { headers: { 'authorization': getToken } })
                .then((res) => {
                    console.log('first res', res.data.userValid.username);
                    setuser(res.data.userValid.username);
                    Axios.get("http://localhost:8000/branchinfo")
                        .then((res) => {
                            const data = res.data.branchData;
                            console.log(data);
                            // data.map((i) => {
                            //     console.log('bnm is  ', i.branchname);
                            // })
                            setbranchdata(data);
                            console.log('data is', data);
                            console.log('first bnm', res.data.branchData.branchname);
                            setbranchname(res.data.branchData.username);
                        })
                })
        }
    }, [])
    function logout() {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }
    return (
        <div>
            <MainDashbord />
            <main className="main-content position-relative  border-radius-lg ">
                <div>
                    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                        <div className="container-fluid py-1 px-3">
                            <nav aria-label="breadcrumb">
                                <h6 className="font-weight-bolder mb-0 mainad">Dashboard</h6>
                            </nav>
                            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 " id="navbar">

                                <ul className="navbar-nav  justify-content-end ml-auto">
                                    <li className="nav-item d-flex align-items-center resnav resicon">
                                        <span className="d-sm-inline  right1 d-flex">
                                            <i className="fa fa-user me-sm-1 icon1"></i>
                                            <NavDropdown className='navdd' title={user} >
                                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                            </NavDropdown>
                                        </span>
                                    </li>
                                    <li className="nav-item d-xl-none ps-3 d-flex align-items-center resnav">
                                        <NavLink to="#" className="nav-link text-body p-0" id="iconNavbarSidenav" onClick={() => setActive(!isActive)}>
                                            <div className="sidenav-toggler-inner">
                                                <i className="sidenav-toggler-line"></i>
                                                <i className="sidenav-toggler-line"></i>
                                                <i className="sidenav-toggler-line"></i>
                                            </div>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid py-4">
                        <div className="row">
                            {
                                branchdata.map((i) => (
                                    console.log('data in row', i.branchname),
                                    <div className="col-xl-3 col-sm-6 mb-4  box1" >
                                        <div className="card">
                                            <div className="card-header p-3 pt-2">
                                                <div className="icon icon-lg icon-shape bg-gradient-g shadow-success text-center border-radius-xl mt-n4 position-absolute i1">
                                                    <i className="material-icons opacity-10">home</i>
                                                </div>
                                                <div className="text-end pt-1">
                                                    <h3 className="text-s mb-0 text-capitalize"></h3>
                                                    <h4 className="mb-0">{i.branchname}</h4>
                                                </div>
                                            </div>
                                            <hr className="dark horizontal my-0" />
                                            <div className="card-footer p-3">
                                                <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">
                                                    <NavLink to={{ pathname: `/suratdetails/${i.branchname}` }}>
                                                        <u style={{ color: "red", fontWeight: "bold" }}>View Details</u>
                                                    </NavLink>
                                                </span></p>
                                            </div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainDash