import React from 'react'
import { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from 'react-router-dom'

export const ContactForm = ({ name = '', phone = '', email = '', address = '', id = '' }) => {

    console.log(address);


    const [contactName, setName] = useState(name);
    const [contactPhone, setPhone] = useState(phone);
    const [contactEmail, setEmail] = useState(email);
    const [contactAddress, setAddress] = useState(address);

    console.log(contactAddress);


    const { store, dispatch } = useGlobalReducer()

    const navigate = useNavigate();

    function contactPOST(obj) {
        fetch(`https://playground.4geeks.com/contact/agendas/${store.slug}/contacts`,
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: { "Content-Type": "application/json" }
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`${response.status}, ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                navigate('/Contacts');
            })
            .catch((error) => {
                console.error(error);
            })
    };

    function contactPUT(obj, someId) {
        fetch(`https://playground.4geeks.com/contact/agendas/${store.slug}/contacts/${someId}`,
            {
                method: 'PUT',
                body: JSON.stringify(obj),
                headers: { "Content-Type": "application/json" }
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`${response.status}, ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                navigate('/Contacts');
            })
            .catch((error) => {
                console.error(error);
            })
    };

    const objToSend = {
        name: contactName.trim(),
        phone: contactPhone.trim(),
        email: contactEmail.trim(),
        address: contactAddress.trim()
    };

    let handleSave = (id) => {
        if (id === '') { contactPOST(objToSend) }
        else { contactPUT(objToSend, id) }
    };

    return (
        <form className='card p-3'>

            <div className="mb-3">
                <label className="form-label ms-1">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder='Full Name'
                    onChange={(e) => setName(e.target.value)} value={contactName} />
            </div>

            <div className="mb-3">
                <label className="form-label ms-1">Email</label>
                <input type="Email" className="form-control" id="email" placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} value={contactEmail} />
            </div>

            <div className="mb-3">
                <label className="form-label ms-1">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder='Phone'
                    onChange={(e) => setPhone(e.target.value)} value={contactPhone} />
            </div>

            <div className="mb-3">
                <label className="form-label ms-1">Address</label>
                <input type="text" className="form-control" id="address" placeholder='Address'
                    onChange={(e) => setAddress(e.target.value)} value={contactAddress} />
            </div>

            <button className='btn btn-primary col-12 mt-2 mb-1' onClick={(e) => {e.preventDefault(); handleSave(id); }}> Save Contact</button>

        </form>
    )
}
