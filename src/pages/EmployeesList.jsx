import Footer from "../components/Footer";
import { GridMain } from "@lebdioua/react-grid-plugin";
import "@lebdioua/react-grid-plugin/dist/style.css";
import { useSelector } from "react-redux";

function EmployeesList() {
  const employees = useSelector(state => state.employees);
  const paginationPageSizeSelector = [10, 25, 50, 100];

  return (
    <>
      <main className="main employeeList">
        <GridMain data={employees} pageSizesArray={paginationPageSizeSelector} />
      </main>
      <Footer />
    </>
  );
}
export default EmployeesList;
