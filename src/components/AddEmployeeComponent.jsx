/*import React, { Component } from 'react';

class Addemployeecomponent extends Component {
    render() {
        return (
                
            <div className="container">
                <div className="card mt-2">
                    <div className="card-header mt-2 text-center">
                    <h2>Enter employee Information</h2>
                    </div>

                    <div className="container">
                    <form action="post" >
                        <div className="card-body mt-2">

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">First Name</label>
                            <input type="text" name="employeeFirstName"  className="form-control"
                            id="exampleInputText" aria-describedby="emailHelp" required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Last
                            Name</label>
                            <input type="text" name="employeeLastName" className="form-control" id="exampleInputText"
                            aria-describedby="emailHelp" required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email
                            address</label>
                            <input type="email" name="employeeEmail" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" required />
                        </div>

                        </div>
                        <div className="card-footer mt-2 text-center">
                        <button type="submit" className="btn btn-success">Save</button>&nbsp;&nbsp;&nbsp;
                        <button type="reset" className="btn btn-warning">Reset</button>
                        </div>
                    </form>

                    <div className="container text-center mt-3 mb-3 d-grid gap-2">
                        <button className="btn btn-outline-success" type="button" >Back to Home</button>
                    </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Addemployeecomponent;*/

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {

    const [employeeFirstName, setfirstName] = useState('');
    const [employeeLastName, setlastName] = useState('');
    const [employeeEmail, setemail] = useState('');

    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault(); //prevent to refresh the page

        const employee = {
            employeeFirstName,
            employeeLastName,
            employeeEmail
        }

        if (employeeFirstName === '' ||
            employeeLastName === '' ||
            employeeEmail === '') {

            console.log("you can not left these empty!");
            return;

        }

        console.log(employee);

        EmployeeService.addEmployee(employee).then(
            (res) => {
                
                console.log(res.data);
                navigate('/employees');
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );

    }
    

  return (
    <div className="container">
        <div className="card mt-2">
            <div className="card-header mt-2 text-center">
            <h2>Enter employee Information</h2>
            </div>

            <div className="container">
            <form action="post" >
                <div className="card-body mt-2">

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
                <button type="submit" className="btn btn-success" onClick={(e)=> saveEmployee(e)} >Save</button>&nbsp;&nbsp;&nbsp;
                <button type="reset" className="btn btn-warning">Reset</button>
                </div>
            </form>

            <div className="container text-center mt-3 mb-3 d-grid gap-2">
                <Link className="btn btn-outline-success" type="button" to="/" >Back to Home</Link>
            </div>

            </div>

        </div>
    </div>
  )
}

export default AddEmployeeComponent
