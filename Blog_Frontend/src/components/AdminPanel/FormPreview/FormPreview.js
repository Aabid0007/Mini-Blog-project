import React, { useState } from 'react'
import './FormPreview.css'
const FormPreview = ({ formData = {} }) => {
  const { image ,heading , title, description } = formData;
  const [showFullDescription, setshowFullDescription] = useState(false);

  const shortDescription = description ? description.slice(0, 250) :'';
  const displayedDescription = showFullDescription ? description : shortDescription;
  const buttonText = showFullDescription ? "READ LESS «" : "READ MORE »";

  const toggleDescription = () => {
    setshowFullDescription(!showFullDescription)
  }
  return ( 
    <div className='PreviewSection'>
      <div className='PreviewContent'>
        <>
          <img className='Blog_image' src={image} alt="Preview Img" />
        </>
        <div className='Blog_contant'>
          <h3 id='PostTitle'>{ heading|| "Post Title"}</h3>
          <h5 id='PostSubtitle'>{title || "Post SubTitle"}</h5>
        </div>
        <div className='Preview_content'>
          <p id='Postdescription'>{displayedDescription || " Post Description..."}</p>
          {description && description.length > 250 && (
            <button className='read_btn' onClick={toggleDescription}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default FormPreview

