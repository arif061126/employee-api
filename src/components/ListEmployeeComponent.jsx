/*import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

className=ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            employees:[]
        }
    }
    
    componentDidMount() {
        EmployeeService.getEmployeeList().then(
            (res) => {
                this.setState({employees:res.data})
            }
        )
    }


    render() {
        return (
            <div className='container'>
                <h2 className='text-center'>Employee List</h2>
                
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First className</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.employeeId}>
                                        <th scope="row">{employee.employeeId}</th>
                                        <td>{employee.employeeFirstName}</td>
                                        <td>{employee.employeeLastName}</td>
                                        <td>{employee.employeeEmail}</td>
                                        <td></td>
                                    </tr>
                            )
                        }
                    </tbody>
                 </table>     

            </div>
        );
    }
}

export default ListEmployeeComponent;*/

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    const getAllEmployees = () => {
        EmployeeService.getEmployeeList().then(
            (res) => {
                setEmployees(res.data);
                console.log(res.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getAllEmployees();
    }, []);

    const deleteEmployee = (employeeId) => {
        
        EmployeeService.deleteEmployeeById(employeeId).then(
            (res) => {
                console.log(res);
                getAllEmployees();              
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }


    return (
        <div className='container'>
        <a className='btn btn-outline-info btn-lg mt-2' href='/add-employee'>Add Employee</a>
        <h2 className='text-center'>Employee List</h2>
        
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">First className</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                            <tr key={employee.employeeId}>
                                <th scope="row">{employee.employeeId}</th>
                                <td>{employee.employeeFirstName}</td>
                                <td>{employee.employeeLastName}</td>
                                <td>{employee.employeeEmail}</td>
                                <td>
                                    {/* <button className="btn btn-primary" onClick={()=>navigate(`/view-employee/${employee.employeeId}`)} >
                                        View
                                    </button>&nbsp; */}

                                    <Link className="btn btn-primary" to={`/view-employee/${employee.employeeId}`} >
                                        View
                                    </Link>&nbsp;

                                    <Link className="btn btn-info" to={`/update-employee/${employee.employeeId}`} >
                                        Update
                                    </Link>&nbsp;
                                    <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.employeeId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>     

    </div>
  )
}

export default ListEmployeeComponent;
