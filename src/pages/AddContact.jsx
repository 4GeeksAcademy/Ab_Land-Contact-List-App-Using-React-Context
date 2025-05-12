import React from 'react'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'



export const AddContact = () => {

    return (
        <div className="better-body">
            <div className='container  pt-4 bg-opas'>
                <h1 className='mb-2 text-center'>Add New Contact</h1>
                <ContactForm />

                <Link to='/Contacts'>
                    <span>Or go back to contacts</span>
                </Link>
            </div>
        </div>
    )
}
