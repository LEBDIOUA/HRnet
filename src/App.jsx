import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import Header from "./components/Header";
import { PersistGate } from 'redux-persist/integration/react';
import { myStore, persistor } from './redux/myStore';
import { Provider } from "react-redux";
import EmployeesList from "./pages/EmployeesList";

function App() {
  return (
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees-list" element={<EmployeesList />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
    </Provider>
  );
}

export default App
