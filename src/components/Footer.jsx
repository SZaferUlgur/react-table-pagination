import React from 'react'

const Footer = () => {
  const mevcutYil = new Date().getFullYear()

  return (
    <footer className='container'>
<hr />
<div className='text-center py-3'>
    <p>Table Filter and Pagination Tutorial &copy; {mevcutYil}</p>
</div>
    </footer>
  )
} 

export default Footer