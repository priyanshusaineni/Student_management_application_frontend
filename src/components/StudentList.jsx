import React, { useEffect, useState } from 'react'
import { getAllStudents,deleteStudent } from '../services/Studentservices';
import {useNavigate} from 'react-router-dom'
export default function StudentList() {
    const [list,setList]=useState([]);
    const navigate= useNavigate()
    useEffect( ()=>{
        getAllStudents().then((response) =>{ 
            setList(response.data)
        })
      .catch(err => console.log(err))
    },[])

    function handleDelete(id){
        deleteStudent(id).catch((err)=>console.log(err));
        setList((list)=>list.filter(st=>st.roll!==id))
    }
    
    function handleUpdate(id){
        navigate(`/update-student/${id}`);
    }
    
    return (
        <div className=' p-7 '>
        <p className='flex justify-center text-3xl '>Students List</p>
        <div className='flex justify-center pt-5'>
        <table className= 'table-fixed border-black border-2'>
            <thead>
                <tr >
                    <td className='border-black p-2 border-collapse border-2'>Id</td>
                    <td className='border-black p-2 border-collapse border-2'>Name</td>
                    <td className='border-black p-2 border-collapse border-2'>Age</td>
                    <td className='border-black p-2 border-collapse border-2'>Branch</td>
                    <td className='border-black p-2 border-collapse border-2'>Year</td>
                    <td className='border-black p-2 border-collapse border-2'>Email</td>
                    <td className='border-black p-2 border-collapse border-2'>Phone</td>
                    <td className='border-black p-2 border-collapse border-2'>Actions</td>
                </tr>
            </thead>
            <tbody>
                
                { list.length!=0 ?
                    list.map((student,index)=>{
                    return (
                        <tr key={index}>
                        <td className='border-black p-2 border-collapse border-2'>{student.roll}</td>
                        <td className='border-black p-2 border-collapse border-2'>{student.name}</td>
                        <td className='border-black p-2 border-collapse border-2'>{student.age}</td>
                        <td className='border-black p-2 border-collapse border-2'>{student.branch}</td>
                        <td className='border-black p-2 border-collapse border-2'>{student.year}</td>
                        <td className='border-black p-2 border-collapse border-2'>{student.email}</td>
                        <td className='border-black p-2 border-collapse border-2'>{student.phone}</td>
                        <td className='border-black p-2 flex-auto border-collapse border-2  justify-between '>
                            <button className='border bg-green-500 rounded p-1' onClick={()=>handleUpdate(student.roll)}>Update</button>
                            <button className='bg-red-600 text-red-50 rounded p-1' onClick={()=>handleDelete(student.roll)} >Delete</button>
                        </td>
                        </tr>
                    );}
                    ) : (
                        <tr>
                            <td colSpan="8" style={{ textAlign: 'center' }}>
                                No students available
                            </td>
                        </tr>
                    )

                }
            </tbody>
        </table>
        </div>
    </div>
  )
}
