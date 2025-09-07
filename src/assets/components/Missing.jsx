import React from 'react'

const Missing = () => {
  return (
    <main className="error">
  <h1>
    404 - Page Not Found
  </h1>
  <p className="">Sorry, the page you are looking for does not exist.</p>
  <Link to="/">
    Go Home
  </Link>
</main>

  )
}

export default Missing
