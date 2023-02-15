import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AdminPage = () => {
  const { logOut, loading } = useContext(AuthContext);
  return <div>AdminPage</div>;
};

export default AdminPage;
