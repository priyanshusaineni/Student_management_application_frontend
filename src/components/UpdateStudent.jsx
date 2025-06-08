import React,{useEffect, useState} from 'react'
import { getStudent, updateStudent } from '../services/Studentservices';
import { useNavigate, useParams } from 'react-router-dom';



export default function UpdateStudent() {
  const [formData, setFormData] = useState({});
  const { id }=useParams()
  useEffect(()=>{
    try{
      const response= getStudent(id);
      response.then((res)=>{
        setFormData({...res.data[0]})
      })
    }
    catch(err){
      console.log("could not fetch data to update")
    }
  },[id])


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

  
    if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only letters and spaces';
    }
    if (!formData.age || isNaN(formData.age)) {
      newErrors.age = 'Age must be a number';
    }

    if (!formData.email.includes('@') || !formData.email.endsWith('.com')) {
      newErrors.email = 'Email must be valid and include "@" and ".com"';
    }

    if (!formData.phone || formData.phone.length !== 10 || isNaN(formData.phone)) {
      newErrors.phone = 'Phone number must be a 10-digit number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response= await updateStudent(id,formData);
        console.log('Form data is valid and submitted:', response.data);
        navigate('/students')
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Update Student Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Roll Number:</label>
          <input
            type="text"
            name="roll"
            disabled
            value={formData.roll!=null?formData.roll:""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.roll && <p className="text-red-500 text-sm">{errors.roll}</p>}
        </div>
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name!=null?formData.name:""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block font-semibold">Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age!=null?formData.age:""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        
        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email!=null?formData.email:""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block font-semibold">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone!=null?formData.phone:""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
