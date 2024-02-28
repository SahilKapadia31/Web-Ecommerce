import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Products from '../../assets/Products.json'

const Shop = () => {
    const [category] = Products

    const [prod, setProd] = useState(Products)
    const [filterProd, setFilterProd] = useState('')
    const [filterArr, setFilterArr] = useState(Products)


    useEffect(() => {
        if (filterProd) {
            setFilterArr(prod.filter((x) => x.category == filterProd))
        }
    }, [filterProd])

    const handleclick = (e) => {

        let toFilter = e.target.innerText.toLowerCase()
        setFilterProd(toFilter)
    }



    return (
        <>
            <Header />
            <div className='container'>
                <nav className=' py-3'>
                    <ol class="breadcrumb fs-7">
                        <li class="breadcrumb-item"><Link to={'/'} className=' text-decoration-none text-dark'>Home</Link ></li>
                        <li class="breadcrumb-item active">New Arrivals</li>
                    </ol>
                </nav>
                <div className="row mt-4 fs-7">
                    <div className="col-12">
                        <h3 className='fw-semibold'>New Arrivals </h3>
                    </div>
                    <div className="col-4 p-3">
                        <div className="mt-3 fs-7 text-uppercase text-secondary fw-semibold">Filters</div>
                        <div className="mt-3">
                            <span className='fw-medium'>Gender</span>
                            <ul className='navbar-nav gap'>
                                <li className='cursor-pointer text-secondary py-2 ps-3 fw-medium' onClick={handleclick}>Men</li>
                                <li className='cursor-pointer text-secondary ps-3 fw-medium' onClick={handleclick}>Women</li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            <span className='fw-medium'>Category</span>
                            <ul className='navbar-nav gap'>
                                <li className='cursor-pointer text-secondary py-2 ps-3 fw-medium' onClick={handleclick}>Shirt</li>
                                <li className='cursor-pointer text-secondary ps-3 fw-medium' onClick={handleclick}>Jeans</li>
                                <li className='cursor-pointer text-secondary py-2 ps-3 fw-medium' onClick={handleclick}>T-Shirt</li>
                                <li className='cursor-pointer text-secondary ps-3 fw-medium' onClick={handleclick}>Co-Ordinates</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row row-gap-4">
                            {filterArr && filterArr.map(prodcut => (
                                prodcut.category == filterProd ?
                                    prodcut.items.map(item => (
                                        <div className="col-4">
                                            <img key={item.img} className='img-fluid' src={item.img} alt={item.img} />
                                        </div>
                                    )) :
                                    prodcut.items.map(item => (
                                        <div className="col-4">
                                            <img key={item.img} className='img-fluid' src={item.img} alt={item.img} />
                                        </div>
                                    ))
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop