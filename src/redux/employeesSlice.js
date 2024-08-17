import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    { id: 1, firstName: "John", lastName: "Doe", dateOfBirth: "10/05/1980", street: "123 Elm St", city: "Los Angeles", state: "California", zipCode: "90001", startDate: "11/05/2010", department: "Marketing" },
    { id: 2, firstName: "Jane", lastName: "Smith", dateOfBirth: "15/08/1985", street: "456 Oak St", city: "New York", state: "New York", zipCode: "10001", startDate: "21/07/2012", department: "Finance" },
    { id: 3, firstName: "Emily", lastName: "Johnson", dateOfBirth: "20/11/1990", street: "789 Pine St", city: "Chicago", state: "Illinois", zipCode: "60601", startDate: "18/09/2015", department: "Engineering" },
    { id: 4, firstName: "Michael", lastName: "Williams", dateOfBirth: "05/02/1975", street: "101 Maple St", city: "Houston", state: "Texas", zipCode: "77001", startDate: "12/01/2008", department: "Sales" },
    { id: 5, firstName: "Sarah", lastName: "Brown", dateOfBirth: "14/07/1982", street: "202 Birch St", city: "Phoenix", state: "Arizona", zipCode: "85001", startDate: "23/03/2011", department: "Human Resources" },
    { id: 6, firstName: "David", lastName: "Jones", dateOfBirth: "12/12/1988", street: "303 Cedar St", city: "Philadelphia", state: "Pennsylvania", zipCode: "19019", startDate: "04/05/2016", department: "IT" },
    { id: 7, firstName: "Laura", lastName: "Garcia", dateOfBirth: "22/03/1992", street: "404 Spruce St", city: "San Antonio", state: "Texas", zipCode: "78201", startDate: "15/07/2017", department: "Marketing" },
    { id: 8, firstName: "Robert", lastName: "Martinez", dateOfBirth: "08/09/1978", street: "505 Redwood St", city: "San Diego", state: "California", zipCode: "92101", startDate: "09/11/2009", department: "Finance" },
    { id: 9, firstName: "Mary", lastName: "Hernandez", dateOfBirth: "17/04/1986", street: "606 Chestnut St", city: "Dallas", state: "Texas", zipCode: "75201", startDate: "30/06/2013", department: "Engineering" },
    { id: 10, firstName: "James", lastName: "Lopez", dateOfBirth: "25/10/1994", street: "707 Walnut St", city: "San Jose", state: "California", zipCode: "95101", startDate: "11/02/2018", department: "Sales" },
    { id: 11, firstName: "Patricia", lastName: "Gonzalez", dateOfBirth: "30/06/1980", street: "808 Willow St", city: "Austin", state: "Texas", zipCode: "73301", startDate: "05/09/2010", department: "Human Resources" },
    { id: 12, firstName: "Christopher", lastName: "Wilson", dateOfBirth: "19/01/1977", street: "909 Aspen St", city: "Jacksonville", state: "Florida", zipCode: "32099", startDate: "24/08/2007", department: "IT" },
    { id: 13, firstName: "Barbara", lastName: "Anderson", dateOfBirth: "07/05/1983", street: "100 Sycamore St", city: "Fort Worth", state: "Texas", zipCode: "76101", startDate: "13/04/2011", department: "Marketing" },
    { id: 14, firstName: "Daniel", lastName: "Thomas", dateOfBirth: "03/12/1989", street: "111 Dogwood St", city: "Columbus", state: "Ohio", zipCode: "43085", startDate: "29/10/2015", department: "Finance" },
    { id: 15, firstName: "Susan", lastName: "Taylor", dateOfBirth: "11/09/1991", street: "222 Magnolia St", city: "Charlotte", state: "North Carolina", zipCode: "28201", startDate: "18/06/2016", department: "Engineering" },
    { id: 16, firstName: "Joseph", lastName: "Moore", dateOfBirth: "29/08/1981", street: "333 Elmwood St", city: "San Francisco", state: "California", zipCode: "94101", startDate: "10/12/2009", department: "Sales" },
    { id: 17, firstName: "Linda", lastName: "Jackson", dateOfBirth: "15/05/1984", street: "444 Rose St", city: "Indianapolis", state: "Indiana", zipCode: "46201", startDate: "21/11/2011", department: "Human Resources" },
    { id: 18, firstName: "Paul", lastName: "White", dateOfBirth: "23/07/1990", street: "555 Daisy St", city: "Seattle", state: "Washington", zipCode: "98101", startDate: "05/01/2014", department: "IT" },
    { id: 19, firstName: "Nancy", lastName: "Harris", dateOfBirth: "31/10/1987", street: "666 Sunflower St", city: "Denver", state: "Colorado", zipCode: "80201", startDate: "28/02/2012", department: "Marketing" },
    { id: 20, firstName: "Mark", lastName: "Clark", dateOfBirth: "06/04/1979", street: "777 Tulip St", city: "El Paso", state: "Texas", zipCode: "79901", startDate: "12/09/2008", department: "Finance" },
  ],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveEmployee: (state, action) => {
      // Trouver l'ID le plus élevé actuel
      const maxId = (state.employees.length > 0 ? Math.max(...state.employees.map((emp) => emp.id)) : 0) + 1;

      const employee = action.payload;
      employee.setId(maxId);
      return {
        ...state,
        employees: [...state.employees, employee],
      };
    },

    deleteEmployees: (state, action) => {
      return {
        ...state,
        employees: state.employees.filter((employee) => !action.payload.includes(employee.id)),
      };
    },

    clearState: () => {
      return initialState;
    },
  },
});

export const { saveEmployee, deleteEmployees, clearState } = employeesSlice.actions;

export default employeesSlice.reducer;
