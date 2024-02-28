import React from 'react'
import Categories from '../Body/Categories'
import { Link } from 'react-router-dom'

const CategoryBar = () => {

    const handleClick = (Category) => {

    }

    return (
        <div className="container-xxl bg-white">
            <div className='px-4 py-2'>
                <nav className="nav text-uppercase justify-content-between">
                    <Link to={'/shop'} className="nav-link text-black cursor-pointer">Shop Now</Link>
                    <Link to={'/categories/male_items'} className="nav-link text-black cursor-pointer">Men</Link>
                    <Link to={'/categories/female_items'} className="nav-link text-black cursor-pointer">Women</Link>
                    <a className="nav-link text-black cursor-pointer">Accessories</a>
                    <a className="nav-link text-black cursor-pointer">Heavy Duty</a>
                    <a className="nav-link text-black cursor-pointer">Bewakoof Air</a>
                    <a className="nav-link text-black cursor-pointer">Official Merch</a>
                    <a className="nav-link text-black cursor-pointer">Plus Size</a>
                </nav>
            </div>
        </div>


    )
}

export default CategoryBar