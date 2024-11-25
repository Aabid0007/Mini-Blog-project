import React from 'react'
import "./PopularPost.css"
const PopularPost = ({popularBlogs}) => {
    
    return (
        <>
            {popularBlogs.map((value) => (
                <div className='PostCard' key={value._id}>
                    <img src={value.image} alt='preview' />
                    <div className='PostCard_details'><h4>{value.heading}</h4>
                        <span>{value.description.slice(0, 15)}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PopularPost