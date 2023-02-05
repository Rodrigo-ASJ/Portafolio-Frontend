import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'https://portafolio-backend.up.railway.app/api'

const ShowElement = () => {

    const imgUrl = 'https://portafolio-backend.up.railway.app/api/storage/'
    const [elementos, setElementos] = useState([]);

    useEffect( () => {
        getAllElements();
    }, [])

    const getAllElements = async () => {
        const response = await axios.get(`${url}/portafolios`);
        setElementos(response.data);
    }

    const deleteElement = async (id) => {
        await axios.delete(`${url}/portafolios/${id}`);
        getAllElements();
    }

  return (
    <box>
        <Link to="/create" className='btn btn-success btn-lg '> Create </Link>

        <table>
            <thead>
                <tr>
                    <th>Project</th>
                    <th>email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    elementos.map( (elemento) => (
                        <tr key={elemento.id}>
                            <td>{elemento.project_title}</td>
                            <td>{elemento.project_img}</td>
                            <td>
                                <Link to={`/edit/${elemento.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteElement(elemento.id)} className="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    </box>
  )
}

export default ShowElement;