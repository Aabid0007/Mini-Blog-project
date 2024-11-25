import React from 'react'
import "./BlogSub.css"
const BlogSub = () => {
    const Subpost = [
        { id: 1, image: "https://www.w3schools.com/w3images/avatar_g.jpg", heading: "My Name", description: "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you." },
    ]
    return (
        <>
            {Subpost.map((value) => (
                <div className='Sub_Main_Section' key={value.id}>
                    <div className='sub_card' >
                        <img className='subCardImage' src={value.image} alt="" />
                        <div className='Blog_sub_contant'>
                            <h4>{value.heading}</h4>
                            <p>{value.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogSub