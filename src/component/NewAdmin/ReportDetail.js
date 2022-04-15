import React, { useState, useEffect } from 'react'
import MainDashbord from './MainDashbord'
import { getToken } from '../services/getToken';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../assets/css/allstyle.css'
import ReactPaginate from 'react-paginate';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import ReactStars from 'react-stars'

const ReportDetail = () => {

    const [user, setuser] = useState()
    const [isActive, setActive] = useState("false");
    const navigate = useNavigate();
    const [showdata, setshowdata] = useState("false")
    const [data, setdata] = useState([]);
    const [pdata, setpdata] = useState([]);
    const [todate, settodate] = useState();

    const [clndata, setclndata] = useState([]);
    const [info, setinfo] = useState();
    const [sdate, setdate] = useState()
    const [bnm, setbnm] = useState([]);
    const [show, Setshow] = useState("");
    const [bopen, setbopen] = useState(false)
    const [page , setpage]=useState([]);

    var calenderdt = moment(sdate).format('L');
    var count = 0;
    var rcount = 0;

    var calendertodate = moment(todate).format('L');


    useEffect(() => {
        if (getToken) {
            Axios.get("https://node-knz.herokuapp.com/loggedin", { headers: { 'authorization': getToken } })
                .then((res) => {
                    console.log('first res', res.data.userValid.username);
                    setuser(res.data.userValid.username);
                    Axios.get("https://node-knz.herokuapp.com/comment")
                        .then((res) => {
                            setdata(res.data.commentData);
                            console.log('data', res.data.commentData);
                        })
                    Axios.get("https://node-knz.herokuapp.com/branchinfo")
                        .then((res) => {
                            console.log('hgjb', res.data.branchData.branchname);
                            const Data = res.data.branchData
                            setbnm(Data)
                            console.log('iuhjm', res.data.branchData);
                        })
                })
        }
    }, [])
    const submit = (e, id) => {
        confirmAlert({
            title: '',
            message: 'Are you sure you want to delete..?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        Axios.delete(`https://node-knz.herokuapp.com/deleteUserData/${id}`)
                            .then((res) => {
                                Axios.get("https://node-knz.herokuapp.com/comment")
                                    .then((res) => {
                                        setdata(res.data.commentData);
                                        console.log('data', res.data.commentData);
                                    })
                                toast.success("Delete Successfully..", { autoClose: 1000 }
                                    , {
                                        position: "top-center",
                                    })
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                    }
                }
            ]
        })
    }

    const showreport = () => {
        Setshow(" ");
        setshowdata(!showdata)
        setinfo(" ");
        setdate(" ");
        setbopen(" ");

    }
    const handleBranchclick = () => {
        setshowdata(" ");
        if (bopen === "branch") {
            setbopen(" ");

        }
        else {
            setbopen("branch");
        }

    }

    function logout() {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }


    const hendlesearch = (e) => {
      

        e.preventDefault();
        const branchname = info;
        const pdate = sdate;
        
        Axios.get(`https://node-knz.herokuapp.com/parcedata/${branchname}`)
            .then((res) => {
                if (res.status === 200) {
                    Setshow("show");
                }
                else if (res.status === 400) {
                    console.log("hi");
                    Setshow(" ");
                }
                else {
                    console.log("Error");
                }
                var bdata = res.data.branchdata;
                console.log(bdata);
                // bdata.map((i)=>{
                //    if(moment(i.createdAt).format('L') == calenderdt){
                //        console.log("data for date:",i)
                //        setclndata(i);
                //    }
                // })
                console.log("info:", res.data.receivedata);
                setpdata(res.data.branchdata);
                setclndata(res.data.receivedata);

                let temp = []

                res.data.branchdata && res.data.branchdata.map((item)=>{
                    temp.push(item);
                })
                res.data.receivedata && res.data.receivedata.map((item)=>{
                    temp.push(item);
                })

                setpage(temp);
                // setidate()

            })
    }
    //pagignation
    const [pageNumber, setPageNumber] = useState(0);
    const userperpage = 5;
    const pagevisited = pageNumber * userperpage;
    const displaypdata = page
        .slice(pagevisited, pagevisited + userperpage)

        .map((item) => (


            moment(item.createdAt).format('L') >= calenderdt && moment(item.createdAt).format('L')<= calendertodate ? (
                count = count + 1,
                <tr key={item._id} className='tbltr'>
                    <td>{item.referancenumber}{console.log("userpage",item)}</td>
                    <td>{item.sendername}</td>
                    <td>{item.receivername}</td>
                    <td>{item.senderemail}</td>
                    <td>{item.receiveremail}</td>
                    <td>{item.parcelstatus}</td>
                    <td>{ moment(item.createdAt).format('L')}</td>
                </tr>

            ) : ""
        ))


    //



    const pageCount = Math.ceil(page.length / userperpage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    //user pagignation
    const [pageNumber1, setPageNumber1] = useState(0);
    const userperpage1 = 7;
    const pagevisited1 = pageNumber1 * userperpage1;
        const displayuser=data
        .slice(pagevisited1, pagevisited1 + userperpage1)
        
            .map((i) => (
                <tr key={i._id} className='tbltr'>
                    <td>
                        <i className="fa fa-trash-o i2" aria-hidden="true" onClick={(e) => submit(e, i._id)} ></i>
                    </td>
                    <td>{moment(i.createdAt).format('L')}</td>
                    <td>{i.firstname}</td>
                    <td>{i.lastname}</td>
                    <td>{i.contactno}</td>
                    <td>{i.email}</td>
                    <td>{i.problem}</td>
                    <td>{i.comment}</td>
                    {/* <td>
                    <label>
                                <ReactStars
                                    edit={false}
                                    count={5}
                                    value={i.rate}
                                    size={35}
                                    color2={'#FFD700'}
                                />
                            </label>
                    </td> */}
                </tr>
            ))
        
            const pageCount1 = Math.ceil(data.reverse().length / userperpage1);
            const changePage1 = ({ selected }) => {
                setPageNumber1(selected)
            }
        
    return (
        <div>
            <MainDashbord />
            <main className="main-content position-relative  border-radius-lg ">
                <div>
                    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                        <div className="container-fluid py-1 px-3">
                            <nav aria-label="breadcrumb">
                                <h6 className="font-weight-bolder mb-0 mainad" style={{ marginLeft: "-44px" }}>Reports</h6>
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

                    <div className="container-fluid">
                        <div className="pannel1 row">
                            <div className="col-md-3">
                                <button className='reportbtn ' onClick={showreport}>
                                    User Report
                                </button>
                            </div>
                            <div className="col-md-3 offset"></div>
                            <div className="col-md-3 offset"></div>
                            <div className="col-md-3 offset"></div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="pannel1 row">
                            <div className="col-md-3">
                                <button className='reportbtn12' onClick={handleBranchclick}>
                                    Branch Report
                                </button>
                            </div>
                            {bopen === "branch" ? (<>
                                <div className="col-md-3 select1">
                                    Select Branch Name :  <select className="option1" value={info} onChange={(e) => setinfo(e.target.value)}>
                                        <option value=""></option>
                                        {
                                            bnm.map((i) => (
                                                <option value={i.branchname}>{i.branchname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="col-md-2">
                                   From:<input className='date1' type="date" value={sdate} onChange={(e) => setdate(e.target.value)} />
                                </div>
                                <div className="col-md-2">
                                    To :  <input className='date1' type="date" value={todate} onChange={(e) => settodate(e.target.value)} />
                                </div>
                                <div className="col-md-2">
                                    <button className='rbtn' onClick={hendlesearch}>
                                        Parcel Report
                                    </button>
                                </div>
                            </>
                            ) : ""}

                        </div>
                    </div>
                </div>


                {
                    (!showdata ?

                        <div className="row table-responsive mt-4">
                            <table className="table">
                                <thead>
                                    <tr className='tbltr'>
                                        <th scope="col">Action</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Contact No</th>
                                        <th scope="col">E-Mail</th>
                                        <th scope="col">Customer problem</th>
                                        <th scope="col">Feedback</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayuser}
                                    {/* {
                                        data.map((i) => (
                                            <tr key={i._id} className='tbltr'>
                                                <td>
                                                    <i className="fa fa-trash-o i2" aria-hidden="true" onClick={(e) => submit(e, i._id)} ></i>
                                                </td>
                                                <td>{moment(i.createdAt).format('L')}</td>
                                                <td>{i.firstname}</td>
                                                <td>{i.lastname}</td>
                                                <td>{i.contactno}</td>
                                                <td>{i.email}</td>
                                                <td>{i.problem}</td>
                                                <td>{i.comment}</td>
                                            </tr>
                                        ))
                                    } */}
                                </tbody>
                            </table>
                            <div className='pagenationbike'>
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount1}
                                    onPageChange={changePage1}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            </div>
                        </div>

                        : " "
                    )}


                {
                    show === "show" ?
                        <div className="row table-responsive mt-4">
                            <table className="table">
                                <thead>
                                    <tr className='tbltr'>
                                        <th scope='col'>Referance Number</th>
                                        <th scope="col">Sender Name</th>
                                        <th scope="col">Receiver Name</th>
                                        <th scope="col">Sender Email</th>
                                        <th scope='col'>Receiver Email</th>
                                        <th scope='col'>Parcel Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {displaypdata}
                            
                                    {/* {
                                        pdata.map((item) => (
                                            moment(item.createdAt).format('L') == calenderdt ? (
                                                count = count + 1,
                                                <tr key={item._id} className='tbltr'>
                                                    <td>{item.referancenumber}</td>
                                                    <td>{item.sendername}</td>
                                                    <td>{item.receivername}</td>
                                                    <td>{item.senderemail}</td>
                                                    <td>{item.receiveremail}</td>
                                                    <td>{item.parcelstatus}</td>

                                                </tr>

                                            ) : ""
                                        ))
                                    }
                                    {
                                        (clndata ? clndata : "").map((i) => (
                                            i.receivedate == calenderdt ? (
                                                rcount = rcount + 1,
                                                <tr key={i._id} className='tbltr'>
                                                    <td>{i.referancenumber}</td>
                                                    <td>{i.sendername}</td>
                                                    <td>{i.receivername}</td>
                                                    <td>{i.senderemail}</td>
                                                    <td>{i.receiveremail}</td>
                                                    <td>{i.parcelstatus}</td>

                                                </tr>
                                            ) : ""
                                        ))


                                    } */}



                                </tbody>

                            </table>
                            <div className='pagenationbike'>
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            </div>
                           
                            {pdata ? (
                                <b style={{ fontSize: "25px" }}>
                                    total parcel in {info} is  : {count + rcount}
                                </b>

                            ) : ""}
                        </div>
                        : " "
                }

            </main>
        </div>
    )
}

export default ReportDetail