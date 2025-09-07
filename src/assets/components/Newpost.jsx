import React, { useContext } from 'react'
import DataContext from '../../../hooks/datacontext'

const Newpost = () => {
  const {posttitle, setposttitle, postbody, setpostbody, handleSubmit}=useContext(DataContext)
  return (
    <>
     <main className="Newpost">
  <h2 > New Post</h2>
  <form className="newPostForm" onSubmit={handleSubmit}>
    
    <input
      type="text"
      placeholder="Enter post title..."
      
      value={posttitle}
      onChange={(e) => setposttitle(e.target.value)}
    />

    <textarea
      placeholder="Write your post..."
      rows="6"
     
      value={postbody}
      onChange={(e) => setpostbody(e.target.value)}
    />

    <button type="submit" 
     >
      Submit
    </button>
  </form>
</main>

    </>
  )
}

export default Newpost
