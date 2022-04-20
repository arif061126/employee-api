import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Footercomponent from './components/FooterComponent';
import Headercomponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';




function App() {
  return (

    <BrowserRouter>
      <Headercomponent/>
      <Routes>
        <Route exact path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
        <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
      </Routes>
      <Footercomponent/>
    </BrowserRouter>
  );
}

export default App;

