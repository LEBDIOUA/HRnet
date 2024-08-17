import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { Modal } from "@lebdioua/react-modal-plugin";
import "@lebdioua/react-modal-plugin/dist/style.css";
import { GridMain } from "@lebdioua/react-grid-plugin";
import "@lebdioua/react-grid-plugin/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployees as deleteEmployeesAction } from "../redux/employeesSlice";

function EmployeesList() {
  const employees = useSelector((state) => state.employees);
  const paginationPageSizeSelector = [10, 25, 50, 100];
  const [rowsSelected, setRowsSelected] = useState(null);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    setIsDelete(false);
  }, [employees]);

  const deleteEmployee = () => {
    if (rowsSelected && rowsSelected.length > 0) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmDelete = () => {
    const idsToDelete = rowsSelected.map((row) => row.id);
    dispatch(deleteEmployeesAction(idsToDelete));
    setIsDelete(true);
    closeModal();
  };

  const annuleDelete = () => {
    closeModal();
  };

  return (
    <>
      <main className="main employeeList">
        <GridMain data={employees} pageSizesArray={paginationPageSizeSelector} rowsSelected={setRowsSelected} isDelete={isDelete} searchEnabled = {true}/>
        {employees && employees.length > 0 && (
          <div className="operations">
            <button className="btn" onClick={deleteEmployee}>
              Delete
            </button>
          </div>
        )}
      </main>
      <Footer />
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          title="Confirmation"
          messageBody="Are you sure to applay delete ?"
          actions={[
            { label: "Yes", actionFor: confirmDelete },
            { label: "No", actionFor: annuleDelete },
          ]}
          modalRef={modalRef}
        />
      )}
    </>
  );
}
export default EmployeesList;
