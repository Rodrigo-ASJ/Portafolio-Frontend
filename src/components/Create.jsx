import { Description } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const url = 'http://localhost:8001/api/portafolios'

const Create = () => {

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [github, setGithub] = useState('');
    const [deployment, setDeployment] = useState('');
    
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, {
            project_title : title, 
            project_img : img,
            project_description : description,
            project_tech : tech,
            project_github : github,
            project_deployment : deployment,
        })
       navigate('/')
    }

  return (
    <div>
        <h3>Create</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'> Title </label>
                <input 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Image </label>
                <input 
                value={img} 
                onChange={(e)=> setImg(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Description </label>
                <input 
                value={description} 
                onChange={(e)=> setDescription(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Techs </label>
                <input 
                value={tech} 
                onChange={(e)=> setTech(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> github </label>
                <input 
                value={github} 
                onChange={(e)=> setGithub(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> deployment </label>
                <input 
                value={deployment} 
                onChange={(e)=> setDeployment(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Store</button>
        </form>
    </div>
  )
}

export default Create;
