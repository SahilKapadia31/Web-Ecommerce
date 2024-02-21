import React, { useState } from 'react'
import './login.css'
import Header from '../Header/Header'

const Login = () => {

    const [display, setDisplay] = useState(true)
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('Users')) || [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            setUsers([...users, input])
            localStorage.setItem('Users', JSON.stringify([...users, input]))
            setInput({ username: '', email: '', password: '', confirmPassword: '' })
        }
    }
    const handleLogin = (e) => {
        e.preventDefault()
        if (validateForm()) {
            alert(hhhgh)
            // setUsers([...users, input])
            // localStorage.setItem('Users', JSON.stringify([...users, input]))
            // setInput({ username: '', email: '', password: '', confirmPass: '' })
        }
    }

    const validateForm = () => {
        let newErrors = {};

        if (!input.email) {
            newErrors.email = 'Email is required';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!input.password) {
            newErrors.password = 'Password is required';
        }
        else if (input.password.length < 6) {
            newErrors.password = 'Password should be at least 6 characters long.';
        }

        if (!display && input.username === '') {
            newErrors.username = 'Username is required';
        }
        if (!display && input.password != input.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }


    return (
        <div>
            <Header />
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="d-none d-sm-flex flex-column align-items-center col-md-4 col-lg-6 bg-image p-4">
                        <h2 className='fw-bold mt-5' style={{ fontSize: '30px' }}>Welcome to the world of Bewakoof
                            <span className='tradeMark'>®</span>!
                        </h2>
                        <div className="mt-5">
                            <img src="public/group.webp" className="" style={{ width: "560px", height: "360px" }} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        {display &&
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center mx-auto">
                                            <h4 className="login-heading fw-bold mb-4">Log in / Sign up</h4>
                                            <p className=' text-secondary text-opacity-75 fw-semibold' style={{ fontSize: "18px" }}>
                                                for Latest trends, exciting offers and everything Bewakoof
                                                <span className='tradeMark'>®</span>!
                                            </p>
                                            <div className="col-7 mt-5 pt-4 mx-auto ">
                                                <form onSubmit={handleLogin}>
                                                    <div className="form-floating mb-3">
                                                        <input type="email" name='email' className="form-control border-dark-subtle" id="floatingInputlogin" placeholder="name@example.com" onChange={handleChange} />
                                                        <label htmlFor="floatingInputlogin" className='text-secondary fw-bold'>Enter Email address</label>
                                                        <p className='text-danger text-start'>{errors.email}</p>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="password" name='password' className="form-control border-dark-subtle" id="floatingLoginPassword" placeholder="Password" onChange={handleChange} />
                                                        <label htmlFor="floatingLoginPassword" className='text-secondary fw-bold'> Password</label>
                                                        <p className='text-danger text-start'>{errors.password}</p>
                                                    </div>
                                                    <div className="">
                                                        <button className="btn d-flex align-items-center justify-content-center btn-login text-uppercase fw-medium" type="submit">Continue</button>
                                                    </div>
                                                    <div className="mt-3 fw-medium">
                                                        Don't have an account?
                                                        <span className='text-primary text-decoration-underline' style={{ cursor: "pointer" }} onClick={() => setDisplay(false)}>Sign Up</span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {!display &&
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center mx-auto">
                                            <h4 className="login-heading fw-bold mb-4">Sign up</h4>
                                            <div className="col-7 mt-5 mx-auto ">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" name='username' className="form-control border-dark-subtle" id="floatingInputname" placeholder="Username" onChange={handleChange} />
                                                        <label htmlFor="floatingInputname" className='text-secondary fw-bold'>Username</label>
                                                        <p className='text-danger text-start'>{errors.username}</p>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="email" name='email' className="form-control border-dark-subtle" id="floatingInputemail" placeholder="name@example.com" onChange={handleChange} />
                                                        <label htmlFor="floatingInputemail" className='text-secondary fw-bold'>Email address</label>
                                                        <p className='text-danger text-start'>{errors.email}</p>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="password" name='password' className="form-control border-dark-subtle" id="floatingPassword" placeholder="Password" onChange={handleChange} />
                                                        <label htmlFor="floatingPassword" className='text-secondary fw-bold'> Password</label>
                                                        <p className='text-danger text-start'>{errors.password}</p>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="password" name='confirmPassword' className="form-control border-dark-subtle" id="floatingConfPassword" placeholder="Confirm-password" onChange={handleChange} />
                                                        <label htmlFor="floatingConfPassword" className='text-secondary fw-bold'>Confirm Password</label>
                                                        <p className='text-danger text-start'>{errors.confirmPassword}</p>
                                                    </div>
                                                    <div className="">
                                                        <button className="btn d-flex align-items-center justify-content-center btn-login text-uppercase fw-medium" type="submit">Sign Up</button>
                                                    </div>
                                                    <div className="mt-3 fw-medium">
                                                        Already have an account?
                                                        <span className='text-primary text-decoration-underline' style={{ cursor: "pointer" }} onClick={() => setDisplay(true)}>Login</span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login