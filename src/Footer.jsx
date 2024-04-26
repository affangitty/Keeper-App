import React from 'react'

const Footer = () => {
  const a=new Date();
    return (
    <div className='Footer'>
     <p>Copyright ⓒ {a.getFullYear()}</p> 
    </div>
  )
}

export default Footer
