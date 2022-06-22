import React from 'react';
import './ListEmployee.css';

const ListEmployees = ({employees})=> {

    return (
        <div className="ListWrapper">
            {
                employees.map((employee) => {
                    return <div key={employee.id} className="List" data-testid="employees">
                                <div className="ListName"> 
                                   {`${employee.firstName} ${employee.lastName}`}
                                </div>
                                <div className="ListDetails">
                                    {employee.email}
                                    <span>{employee.department}</span>
                                </div>
                            </div>
                })
            }
        </div>
    )
}

export default ListEmployees;