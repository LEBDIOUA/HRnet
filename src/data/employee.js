class Employee {
  constructor(_firstName, _lastName, _dateOfBirth, _startDate, _street, _city, _state, _zipCode, _department) {
    this.id = null;
    this.firstName = _firstName ?? null;
    this.lastName = _lastName ?? null;
    this.dateOfBirth = _dateOfBirth ?? null;
    this.street = _street ?? null;
    this.city = _city ?? null;
    this.state = _state ?? null;
    this.zipCode = _zipCode ?? null;
    this.startDate = _startDate ?? null;
    this.department = _department ?? null;
  }

  setId(_id) {
    this.id = _id;
  }
}
export default Employee;
