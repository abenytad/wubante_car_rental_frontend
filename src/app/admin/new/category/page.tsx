"use client";
import React, { useState } from "react";
export default function NewCarPage() {
  const [carData, setCarData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleImageChange = (e:any) => {
    const imageFile = e.target.files[0];
    setCarData({
      ...carData,
      image: imageFile,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with data:", carData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>New Car</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={carData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={carData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Additional file input for image */}
        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
