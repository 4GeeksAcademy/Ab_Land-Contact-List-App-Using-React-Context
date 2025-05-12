import React from 'react'
import { Link } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from 'react-router-dom'

export const ContactCard = ({name,phone,email,address,id }) => {

    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer()

    function contactDELETE(someid) {
        fetch(`https://playground.4geeks.com/contact/agendas/${store.slug}/contacts/${someid}`, { method: 'DELETE' })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`${response.status}, ${response.statusText}`)
                }
                dispatch({type:'delete'});
            })
            .catch((error) => {
                alert(error);
            })
    };

      
    return (
        <li className='list-group-item d-flex align-items-center g-4 p-3'>
            <div className='bg-info rounded-circle mx-2 cover' style={{ width: '150px', aspectRatio: '1 / 1 ', overflow: 'hidden', }}>
            <img src={`https://picsum.photos/200/300?random=${id}`}/>


            </div>
            <div className='ms-3 text-secondary'>
                <h3 className='text-black mb-2'>{name} </h3>
                <ul className='list-inline mb-2'>
                    <li className="list-inline-item"><i className="fa-solid fa-location-dot"></i></li>
                    <li className="list-inline-item"> {address} </li>
                </ul>
                <ul className='list-inline mb-2'>
                    <li className="list-inline-item"><i className="fa-solid fa-phone"></i></li>
                    <li className="list-inline-item">  {phone}</li>
                </ul>
                <ul className='list-inline mb-2'>
                    <li className="list-inline-item"><i className="fa-solid fa-envelope"></i></li>
                    <li className="list-inline-item">  {email}</li>
                </ul>

            </div>
            <div className="ms-auto">
                <Link to={`/EditContact/${id}`}>
                    <button
                        className="btn btn-outline-warning border-0 btn "
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>
                </Link>
                <button
                    className="btn btn-outline-danger border-0 btn "
                    onClick={()=>{contactDELETE(id)}}

                >
                    <i className="fa-solid fa-xmark fa-xl"></i>
                </button>
            </div>

        </li>
    )
}
