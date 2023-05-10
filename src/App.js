import logo from "./logo.svg";
import { Provider } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import store from "./store/store";
import Home from "./pages/home";
import AddNew from "./pages/add-new";

import { useDispatch, useSelector } from "react-redux";
import "devextreme/dist/css/dx.light.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="*" element={"ERRROR"} />
      </Routes>
    </Provider>
  );
}

export default App;
