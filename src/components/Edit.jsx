import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const url = 'http://localhost:8001/api/portafolios/'


const Edit = () => {

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [github, setGithub] = useState('');
    const [deployment, setDeployment] = useState('');

    const navigate = useNavigate();
    const {id} = useParams()

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, {
        project_title : title, 
        project_img : img,
        project_description : description,
        project_tech : tech,
        project_github : github,
        project_deployment : deployment,
    } )
    navigate('/')
  }

  useEffect( () => {
    const getElementsById = async () => {
      const response = await axios.get(`${url}${id}`)
      setTitle(response.data.project_title);
      setImg(response.data.project_img);
      setDescription(response.data.project_description);
      setTech(response.data.project_tech);
      setGithub(response.data.project_github);
      setDeployment(response.data.project_deployment);
    }
    getElementsById();
  }, []) 

  return (
    <div>
              <h3>Edit</h3>
        <form onSubmit={update}>
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
            <button type="submit" className='btn btn-success'>Edit</button>
        </form>
    </div>
  )
}

export default Edit;