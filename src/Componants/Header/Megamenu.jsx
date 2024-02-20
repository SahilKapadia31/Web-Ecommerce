import React from 'react'
import data from './Data.json'
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import "./Header.css";


const Megamenu = ({ activeTab }) => {
    return (
        <div>
            {activeTab &&
                (<div className="">
                    {activeTab === 'Men' &&
                        <Container className="mega-menu-men position-absolute top-100">
                            <div className="p-5 border border-dark-subtle bg-white">
                                <div className="dropDownMenu fs-7">
                                    <div className="row">
                                        <div className="col-sm-7 border-end border-dark-subtle">
                                            {data && data.map((x, i) =>
                                                <div className="row g-3">
                                                    <div className="d-flex flex-wrap justify-content-end ps-0 row-gap-4 text-capitalize" key={i}>
                                                        {x.items && x.category == "MEN" && x.items.map((item, j) =>
                                                            <div className="col-sm-4" key={j}>
                                                                <a className="nav-link text-secondary-emphasis fw-semibold mb-2 fs-14px">
                                                                    {item.name}
                                                                </a>
                                                                {item.types && item.types.map((type, k) =>
                                                                    <a className="nav-link py-1 text-secondary fs-7" key={k}>
                                                                        {type}
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
                    }
                    {activeTab === 'Women' &&
                        <Container className="mega-menu-women position-absolute top-100">
                            <div className="p-5 border border-dark-subtle bg-white">
                                <div className="dropDownMenu fs-7">
                                    <div className="row">
                                        <div className="col-sm-7 border-end border-dark-subtle">
                                            {data && data.map((x, i) =>
                                                <div className="row g-3">
                                                    <div className="d-flex flex-wrap justify-content-end ps-0 row-gap-4 text-capitalize" key={i}>
                                                        {x.items && x.category == "WOMEN" && x.items.map((item, j) =>
                                                            <div className="col-sm-4" key={j}>
                                                                <a className="nav-link text-secondary-emphasis fw-semibold mb-2 fs-14px">
                                                                    {item.name}
                                                                </a>
                                                                {item.types && item.types.map((type, k) =>
                                                                    <a className="nav-link py-1 text-secondary fs-7" key={k}>
                                                                        {type}
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
                    }
                    {activeTab === 'Mobile Covers' &&
                        <Container className="mega-menu position-absolute top-100">
                            <div className="p-5 border border-dark-subtle bg-white">
                                <div className="dropDownMenu fs-7">
                                    <div className="row">
                                        <div className="col-sm-7 border-end border-dark-subtle">
                                            {data && data.map((x, i) =>
                                                <div className="row g-3">
                                                    <div className="col-sm-12 text-secondary fw-semibold text-opacity-50" >
                                                        {x.category == 'Popular' ? x.category : ""}
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
                    }
                </div>)
            }
        </div >
    )
}

export default Megamenu