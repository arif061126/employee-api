import axios from "axios";

const baseURL = "http://localhost:8181/api/v1";


class EmployeeService {
    getEmployeeList() {
        return axios.get(baseURL+'/employees');
    }

    addEmployee(employee) {
        return axios.post(baseURL+'/add-employee', employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(baseURL + '/employees/' + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(baseURL + '/employees/' + employeeId, employee);
    }

    deleteEmployeeById(employeeId) {
        return axios.delete(baseURL + '/employees/' + employeeId);
    }
}

export default new EmployeeService();


