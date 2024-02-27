import React from 'react'
import { useNavigate } from 'react-router-dom'
import Products from './Img.json'

const Listing = () => {
    const navigate = useNavigate();


    const handleClick = (i) => {
        navigate(`/Productpage/${i}`)
    }

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center">
                {Products && Products.map((product, i) =>
                    <div div className="img" key={i} >
                        {product.male_items && product.male_items.map((x, j) => <img src={x.img} key={j} className='img-fluid cursor-pointer' style={{ width: "226px" }} alt="" onClick={() => handleClick(x.id)} />)}
                        {product.female_items && product.female_items.map((x, k) => <img src={x.img} key={k} className='img-fluid cursor-pointer' style={{ width: "226px" }} alt="" onClick={() => handleClick(x.id)} />)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Listing