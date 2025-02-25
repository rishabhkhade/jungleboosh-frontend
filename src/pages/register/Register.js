import React from 'react'
import './Register.scss'

function Register() {
    return (
        <>
            <div className="parent register-parent">
                <div className="container register-container">
                    {/* personal details */}
                    <div className="steps">Steps</div>
                    <form className='personal-form'>
                        <label>
                            <p>First Name</p>
                            <input type="text" placeholder='username' />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input type="text" placeholder='username' />
                        </label>
                        <label>
                            <p>Email</p>
                            <input type="text" placeholder='username' />
                        </label>
                        <label>
                            <p>Contact</p>
                            <input type="text" placeholder='username' />
                        </label>
                    </form>


                    {/* Business Details */}

                    <label htmlFor="">
                        <p>Business name</p>
                        <input type="text" placeholder='Business name' />
                    </label>

                    <label>
                        <p>Product unit</p>
                        <select  >
                            <option value="">select unit</option>

                            <option>
                                Abc
                            </option>

                        </select>

                    </label>


                </div>
            </div>
        </>
    )
}

export default Register
