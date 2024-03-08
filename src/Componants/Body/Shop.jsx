import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Products from '../../assets/Products.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from 'axios';

const Shop = () => {

    const [prod, setProd] = useState(Products)
    const [filterProd, setFilterProd] = useState([])
    const [productList, setProductList] = useState([]);

    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    let altImge = 'https://images.bewakoof.com/t640/men-s-green-watching-you-change-colours-graphic-printed-oversized-t-shirt-592039-1700550347-1.jpg'

    const useProduct = async () => {
        try {
            const response = await axios.get("http://192.168.1.8:3003/api/getproduct");
            setProductList(response.data);
            setFilterProd(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getCategory = async () => {
        try {
            const response = await axios.get("http://192.168.1.8:3003/api/getcategory");
            setCategory(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const getSubCategory = async () => {
        try {
            const response = await axios.get("http://192.168.1.8:3003/api/getsubcategory");
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

    const handleClick = (item) => {
        if (item.category !== undefined) {
            if (selectedCheckboxes.includes(item.category)) {
                let filters = selectedCheckboxes.filter((x) => x !== item.category);
                setSelectedCheckboxes(filters)
            } else {
                setSelectedCheckboxes([...selectedCheckboxes, item.category])
            }
        }
        else {
            setFilterProd([...productList]);
        }
    }

    useEffect(() => {
        filterItems();
    }, [selectedCheckboxes]);

    const filterItems = () => {
        if (selectedCheckboxes.length > 0) {
            let tempItems = selectedCheckboxes.map((selectedCategory) => {
                let temp = productList.filter((x) => x.categoryID.category == selectedCategory);
                return temp;
            });
            setFilterProd(tempItems.flat());
        } else {
            setFilterProd([...productList]);
        }
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
                    <div className="col-3 p-3">
                        <div className="mt-3 fs-7 text-uppercase text-secondary fw-semibold">Filters</div>
                        <div className="mt-3">
                            <span className='fw-medium'>Gender</span>
                            <ul className='navbar-nav gap-1 pt-2'>
                                {category && category.map((x, i) => (
                                    <li className=' text-secondary ps-2 fw-medium' key={x._id} >
                                        <div className="form-check ">
                                            <input className="form-check-input border-secondary-subtle cursor-pointer" type="checkbox" value='' id="flexCheck" onClick={(e) => handleClick(x)} />
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
                    <div className="col-9">
                        <div className="row row-gap-4">
                            {filterProd && filterProd.map((x) => (
                                <div className="col-4" key={x._id}>
                                    <div class="card shadow border-0" >
                                        <img src={x.productImageURL} alt={x.productImageURL} class="card-img-top img-fluid" style={{ height: '250px' }} />
                                        <div class="card-body" >
                                            <h5 class="card-title">{x.productTitle}</h5>
                                            <p class="card-text text-truncate">{x.productDes}</p>
                                            <p class="card-text"><small class="text-body-secondary fw-semibold ">{x.categoryID.category}</small></p>
                                            <p className=' fw-bold '>₹ {x.productPrice}</p>
                                            <a class="btn btn-sm btn-outline-secondary fw-semibold rounded-0">Add to Cart</a>
                                        </div>
                                    </div>
                                    {/* <Card className='h-100 shadow '>
                                        <CardMedia
                                            component="img"
                                            alt={altImge}
                                            height="200"
                                            image={x.productImageURL || altImge}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {x.productTitle}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {x.productDes}
                                            </Typography>
                                            <Typography className='mt-3 fw-semibold' variant="body2" color="text.secondary">
                                                ₹ {x.productPrice}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Add To Cart</Button>
                                        </CardActions>
                                    </Card> */}
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