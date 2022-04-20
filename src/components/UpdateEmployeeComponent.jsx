import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';



const UpdateEmployeeComponent = () => {
    const [employeeFirstName, setfirstName] = useState('');
    const [employeeLastName, setlastName] = useState('');
    const [employeeEmail, setemail] = useState('');

    const employee = {
        employeeFirstName,
        employeeLastName,
        employeeEmail
    }

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(
            (res) => {
                setfirstName(res.data.employeeFirstName);
                setlastName(res.data.employeeLastName);
                setemail(res.data.employeeEmail);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, [id]);

    

    const updateEmployee = (e) => {

        e.preventDefault(); //prevent to refresh the page

        if (employeeFirstName === '' ||
            employeeLastName === '' ||
            employeeEmail === '') {

            console.log("you can not left these empty!");
            return;

        }

        EmployeeService.updateEmployee(employee, id).then(
            (res) => {
                console.log(res.data);
                navigate('/employees');
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

  return (
    <div className="container">
        <div className="card mt-2">
            <div className="card-header mt-2 text-center">
            <h2>Update employee Information</h2>
            </div>

            <div className="container">
            <form action="post" >
                <div className="card-content mt-2">

                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input 
                    type="text" 
                    name="employeeFirstName"  
                    className="form-control"
                    id="exampleInputText" 
                    aria-describedby="emailHelp" 
                    value={employeeFirstName}
                    onChange={(e)=> setfirstName(e.target.value)}
                    required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Last
                    Name</label>
                    <input 
                    type="text" 
                    name="employeeLastName" 
                    className="form-control" 
                    id="exampleInputText"
                    aria-describedby="emailHelp" 
                    value={employeeLastName}
                    onChange={(e)=> setlastName(e.target.value)}
                    required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email
                    address</label>
                    <input 
                    type="email" 
                    name="employeeEmail" 
                    className="form-control" 
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    value={employeeEmail}
                    onChange={(e)=> setemail(e.target.value)}
                    required />
                </div>

                </div>
                <div className="card-footer mt-2 text-center">
                <button type="submit" className="btn btn-success" onClick={(e)=> updateEmployee(e)}>Update</button>&nbsp;&nbsp;&nbsp;
                <button type="reset" className="btn btn-warning">Reset</button>
                </div>
            </form>
            </div>

        </div>
    </div>
  )
}

export default UpdateEmployeeComponent