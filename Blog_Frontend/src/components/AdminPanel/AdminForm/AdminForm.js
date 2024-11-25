import React from 'react';
import './AdminForm.css';
import FormPreview from '../FormPreview/FormPreview';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AdminForm = () => {
  const { register, handleSubmit, setValue ,watch, formState} = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    axios
      .post('http://localhost:3001/api/blogs', data)
      .then((response) => {
        console.log('Successfully Added:', response.data);
        toast.success('Blog created successfully!');
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        toast.error('Error creating blog. Please try again.');
      });
  };

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const formData = watch();

  return (
    <div className="AdminForm">
      <div className="FormSection">
        <div className="heading">
          <h2>Blog Post</h2>
        </div>
        <div className="formContiner">
          <form id="formSection" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="FormContent">
              <label htmlFor="image">
                <h4>Image URL:</h4>
              </label>
              <input
                type="text"
                id="image"
                className="inputBox"
                placeholder="Paste Image Url"
                onChange={handleInputChange}
                {...register("image", {
                pattern:{
                  value: /(https?:\/\/.*\.(?:png|jpg))/i,
                  message: "Invalid image format",
                },
                required:"Image url is required",
                })}
              />
              <p className='error'>{errors.image?.message}</p>

              <label htmlFor="title">
                <h4>Title:</h4>
              </label>
              <input
                type="text"
                id="title"
                className="inputBox"
                placeholder="Enter Title"
                onChange={handleInputChange}
                {...register("heading",{
                  required: {
                    value: true,
                    message: "Title is required",
                  }
                })}
              />
              <p className='error'>{errors.heading?.message}</p>

              <label htmlFor="subtitle">
                <h4>Sub Title:</h4>
              </label>
              <input
                type="text"
                id="subtitle"
                className="inputBox"
                placeholder="Enter Subtitle"
                onChange={handleInputChange}
                {...register("title",{
                  required: {
                    value: true,
                    message: "Subtitle is required",
                  }
                })}
              />
              <p className='error'>{errors.title?.message}</p>

              <label htmlFor="description">
                <h4>Description:</h4>
              </label>
              <textarea
                id="description"
                className="textarea"
                placeholder="Enter Description..."
                onChange={handleInputChange}
                {...register("description",{
                  required: {
                    value: true,
                    message: "Description is required",
                  }
                })}          
              ></textarea>
              <p className='error'>{errors.description?.message}</p>

            </div>
            <button type="submit" className="btn">
              Create Post
            </button>
          </form>
        </div>
      </div>
      <div className="PreviewForm">
        <div className="heading">
          <h2>Blog Preview</h2>
        </div>
        <FormPreview formData={formData} />
      </div>
    </div>
  );
};

export default AdminForm;
