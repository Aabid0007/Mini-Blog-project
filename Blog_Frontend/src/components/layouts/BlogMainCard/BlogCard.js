import React, { useState } from 'react';
import "./BlogCard.css";
import ReactTimeAgo from 'react-time-ago';

const BlogCard = ({ blogs }) => {
  const [showFullDescription, setshowFullDescription] = useState({});

  const toggleDescription = (id) => {
    setshowFullDescription((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  
  return (
    <div>
      {blogs.map((blog) => (
        <div className='Blog_section' key={blog._id}>
          <div className='Blog_card'>
            <>
              <img className='Blog_image' src={blog.image} alt='' />
            </>
            <div className='Blog_contant'>
              <h3>{blog.heading}</h3>
              <h5>
                {blog.title}, <span className='date'><ReactTimeAgo date={new Date(blog.createdAt)}  locale="en-US" /></span>
              </h5>
            </div>
            <div className='Blog_contant'>
              <p>
                {showFullDescription[blog._id]
                  ? blog.description
                  : blog.description.length > 100
                    ? blog.description.slice(0, 150) + '...'
                    : blog.description}
              </p>
              <div className='Blog_details'>
                {blog.description.length > 250 && (
                  <button
                    className='read_btn'
                    onClick={() => toggleDescription(blog._id)}>
                    {showFullDescription[blog._id] ? (
                      <>
                        READ LESS
                        <span className='material-symbols-outlined'>
                          keyboard_double_arrow_left
                        </span>
                      </>
                    ) : (
                      <>
                        READ MORE
                        <span className='material-symbols-outlined'>
                          keyboard_double_arrow_right
                        </span>
                      </>
                    )}
                  </button>
                )}
                <span className='comment_box'>
                  Comments <span className='num_comments'>0</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;