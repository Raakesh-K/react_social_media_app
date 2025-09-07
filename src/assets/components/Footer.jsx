import React from 'react'

const Footer = () => {
  const today=new Date()
  return (
    <footer className="Footer">
  <p>©{today.getFullYear()} Social Media App. All rights reserved.</p>
</footer>

  )
}

export default Footer
