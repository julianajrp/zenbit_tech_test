import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import LeaveMessagePage from "./pages/LeaveMessagePage";
import LoginAdminPage from "./pages/LoginAdminPage";
import AdminPage from "./pages/AdminPage";
import GlobalStyle from "./styledComponents/global";
function App() {
  return (
    <>
      <ToastContainer
        position={"top-right"}
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LeaveMessagePage />} />
        <Route path="/login" element={<LoginAdminPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
