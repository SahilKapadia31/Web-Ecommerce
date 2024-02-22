import React from 'react'
import { useNavigate } from 'react-router-dom'
import Products from './Img.json'

const Listing = () => {

    const navigate = useNavigate()

    const handleClick = (i) => {
        navigate(`/Productpage/${i}`)
    }

    return (
        <div>
            <div className="d-flex flex-wrap ">
                {Products && Products.map((product, i) =>
                    <div div className="img" key={i} onClick={() => handleClick(i)}>
                        <img src={product.img} className='img-fluid cursor-pointer' style={{ width: "226px" }} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Listing