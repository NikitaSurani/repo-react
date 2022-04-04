import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {


   
    return (
        <div>
            <div className="container-fluid my-5 cfooter" style={{ "width": "100%" }}>
                <footer className="text-center text-white" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                    {/* <!-- Grid container --> */}
                    <div className="container-fluid pt-4 mt-5" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                        {/* <!-- Section: Social media --> */}
                        <div className="mb-4">
                            {/* <!-- Facebook --> */}
                            <a
                              href='https://www.facebook.com/'
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                role="button"
                                data-mdb-ripple-color="dark">
                                <i className="fab fa-facebook-f" ></i>
                            </a>

                            {/* <!-- Twitter --> */}
                            <a
                                href='https://twitter.com/'
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                data-mdb-ripple-color="dark">
                                <i className="fab fa-twitter"></i>
                            </a>

                            {/* <!-- Google --> */}
                            <a
                                href="https://www.google.com"

                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                data-mdb-ripple-color="dark">
                                <i className="fab fa-google"></i>
                            </a>
                            <a
                                href="https://www.instagram.com"

                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                data-mdb-ripple-color="dark">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/"

                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                data-mdb-ripple-color="dark">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://github.com/"

                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                data-mdb-ripple-color="dark">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <div className="text-center text-dark p-3" >
                            © 2022 Copyright: KNZ Courier Service
                            {/* <NavLink className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</NavLink> */}
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer