import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {

    const [employeeFirstName, setfirstName] = useState('');
    const [employeeLastName, setlastName] = useState('');
    const [employeeEmail, setemail] = useState('');


    const {id} = useParams();

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



  return (
    <div className="container">
        <div className="card mt-2">
            <div className="card-header text-center">
            <h2>View Employee of ID: <span>{id}</span></h2>
            </div>
            <div className="card-body">
            <h5>First Name: <span>{employeeFirstName}</span></h5>
            <hr></hr>
            <h5>Last Name: <span>{employeeLastName}</span></h5>
            <hr></hr>
            <h5>E-mail Address: <span>{employeeEmail}</span></h5>
            </div>
            <div className="card-footer text-center">
            <Link className="btn btn-info" to="/employees">Back to List</Link>
            </div>
        </div>
    </div>

  )
}

export default ViewEmployeeComponent;