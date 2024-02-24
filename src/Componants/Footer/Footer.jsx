import React from 'react'

const Footer = () => {
    return (

        <footer class="section-bottom-footer mt-3 " style={{ background: "#181818" }}>
            <div className="container py-5">
                <div class="row text-white py-4">
                    <div class="col-lg-3 pt-4 pt-lg-0">
                        <div class="footer_logo-container">
                            <a href="/" aria-current="page" class="text-warning text-decoration-none">
                                <h2 className="fw-bold fs-4" style={{ fontSize: "30px" }}>
                                    Bewakoof
                                    <span className="tradeMark">®</span>
                                </h2>
                            </a>
                            <p className='fs-7 text-warning fw-medium mt-3'>CUSTOMER SERVICE</p>

                            <div className="fs-7 pt-1 fw-medium">
                                Contact Us <br />
                                Track Order<br />
                                Return Order<br />
                                Cancel Order
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-3 pt-4 pt-lg-0">
                        <div class="footer_logo-container pt-4">
                            <p className='fs-7 text-warning fw-medium mt-4'>COMPANY</p>

                            <div className="fs-7 pt-1 fw-medium">
                                About Us <br />
                                We're Hiring <br />
                                Terms & Conditions <br />
                                Privacy Policy <br />
                                Blog
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 pt-4 pt-lg-0">
                        <div class="footer_logo-container pt-4">
                            <p className='fs-7 text-warning fw-medium mt-4'>CONNECT WITH US</p>

                            <div className="fs-7 pt-1 fw-medium">
                                <i class="bi bi-facebook pe-1"></i> 4.7M People Like this<br /><br />
                                <i class="bi bi-instagram pe-2"></i>1M Followers <br /><br />
                                <i class="bi bi-twitter-x"></i>
                                <i class="bi bi-pinterest px-3 "></i>
                                <i class="bi bi-snapchat pe-3 "></i>
                                <i class="bi bi-apple"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 pt-4 pt-lg-0">
                        <div class="footer_logo-container pt-4">
                            <p className='fs-7 text-warning fw-medium mt-4'>KEEP UP TO DATE</p>

                            <div className="fs-7 pt-1 fw-medium">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter Email Id" />
                                    <button class="btn btn-warning fs-7 fw-semibold" type="button" id="button-addon2">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer >

    )
}

export default Footer