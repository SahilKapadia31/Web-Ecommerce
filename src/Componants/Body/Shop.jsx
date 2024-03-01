import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Products from '../../assets/Products.json'

import axios from 'axios';

const Shop = () => {
    // const [category] = Products

    const [prod, setProd] = useState(Products)
    const [filterProd, setFilterProd] = useState('')
    const [filterArr, setFilterArr] = useState(Products)
    const [productList, setproductList] = useState([]);

    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])

    const [x, y] = useState([])


    const useProduct = async () => {
        try {
            const response = await axios.get("http://192.168.1.12:3003/api/getproduct");
            setproductList(response.data);
            // console.log(subcategoryData)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getCategory = async () => {
        try {
            const response = await axios.get("http://192.168.1.12:3003/api/getcategory");
            setCategory(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const getSubCategory = async () => {
        try {
            const response = await axios.get("http://192.168.1.12:3003/api/getsubcategory");
            setSubCategory(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getSubCategory();
        getCategory()
        useProduct();
        var c_list = category.map(x => ({ ...x, isSelected: false }))
        var cs_list = subCategory.map(x => ({ ...x, isSelected: false }))
        setCategory(c_list)
        setSubCategory(cs_list)
    }, [])

    // useEffect(() => {
    //     if (filterProd) {
    //         const Items = prod.map(x => x.items.reduce((acc, item) => {
    //             if (item.gender === filterProd) {
    //                 acc.push(item);
    //             }
    //             return acc;
    //         }, []));

    //         const flattenedItems = Items.flat();
    //         console.log(flattenedItems);

    //         let abc = prod.filter((x) => x.category == filterProd)
    //         console.log(abc);
    //         setFilterArr(prod.filter((x) => x.category == filterProd) || flattenedItems)
    //     }

    // }, [filterProd])

    const handleClick = (e, item, i) => {

        let toFilter = e.target.value
        console.log(item);
        let abc = category.map((x) => x.isSelected == item.isSelected ? !x.isSelected : x.isSelected)
        // setCategory(abc)

        setFilterProd(toFilter)
    }

    const handleProduct = (i) => {
        navigate(`/Productpage/${i}`)
    }


    return (
        <>
            <Header />
            <div className='container'>
                <nav className=' py-3'>
                    <ol className="breadcrumb fs-7">
                        <li className="breadcrumb-item"><Link to={'/'} className=' text-decoration-none text-dark'>Home</Link ></li>
                        <li className="breadcrumb-item active">New Arrivals</li>
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
                            <ul className='navbar-nav gap-1 pt-2'>
                                {category && category.map((x, i) => (
                                    <li className=' text-secondary ps-2 fw-medium' key={x._id} >
                                        <div className="form-check ">
                                            <input className="form-check-input border-secondary-subtle cursor-pointer" type="checkbox" value='' id="flexCheck" onClick={(e) => handleClick(e, x, i)} />
                                            <label className="form-check-label cursor-pointer" htmlFor="flexCheck">
                                                {x.category}
                                            </label>
                                        </div>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="mt-3">
                            <span className='fw-medium'>Category</span>
                            <ul className='navbar-nav gap-1 pt-2'>
                                {subCategory && subCategory.map((x, i) => (
                                    <li className='cursor-pointer text-secondary ps-2 fw-medium' key={x._id} >
                                        <div className="form-check">
                                            <input className="form-check-input border-secondary-subtle" type="checkbox" value='' id="flexCheck" onClick={(e) => handleClick(e, x, i)} />
                                            <label className="form-check-label" htmlFor="flexCheck">
                                                {x.subcategory}
                                            </label>
                                        </div>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row row-gap-4">
                            {/* {filterArr && filterArr.map(prodcut => (
                                prodcut.category == filterProd ?
                                    prodcut.items.map(item => (
                                        <div className="col-4" key={item.img}>
                                            <img className='img-fluid cursor-pointer' src={item.img} alt={item.img} onClick={() => handleProduct(item)} />
                                        </div>
                                    )) :
                                    prodcut.items.map(item => (
                                        <div className="col-4" key={item.img}>
                                            <img className='img-fluid cursor-pointer' src={item.img} alt={item.img} onClick={() => handleProduct(item)} />
                                        </div>
                                    ))
                            )
                            )} */}

                            {productList && productList.map((x) => (
                                <div className="col-4" key={x._id}>
                                    <div className="h-100 shadow rounded p-3">
                                        <div className="h-50">
                                            <img className='img-fluid rounded cursor-pointer h-100 w-100'
                                                src={x.productImageURL} alt={x.productImageURL} />
                                        </div>
                                        <div className="h-50">
                                            <h5>{x.productTitle}</h5>
                                            <p>{x.productDes} </p>
                                            <p className=' fw-bold '>₹ {x.productPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Shop