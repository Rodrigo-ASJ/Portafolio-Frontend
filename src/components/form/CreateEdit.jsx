import React from 'react'

const CreateEdit = () => {
  return (
    <>
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
    </>
  )
}

export default CreateEdit