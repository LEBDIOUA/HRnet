import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [
        { firstName: "John", lastName: "Doe", city: "Los Angeles", dateOfBirth: "10/05/1980", department: "Marketing", startDate: "11/05/2010", state: "California", street: "123 Elm St", zipCode: "90001" },
        { firstName: "Jane", lastName: "Smith", city: "New York", dateOfBirth: "15/08/1985", department: "Finance", startDate: "21/07/2012", state: "New York", street: "456 Oak St", zipCode: "10001" },
        { firstName: "Emily", lastName: "Johnson", city: "Chicago", dateOfBirth: "20/11/1990", department: "Engineering", startDate: "18/09/2015", state: "Illinois", street: "789 Pine St", zipCode: "60601" },
        { firstName: "Michael", lastName: "Williams", city: "Houston", dateOfBirth: "05/02/1975", department: "Sales", startDate: "12/01/2008", state: "Texas", street: "101 Maple St", zipCode: "77001" },
        { firstName: "Sarah", lastName: "Brown", city: "Phoenix", dateOfBirth: "14/07/1982", department: "Human Resources", startDate: "23/03/2011", state: "Arizona", street: "202 Birch St", zipCode: "85001" },
        { firstName: "David", lastName: "Jones", city: "Philadelphia", dateOfBirth: "12/12/1988", department: "IT", startDate: "04/05/2016", state: "Pennsylvania", street: "303 Cedar St", zipCode: "19019" },
        { firstName: "Laura", lastName: "Garcia", city: "San Antonio", dateOfBirth: "22/03/1992", department: "Marketing", startDate: "15/07/2017", state: "Texas", street: "404 Spruce St", zipCode: "78201" },
        { firstName: "Robert", lastName: "Martinez", city: "San Diego", dateOfBirth: "08/09/1978", department: "Finance", startDate: "09/11/2009", state: "California", street: "505 Redwood St", zipCode: "92101" },
        { firstName: "Mary", lastName: "Hernandez", city: "Dallas", dateOfBirth: "17/04/1986", department: "Engineering", startDate: "30/06/2013", state: "Texas", street: "606 Chestnut St", zipCode: "75201" },
        { firstName: "James", lastName: "Lopez", city: "San Jose", dateOfBirth: "25/10/1994", department: "Sales", startDate: "11/02/2018", state: "California", street: "707 Walnut St", zipCode: "95101" },
        { firstName: "Patricia", lastName: "Gonzalez", city: "Austin", dateOfBirth: "30/06/1980", department: "Human Resources", startDate: "05/09/2010", state: "Texas", street: "808 Willow St", zipCode: "73301" },
        { firstName: "Christopher", lastName: "Wilson", city: "Jacksonville", dateOfBirth: "19/01/1977", department: "IT", startDate: "24/08/2007", state: "Florida", street: "909 Aspen St", zipCode: "32099" },
        { firstName: "Barbara", lastName: "Anderson", city: "Fort Worth", dateOfBirth: "07/05/1983", department: "Marketing", startDate: "13/04/2011", state: "Texas", street: "100 Sycamore St", zipCode: "76101" },
        { firstName: "Daniel", lastName: "Thomas", city: "Columbus", dateOfBirth: "03/12/1989", department: "Finance", startDate: "29/10/2015", state: "Ohio", street: "111 Dogwood St", zipCode: "43085" },
        { firstName: "Susan", lastName: "Taylor", city: "Charlotte", dateOfBirth: "11/09/1991", department: "Engineering", startDate: "18/06/2016", state: "North Carolina", street: "222 Magnolia St", zipCode: "28201" },
        { firstName: "Joseph", lastName: "Moore", city: "San Francisco", dateOfBirth: "29/08/1981", department: "Sales", startDate: "10/12/2009", state: "California", street: "333 Elmwood St", zipCode: "94101" },
        { firstName: "Linda", lastName: "Jackson", city: "Indianapolis", dateOfBirth: "15/05/1984", department: "Human Resources", startDate: "21/11/2011", state: "Indiana", street: "444 Rose St", zipCode: "46201" },
        { firstName: "Paul", lastName: "White", city: "Seattle", dateOfBirth: "23/07/1990", department: "IT", startDate: "05/01/2014", state: "Washington", street: "555 Daisy St", zipCode: "98101" },
        { firstName: "Nancy", lastName: "Harris", city: "Denver", dateOfBirth: "31/10/1987", department: "Marketing", startDate: "28/02/2012", state: "Colorado", street: "666 Sunflower St", zipCode: "80201" },
        { firstName: "Mark", lastName: "Clark", city: "El Paso", dateOfBirth: "06/04/1979", department: "Finance", startDate: "12/09/2008", state: "Texas", street: "777 Tulip St", zipCode: "79901" },
        { firstName: "Paul", lastName: "White", city: "Seattle", dateOfBirth: "23/07/1990", department: "IT", startDate: "05/01/2014", state: "Washington", street: "555 Daisy St", zipCode: "98101" },
        { firstName: "Nancy", lastName: "Harris", city: "Denver", dateOfBirth: "31/10/1987", department: "Marketing", startDate: "28/02/2012", state: "Colorado", street: "666 Sunflower St", zipCode: "80201" },
        { firstName: "Mark", lastName: "Clark", city: "El Paso", dateOfBirth: "06/04/1979", department: "Finance", startDate: "12/09/2008", state: "Texas", street: "777 Tulip St", zipCode: "79901" }
    ],
    gridDetails: [{
        totalEntries: 0, // Le nombre de lignes en total
        pageSize: 10, // Le nombre de lignes à afficher
        totalRanges: 1, // Le nombre de plages en total
        currentRange: 1, // La plage actuelle
        startEntry: 1, // Le numero de la première ligne affichée dans la plage actuelle
        endEntry: 10   // Le numero de la dernière ligne affichée dans la plage actuelle
    }]
};

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        saveEmployee: (state, action) => {
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        },

        updateGridDetails: (state, action) => {
            return {
                ...state,
                gridDetails: action.payload
            }
        },

        resetState: () => {
            return {
                gridDetails: [{
                    totalEntries: 0,
                    pageSize: 10,
                    totalRanges: 1,
                    currentRange: 1,
                    startEntry: 1,
                    endEntry: 10
                }]
            }
        },

        clearState: () => {
            return initialState;
        },
    }
})

export const { saveEmployee, updateGridDetails, resetState, clearState } = employeesSlice.actions;

export default employeesSlice.reducer;