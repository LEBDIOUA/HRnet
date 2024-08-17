import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { states } from "../data/statesList";
import { departments } from "../data/departmentsList";
import { Modal } from "@lebdioua/react-modal-plugin";
import "@lebdioua/react-modal-plugin/dist/style.css";
import { CustomSelect } from "@lebdioua/react-select-plugin";
import "@lebdioua/react-select-plugin/dist/style.css";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../app/format";
import DatePickerInput from "../components/DatePickerInput";
import { saveEmployee as saveEmployeeAction} from "../redux/employeesSlice";
import Employee from "../data/employee";

function Accueil() {
  const mainRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const streetRef = useRef(null);
  const cityRef = useRef(null);
  const zipCodeRef = useRef(null);
  const modalRef = useRef(null);
  const errorDate = useRef(null);

  const [reset, setReset] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [errorDepartment, setErrorDepartment] = useState(false);
  const [errorStartDate, setErrorStartDate] = useState(false);
  const [errorBirthDate, setErrorBirthDate] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedState, setSelectedState] = useState("Select a state");
  const [selectedDepartment, setSelectedDepartment] = useState("Select a department");
  const [startDate, setStartDate] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

  const dispatch = useDispatch();
  // const id = useSelector(selectNewId);

  const handleInputChange = (ref) => {
    if (ref.current) {
      if (ref.current.value.length > 0 && ref.current.classList.contains("main-form-item-err")) {
        ref.current.classList.remove("main-form-item-err");
      } else if (ref.current.value.length === 0) {
        ref.current.classList.add("main-form-item-err");
      }
    }
  };

  const saveEmployee = () => {
    const isValid = handleCheckInputs();
    if (isValid) {
      // dispatch(generateIdAction());
      const employee = new Employee(firstNameRef.current ? firstNameRef.current.value : null, lastNameRef.current ? lastNameRef.current.value : null, birthDate ? formatDate(birthDate) : null, startDate ? formatDate(startDate) : null, streetRef.current ? streetRef.current.value : null, cityRef.current ? cityRef.current.value : null, selectedState ? selectedState : null, zipCodeRef.current ? zipCodeRef.current.value : null, selectedDepartment ? selectedDepartment : null);
      dispatch(saveEmployeeAction(employee));
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleCheckInputs = () => {
    let allValid = true;
    const elements = [firstNameRef, lastNameRef, birthDate, startDate, streetRef, cityRef, zipCodeRef];
    elements.forEach((element) => {
      if (element === startDate || element === birthDate) {
        if (!element) {
          if (element === birthDate) setErrorBirthDate(true);
          if (element === startDate) setErrorStartDate(true);
          allValid = false;
        } else if (startDate && birthDate) {
          if (!checkDate(birthDate, startDate)) {
            setErrorBirthDate(true);
            setErrorStartDate(true);
            errorDate.current.classList.remove("error-hide");
            allValid = false;
          }
        }
      } else if (element.current && (element.current.type === "text" || element.current.type === "number")) {
        if (!element.current.value) {
          element.current.classList.add("main-form-item-err");
          allValid = false;
        }
      }
    });
    if (!selectedState || selectedState === "Select a state") {
      setErrorState(true);
      allValid = false;
    }
    if (!selectedDepartment || selectedDepartment === "Select a department") {
      setErrorDepartment(true);
      allValid = false;
    }
    return allValid;
  };

  const cleanInputs = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    streetRef.current.value = "";
    cityRef.current.value = "";
    zipCodeRef.current.value = "";
    setReset(true);
    errorDate.current.classList.add("error-hide");
    setErrorState(false);
    setErrorDepartment(false);
    setErrorBirthDate(false);
    setErrorStartDate(false);
  };

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    if (selectedState && selectedState !== "Select a state") {
      setErrorState(false);
      console.log();
    }
    if (selectedDepartment && selectedDepartment !== "Select a department") setErrorDepartment(false);
    if (birthDate) {
      setErrorBirthDate(false);
      errorDate.current.classList.add("error-hide");
    }
    if (startDate) {
      setErrorStartDate(false);
      errorDate.current.classList.add("error-hide");
    }
  }, [selectedState, selectedDepartment, birthDate, startDate]);

  const closeModal = () => {
    setShowModal(false);
    cleanInputs();
  };

  const checkDate = (birthDate, startDate) => {
    let age;
    if ((birthDate, startDate)) {
      age = startDate.getFullYear() - birthDate.getFullYear();
      const monthDifference = startDate.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && startDate.getDate() < birthDate.getDate())) {
        age--;
      }
    }
    return age >= 18 ? true : false;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && showModal) {
      e.preventDefault();
    }
  };

  return (
    <>
      <main className="main" ref={mainRef}>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" className="main-form" onKeyDown={handleKeyDown}>
          <div className="main-form-perso">
            <div className="main-form-sg">
              <label htmlFor="first-name"> First Name </label>
              <input type="text" id="first-name" className="main-form-item" ref={firstNameRef} placeholder="First Name" onChange={() => handleInputChange(firstNameRef)} autoFocus tabIndex={1} />
            </div>
            <div className="main-form-sg">
              <label htmlFor="last-name"> First Name </label>
              <input type="text" id="last-name" className="main-form-item" ref={lastNameRef} placeholder="Last Name" onChange={() => handleInputChange(lastNameRef)} tabIndex={2} />
            </div>
            <div className="main-form-sg">
              <label htmlFor="date-of-birth"> Date of Birth </label>
              <DatePickerInput elementClassName="main-form-item" onSelect={setBirthDate} reset={reset} isWrong={errorBirthDate} tabIndex={3} id="birthDate" />
            </div>
            <div className="main-form-sg">
              <label htmlFor="start-date"> Start Date </label>
              <DatePickerInput elementClassName="main-form-item" onSelect={setStartDate} reset={reset} isWrong={errorStartDate} tabIndex={4} id="startDate" />
            </div>
          </div>

          <div className="error-hide error" ref={errorDate}>
            The person must be over 18 years old to start working{" "}
          </div>
          <fieldset className="main-form-address">
            <legend className="main-form-address-title">Address</legend>

            <div className="main-form-sg">
              <label htmlFor="street"> Street </label>
              <input type="text" id="street" className="main-form-item" ref={streetRef} placeholder="Street" onChange={() => handleInputChange(streetRef)} tabIndex={5} />
            </div>
            <div className="main-form-sg">
              <label htmlFor="city"> City </label>
              <input type="text" id="city" className="main-form-item" ref={cityRef} placeholder="City" onChange={() => handleInputChange(cityRef)} tabIndex={6} />
            </div>
            <div className="main-form-sg">
              <label htmlFor="state"> State </label>
              <CustomSelect id="state" data={states ?? null} defaultValue="Select a state" className="main-form-item" classNameErr="main-form-item-err" onSelect={setSelectedState} isError={errorState} reset={reset} tabIndex={7} />
            </div>
            <div className="main-form-sg">
              <label htmlFor="zip-code"> Zip Code </label>
              <input type="number" id="zip-code" className="main-form-item" ref={zipCodeRef} placeholder="Zip Code" onChange={() => handleInputChange(zipCodeRef)} tabIndex={8} />
            </div>
          </fieldset>
          <div className="main-form-department main-form-sg">
            <label htmlFor="department"> Department </label>
            <CustomSelect id="department" data={departments ?? null} defaultValue="Select a department" className="main-form-item" classNameErr="main-form-item-err" onSelect={setSelectedDepartment} isError={errorDepartment} reset={reset} tabIndex={9} />
          </div>
        </form>
        <button className="btn" onClick={saveEmployee} disabled={showModal}>
          Save
        </button>
      </main>
      {showModal && <Modal isOpen={showModal} onClose={closeModal} title="Confirmation" messageBody="Added successfully" actions={[{ label: "Close", actionFor: closeModal }]} modalRef={modalRef} />}
    </>
  );
}
export default Accueil;
