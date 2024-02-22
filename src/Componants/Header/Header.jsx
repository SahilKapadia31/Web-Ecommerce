import React, { useState, useEffect } from "react";
import "./Header.css";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import CategoryBar from "./CategoryBar";
import Megamenu from "./Megamenu";
import { Link } from "react-router-dom";

const Header = ({ productCount }) => {

    const [activeTab, setActiveTab] = useState('')
    const [addToCart, setAddToCart] = useState()

    useEffect(() => {
        setAddToCart(JSON.parse(sessionStorage.getItem('counter')))
    }, [productCount])

    const navItems = ["Men", "Women", "Mobile Covers"]

    const handleTabHover = (item) => {
        setActiveTab(item);
    };

    return (
        <div className="">
            <Navbar bg="white" data-bs-theme="white" className="border-bottom border-dark-subtle position-relative p-0">
                <Container>
                    <Navbar.Brand className="me-4">
                        <img src="/bwkf.svg" width="147" height="42" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <div className=" d-flex w-50 fw-medium">
                        {navItems && navItems.map((item, i) =>
                            <Nav className="text-uppercase fs-7" key={i} onMouseEnter={() => handleTabHover(item)} onMouseLeave={() => handleTabHover('')}>
                                <Nav.Link className="text-black p-3 men">{item}</Nav.Link>
                                <Megamenu activeTab={activeTab === item ? activeTab : ''} />
                            </Nav>
                        )}
                    </div>
                    <Form className="w-50" >
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
                        <Link className="text-decoration-none" to={'/login'}><span className="text-black fw-medium" style={{ cursor: 'pointer' }}>Login</span></Link>
                        <i class="bi bi-heart fs-5"></i>
                        <i class="bi bi-bag fs-5 position-relative">
                            <span class="badge bg-dark text-white rounded-pill position-absolute">{addToCart ? addToCart : 0}</span>
                        </i>
                    </div>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;