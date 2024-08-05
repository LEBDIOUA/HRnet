class Employees {

    static getEmployeesInRange(list, start, end) {
        return list.slice(start - 1, end);
    }

    static sortByFirstName(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.firstName.localeCompare(b.firstName)
            : b.firstName.localeCompare(a.firstName));
    }

    static sortByLastName(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.lastName.localeCompare(b.lastName)
            : b.lastName.localeCompare(a.lastName));
    }

    static sortByStartDate(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.startDate.localeCompare(b.startDate)
            : b.startDate.localeCompare(a.startDate));
    }

    static sortByDepartment(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.department.localeCompare(b.department)
            : b.department.localeCompare(a.department));
    }

    static sortByDateOfBirth(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.dateOfBirth.localeCompare(b.dateOfBirth)
            : b.dateOfBirth.localeCompare(a.dateOfBirth));
    }

    static sortByStreet(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.street.localeCompare(b.street)
            : b.street.localeCompare(a.street));
    }

    static sortByCity(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.city.localeCompare(b.city)
            : b.city.localeCompare(a.city));
    }

    static sortByState(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.state.localeCompare(b.state)
            : b.state.localeCompare(a.state));
    }

    static sortByZipCode(list, type) {
        return list.sort((a, b) => type === 'ascending'
            ? a.zipCode.localeCompare(b.zipCode)
            : b.zipCode.localeCompare(a.zipCode));
    }

    static searchEmployees(list, keyword) {
        const result = list.map((employee) => {
            if (Object.values(employee).indexOf(keyword) > -1) {
                return employee;
            }
        })
        return result;
    }
}
export default Employees