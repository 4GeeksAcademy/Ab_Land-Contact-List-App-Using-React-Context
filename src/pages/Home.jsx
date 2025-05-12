import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();

	const userContactPOST = () => {
		fetch(`https://playground.4geeks.com/contact/agendas/${store.slug}`, { method: 'POST' })
			.then((response) => {
				if (!response.ok) {
					throw new Error(`${response.status}, ${response.statusText}, User already exists.`)
				}
				return response.json()
			})
			.then((data) => {
				console.log(data);

				navigate('/Contacts');
			})
			.catch((error) => {
				alert(error);
			})

	};

	return (
		<div className="d-flex-center-vh better-body">
			<div className="text-center mt-5 p-2 rounded bg-opas-home">
				<h1 className="mb-3">Welcome to the Agenda!!</h1>
				<div >
					<button className="btn btn-home mb-3 mx-3" onClick={userContactPOST}> Create New API User </button>

					<Link to='/Contacts'  >
						<button className="btn btn-primary mb-3 mx-3"> To Contacts</button>
					</Link>
				</div>
			</div>
		</div>
	);
}; 