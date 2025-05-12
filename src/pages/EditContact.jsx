import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const EditContact = () => {


    const { contactId } = useParams()

    const { store, dispatch } = useGlobalReducer()

    const contactEdit = store.contacts.find((contact) => contact.id == contactId)
    console.log(contactEdit);



    return (
        <div className="better-body">
            <div className='container  pt-4 bg-opas' >
                <h1 className='mb-2 text-center'>Edit Contact {contactId}</h1>
                <ContactForm key={contactId}
                    name={contactEdit.name}
                    phone={contactEdit.phone}
                    email={contactEdit.email}
                    address={contactEdit.address}
                    id={contactId} />

                <Link to='/Contacts'>
                    <span>Or go back to contacts</span>
                </Link>
            </div>
        </div>
    )
}
