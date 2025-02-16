import React, { useState } from 'react';
import './DeleteAccount.css';

const DeleteAccount = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <div className="container">
            <h1>Delete account</h1>
            <form>
                <div className="form-group">
                    <label for="accountEmail">Email address</label>
                    <input 
                        type="email"
                        className="form-control"
                        id="accountEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className='circle-container'>
                    <div className="circle">OR</div>
                </div>
                <div className="form-group">
                    <label for="accountPhone">Phone number</label>
                    <input
                        type="phone"
                        className="form-control"
                        id="accountPhone"
                        placeholder="Enter phone number"
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={e => {
                    fetch('https://6762d40fecef00f00ed7.appwrite.global/delete_account', {
                        method: 'DELETE',
                        body: {
                            "email": email,
                            "phone": phone
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((response) => {
                        console.log(response);
                    }).catch(err => {
                        console.log(err);
                    });

                    return false;
                }}>Delete</button>
            </form>
        </div>
    );
};

export default DeleteAccount;
