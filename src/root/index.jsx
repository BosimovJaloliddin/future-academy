import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  let token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to="/home" />} />
          {navbar?.map(({ id, path, element, isPrivate }) => {
            return (
              !isPrivate && <Route key={id} path={path} element={element} />
            );
          })}
          {navbar?.map(({ id, path, element, isPrivate }) => {
            return (
              isPrivate && (
                <Route
                  key={id}
                  path={path}
                  element={token ? element : <Navigate to="/login" />}
                />
              )
            );
          })}
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
