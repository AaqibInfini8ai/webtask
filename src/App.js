// import './App.css';
// import Login from "./Components/Auth/Login";
// function App() {
//   return (
//     <div>
//    <Login/>
//     </div>
//   );
// }

// export default App;
import Login from "./Components/Auth/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import Layout from "../src/Components/Layout/index";
import { ROUTES } from "../src/Components/Routes/RoutesPath";
import "./App.css";
import routes from "../src/Components/Routes/Routes";
import { useState } from "react";

function App() {
  const isLoggedIn = true
  // const userCredentials = useSelector((state) => state.lock);
  // const [state, setstate] = useState({
  //   portalOpen: false,
  // });
  // let openPortal = () => {
  //   setstate({
  //     ...state,
  //     portalOpen: true,
  //   });
  // };
  // let closePortal = () => {
  //   setstate({
  //     ...state,
  //     portalOpen: false,
  //   });
  // };
  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
        <Route path={ROUTES.login} exact element={<Login />} />
          <Route path="/" element={<Layout/>}>
          
            {routes &&
              routes.map((route, k) => {
                return route.component ? (
                  <Route
                    key={k}
                   
                    path={route.path}
                    exact
                    name={route.name}
                    element={<route.component />}
                  />
                ) : null;
              })}
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        {/* {isLoggedIn && <IdleComponent openPortal={openPortal} />}
        {state.portalOpen ? (
          <Lock>
            <LockScreen
              closePortal={closePortal}
              userCredentials={userCredentials}
            />
          </Lock>
        ) : null} */}
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.login} exact element={<Login />} />
          <Route path="*" element={<Navigate to={ROUTES.login} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;