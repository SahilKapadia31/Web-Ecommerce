import React from "react";
import "./Header.css";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import CategoryBar from "./CategoryBar";

const Header = () => {

    const data = [
        {
            "category": "Popular",
            "items": [
                { "name": "Nothing", "models": ["Nothing Phone 1", "Nothing Phone 2"] },
                { "name": "Xiaomi", "models": ["Poco X4 Pro 5G", "Poco M4 5G", "Poco M4 Pro 5G"] },
                { "name": "Oneplus", "models": ["OnePlus Nord 2T 5G", "OnePlus 9R", "OnePlus Nord N20 SE"] },
                { "name": "Apple", "models": ["iPhone 15 Pro max", "iPhone 15 Pro", "iPhone 15 Plus"] },
                { "name": "Samsung", "models": ["Samsung Galaxy S21 fe 5G", "Samsung Galaxy S20 FE", "Samsung Galaxy Note 10 lite"] },
                { "name": "Realme", "models": ["Realme 10 Pro+ 5G", "Realme 10 Pro 5G", "Realme 8 5G"] },
                { "name": "Vivo", "models": ["Vivo V25 Pro", "Vivo S1", "Vivo IQOO 11"] }
            ]
        },
        {
            "category": "HARDCORE CAMERA",
            "items": [
                { "name": "Nothing", "models": ["Phone 1", "Phone 2"] },
                { "name": "Apple", "models": ["iPhone 15 Pro max", "iPhone 15 Pro", "iPhone 15 Plus"] },
                { "name": "akoof.com/mobile-covers-india" },
                { "name": "Xiaomi", "models": ["Poco X4 Pro 5G", "Poco M4 5G", "Poco M4 Pro 5G"] },
                { "name": "Samsung", "models": ["Samsung Galaxy S21 fe 5G", "Samsung Galaxy S20 FE", "Samsung Galaxy Note 10 lite"] },
                { "name": "Oneplus", "models": ["OnePlus Nord 2T 5G", "OnePlus 9R", "OnePlus Nord N20 SE"] },
                { "name": "Realme", "models": ["Realme 10 Pro+ 5G", "Realme 10 Pro 5G", "Realme 8 5G"] },
                { "name": "Vivo", "models": ["Vivo V25 Pro", "Vivo S1", "Vivo IQOO 11"] }
            ]
        },
        {
            "category": "OTHER BRANDS",
            "items": [
                { "name": "Oppo" },
                { "name": "Huawei" },
                { "name": "Moto" },
                { "note": "See all devices" }
            ]
        }
    ]

    return (
        <div className="">
            <Navbar bg="white" data-bs-theme="white" className="border-bottom border-dark-subtle position-relative p-0">
                <Container>
                    <Navbar.Brand>
                        <img src="public/vite.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <Nav className="me-auto ps-4 gap-3 text-uppercase fs-7">
                        <Nav.Link className=" text-black py-3">Men</Nav.Link>
                        <Nav.Link className=" text-black py-3">Women</Nav.Link>
                        <Nav.Link className=" text-black py-3 mobile-cover">Mobile Covers</Nav.Link>
                        <Container className="mega-menu position-absolute top-100">
                            <div className="p-5 border border-dark-subtle bg-white">
                                <div className="dropDownMenu fs-7">
                                    <div className="row">
                                        <div className="col-sm-7 border-end border-dark-subtle">
                                            {data && data.map((x, i) =>
                                                <div className="row g-3">
                                                    <div className="col-sm-12 text-secondary fw-semibold text-opacity-50" >
                                                        {x.category}
                                                    </div>
                                                    <div className="d-flex flex-wrap justify-content-end ps-0 row-gap-4 text-capitalize" key={i}>
                                                        {x.items && x.category == "Popular" && x.items.map((item, j) =>
                                                            <div className="col-sm-4" key={j}>
                                                                <a className="nav-link text-secondary-emphasis fw-semibold mb-2 fs-14px">
                                                                    {item.name}
                                                                </a>
                                                                {item.models && item.models.map((model, k) =>
                                                                    <a className="nav-link py-1 text-secondary fs-7" key={k}>
                                                                        {model}
                                                                    </a>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="row ps-5 pe-4">
                                                <div className="col-sm-6">
                                                    <span className="col-sm-12 text-secondary fw-semibold text-opacity-50">
                                                        OTHER BRANDS
                                                    </span>
                                                    <div>
                                                        <a className="nav-link text-secondary mt-4">
                                                            Oppo
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a className="nav-link text-secondary">Huawei</a>
                                                    </div>
                                                    <div>
                                                        <a className="nav-link text-secondary">Moto</a>
                                                    </div>
                                                    <div className="mt-5">
                                                        <a className="pt-5" style={{ fontsize: "14px" }}>
                                                            See all devices
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <a>
                                                        <img
                                                            src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg"
                                                            title="mobile-covers-india"
                                                            alt="mobile-covers-india"
                                                            width="100%"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Nav>
                    <Form className="w-50">
                        <Row className=" justify-content-end">
                            <Col xs="7">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2 fs-7 bg-body-secondary border-0"
                                />
                            </Col>
                        </Row>
                    </Form>
                    <hr className="vr h-100 mx-3" />
                    <div className="fs-7 d-flex align-items-center gap-3">
                        <span className="text-black">Login</span>
                        <i class="bi bi-heart fs-5"></i>
                        <i class="bi bi-bag fs-5"></i>
                    </div>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;
