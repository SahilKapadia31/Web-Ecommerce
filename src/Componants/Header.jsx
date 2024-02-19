import React, { useState } from "react";
import "./Header.css";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import CategoryBar from "./CategoryBar";
import Megamenu from "./Megamenu";

const Header = () => {

    const [activeTab, setActiveTab] = useState('')

    const navItems = ["Men", "Women", "Mobile Covers"]

    const handleTabHover = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className="">
            <Navbar bg="white" data-bs-theme="white" className="border-bottom border-dark-subtle position-relative p-0">
                <Container>
                    <Navbar.Brand>
                        <img src="public/vite.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <div className=" d-flex me-auto">
                        {navItems && navItems.map((item, i) =>
                            <Nav className="text-uppercase fs-7" key={i} onMouseEnter={() => handleTabHover(item)} onMouseLeave={() => handleTabHover('')}>
                                <Nav.Link className="text-black p-3 men">{item}</Nav.Link>
                                <Megamenu activeTab={activeTab} />
                            </Nav>)}
                    </div>
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



        </div >
    );
};

export default Header;
