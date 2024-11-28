import React, { useState } from 'react';
import CircleImg from "../public/circle.png"; 
import Earth from "../public/earth.svg";   
import Logo from "../public/logo.svg"


function App() {

  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    place: '',
    employees: '',
    comment: '',
    image: CircleImg, 
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageUpload = (e) => {
    const img = e.target.files[0];
    const url = URL.createObjectURL(img);
    setFormData((prevData) => ({
      ...prevData,
      image: url,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.phoneNumber) {
      alert("hamma ma'lumotlarni to'ldir");
      return;
    }
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      alert('Telefon raqami toliq va togri bolishi kerak');
    }
    if (formData.companyName.trim().length < 3) {
      alert('Kompaniya nomi kamida 3 ta harfdan iborat bolishi kerak');
    }
    if (!formData.place.trim()) {
      alert('Yashash joyini kirit');
    }
    if (!formData.employees || formData.employees <= 0) {
      alert('Hodimlar soni musbat raqam bolishi kerak');
    }
 if (formData.comment.lenght < 3) {
  alert("izohni kirit")
 }
    setSubmitted(true);
  };
  return (
    <>
    <header className="header">
 <div className="container header-container">
 <div className="right"><img src={Logo} width={74} height={30}  alt="" /></div>
      <div className="center">
        <ul className="nav-list">
          <li className="nav-item">Vakansiyalar</li>
          <li className="nav-item">Kandidatlar</li>
          <li className="nav-item">Kompaniyalar</li>
          <li className="nav-item">Xizmatlar</li>
          <li className="nav-item">Ta'lim</li>
        </ul>
      </div>
      <div className="left">  
    <button className='boshlash'>Boshlash</button>
      </div>
 </div>
    </header>
      <div className="bg-white rounded-lg shadow-md p-[23px]">
        <div className="mb-5">
          <h1 className="font-bold mb-5 text-2xl">Kompaniya ma'lumotlari</h1>
          <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        </div>
        <form className="flex flex-col w-full gap-5" onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 mb-5">
            <img
              className="w-[84px] h-[84px] rounded-full object-cover"
              src={formData.image}
              alt="Company Logo"
            />
            <label className="text-sky-600 font-medium text-xl cursor-pointer hover:underline">
              Yuklash
              <input
                onChange={handleImageUpload}
                className="hidden"
                type="file"
                name="image"
                id="imageUpload"
              />
            </label>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Kompaniya nomi</span>
            </div>
            <input
              type="text"
              placeholder="Kompaniya nomi"
              name="companyName"
              className="input input-bordered w-full"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Telefon raqami</span>
            </div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="UZ +9989"
              className="input input-bordered w-full"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <div className="country-city">
            <select
              className="select select-accent w-full"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option disabled selected>
                Davlat
              </option>
              <option value="England">England</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="America">America</option>
            </select>

            <select
              className="select select-accent w-full"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option disabled selected>
                Shahar
              </option>
              <option value="Fergana">Fergana</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Yashash joyi</span>
            </div>
            <input
              type="text"
              name="place"
              placeholder="Joy"
              className="input input-bordered w-full"
              value={formData.place}
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Hodimlar soni</span>
            </div>
            <input
              type="number"
              name="employees"
              placeholder="Hodimlar soni"
              className="input input-bordered w-full"
              value={formData.employees}
              onChange={handleChange}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Izoh</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              name="comment"
              placeholder="Bio"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </label>

          <button className="btn btn-wide w-full">Submit</button>
        </form>
      </div>
      {submitted && (
        <div className="mt-10 bg-gray-100 p-5 rounded-lg shadow-md">
          <div className="flex gap-5 items-center">
            <img
              className="w-[84px] h-[84px] rounded-full object-cover"
              src={formData.image}
              alt="Uploaded Logo"
            />
            <div>
              <p><strong>Kompaniya nomi:</strong> {formData.companyName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Telefon raqami:</strong> {formData.phoneNumber}</p>
              <p><strong>Davlat:</strong> {formData.country}</p>
              <p><strong>Shahar:</strong> {formData.city}</p>
              <p><strong>Yashash joyi:</strong> {formData.place}</p>
              <p><strong>Hodimlar soni:</strong> {formData.employees}</p>
              <p><strong>Izoh:</strong> {formData.comment}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
