import React from 'react'
import Post from './post'

const Feed = ({posts}) => {
  return (
    <>
        <section>
  {posts.map(post => (
    <Post key={post.id} post={post} />
  ))}
</section>


    </>
  )
}

export default Feed
