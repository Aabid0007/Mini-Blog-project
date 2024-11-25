import React from 'react'
import BlogSub from './BlogSub/BlogSub'
import PopularPost from './PopularPost/PopularPost'
import BlogTag from './BlogTags/BlogTag'
import "./MainSubSection.css"
const MainSubSection = ({popularBlogs}) => {
  return (
    <>
      <BlogSub />
      <div className='Sub_Main_Section'>
        <div className='Postcard_content'>
          <div className='PopularHeading'><h4>Popular Posts</h4>
          </div>
          <PopularPost popularBlogs={popularBlogs} />
        </div>
      </div>
      <div className='Sub_Main_Section'>
        <div className='Tag_Card'>
          <div className='Tag_heading'><h4>Tags</h4></div>
          <BlogTag />
        </div>
      </div>
    </>
  )
}

export default MainSubSection