import React from 'react'
import Listing from './Listing'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import Products from './Img.json'

const Categories = () => {

    const category = useParams()
    console.log(category.type);

    return (
        <div>
            <Header />
            <div className="d-flex flex-wrap ">
                {Products && Products.map((product, i) =>
                    <div div className="img" key={i}>
                        {category.type == "male_items" ? product.male_items && product.male_items.map((x, j) => <img src={x.img} key={j} className='img-fluid cursor-pointer' style={{ width: "226px" }} alt="" />) :
                            product.female_items && product.female_items.map((x, k) => <img src={x.img} key={k} className='img-fluid cursor-pointer' style={{ width: "226px" }} alt="" />)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories