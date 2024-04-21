"use client"
import React, { useState } from "react";
export default function NewCarPage() {
  const [carData, setCarData] = useState({
    carName: "",
    carModel: "",
    year: "",
    manufacturer: "",
    pricePerDay: "",
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
          <label htmlFor="carname">Car Name</label>
          <input
            type="text"
            id="carname"
            name="carName"
            value={carData.carName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="carmodel">Car Model</label>
          <input
            type="text"
            id="carmodel"
            name="carModel"
            value={carData.carModel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            value={carData.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={carData.manufacturer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="priceperday">Price per day</label>
          <input
            type="number"
            id="priceperday"
            name="pricePerDay"
            value={carData.pricePerDay}
            onChange={handleChange}
          />
        </div>
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
