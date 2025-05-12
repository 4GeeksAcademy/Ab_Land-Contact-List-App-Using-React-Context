import React from 'react'
import { Link } from 'react-router-dom'
import { ContactCard } from '../components/ContactCard'
import { useEffect } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


const Contacts = () => {
  const { store, dispatch } = useGlobalReducer()

  useEffect(() => {
    contactListGET()

  }, [store.delete]);

  function contactListGET() {
    fetch(`https://playground.4geeks.com/contact/agendas/${store.slug}`)
      .then((response) => {
        if (!response.ok) { throw new Error(`${response.status}, ${response.statusText}`) }
        return response.json()
      })
      .then((data) => {
        console.log(data.contacts);

        dispatch({
          type: 'load-contacts',
          payload: data.contacts
        })
      })
      .catch((error) => {
        console.error(error);
      })
  };


  return (
    <div className="better-body">
      <div className='container pt-4 bg-opas '>
        <h1 className='text-center'>Contacts List</h1>
        <div className='d-flex align-items-center mb-4 '>

          <Link to="/">
            <button className='btn btn-primary'>Back Home</button>
          </Link>
          <Link to='/AddContact' className='ms-auto'>
            <button className='btn btn-success '>Add New Contact</button>
          </Link>
        </div>

        <ul className="list-group w-100 align-center ">

          {store.contacts.map(({ name, phone, email, address, id }) => {
            return (
              <ContactCard
                key={id}
                name={name}
                phone={phone}
                email={email}
                address={address}
                id={id}

              />
            );
          })}
        </ul>
      </div>
    </div>
  )
}
export default Contacts