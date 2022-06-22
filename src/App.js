import React,{useState,useMemo}  from 'react';
import Input from './components/Input';
import Button from './components/Button';
import ListEmployees from './components/ListEmployee/ListEmployee';
import CheckBox from './components/CheckBox';
import './App.css';

const emp = [
  { id: 1, firstName: "John", "lastName": "Doe", email: "john.doe@domain.com", "department": "Finance", tel: "11111", isActive: true },
  { id: 2, firstName: "Jane", "lastName": "Doe", email: "jane.doe@domain.com", "department": "Finance", tel: "22222", isActive: true },
  { id: 3, firstName: "Bob" , "lastName": "Simpson", email: "bob.simpson@domain.com", "department": "IT", tel: "33333", isActive: true },
  { id: 4, firstName: "Max" , "lastName": "Mayfield", email: "max.mayfield@domain.com", "department": "IT", tel: "44444", isActive: true },
  { id: 5, firstName: "Tom" , "lastName": "Jones", email: "tom.jones@domain.com", "department": "IT", tel: "44444", isActive: false }
];

function App() {
  const [inputValue,setInputValue] = useState('');
  const [isEmployeeActive,setEmployeeActive]=useState(true);


  let employees = emp;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleClick=()=> {
    console.log(employees)
  }

  const handleCheckChange = () => {
    setEmployeeActive(!isEmployeeActive)
  }


 if(inputValue !== '') {
  employees= employees.filter((employee) => {
    return ((employee.firstName.toLowerCase().includes(inputValue.toLowerCase())) ||
          (employee.lastName.toLowerCase().includes(inputValue.toLowerCase()))
          )
    })
 }  

useMemo(() => {
  setEmployees()
},[isEmployeeActive])

function setEmployees(){
  return employees = employees.filter((employee) => {
    return employee.isActive === isEmployeeActive
 })
}

  return (
    <div className="App">
      <div className="AppContainer"> 
        <div className="SearchContainer">  
          <h1>Employee Search Application</h1>
          <Input
            inputValue={inputValue}
            handleChange={handleChange}
            placeholder="Search Employee"
            type="text"/>
        </div>
        <CheckBox 
          value={isEmployeeActive}
          onChange={handleCheckChange}
          label="Active Employee"
        />  
        <ListEmployees employees={employees}/>
        {!employees.length && <p className="ListError">No Records found</p>}
        <Button handleClick={handleClick}>Submit</Button>
      </div>  
  </div>
  )
}

export default App;
