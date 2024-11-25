import React from 'react'
import "./BlogTag.css"
const BlogTag = () => {
  const Tags = [
    { id: 1, tag: "Travel" },
    { id: 2, tag: "New York" },
    { id: 3, tag: "London" },
    { id: 4, tag: "IKEA" },
    { id: 5, tag: "Norway" },
    { id: 6, tag: "DIY" },
    { id: 7, tag: "Ideas" },
    { id: 8, tag: "Baby" },
    { id: 9, tag: "Family" },
    { id: 10, tag: "News" },
    { id: 11, tag: "Shopping" },
    { id: 12, tag: "Sports" },
    { id: 13, tag: "Games" },
  ]

  return (

    <div className='Tags'>
      {Tags.map((value) => (
        <div className={value.id === 1 ? 'blackBox' : 'tagName'} key={value.id}>
          <span className={value.id === 1 ? 'blackbox' : 'tagName'}>{value.tag}</span>
        </div>
      ))}
    </div>
  )
}

export default BlogTag