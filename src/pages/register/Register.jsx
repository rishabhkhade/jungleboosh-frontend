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
                </div>
            </div>
        </>
    )
}

export default Register
