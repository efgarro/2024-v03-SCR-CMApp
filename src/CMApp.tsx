import * as React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./layouts/MainPage";
import AboutPage from "./components/AboutPage";
import Company from "./components/Company";
import NotFound from "./components/NotFound";
import "./css/styles.css";
import sty from "./css/sty.module.css";

const CMApp = (/*{ name } : {name: string}*/) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" /* element={<Outlet />}*/>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="company" element={<Company />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    // <div>Remote</div>
    //   <h1 className={sty.h1class}>Hello {name}</h1>
    // </>
  );
};

export default CMApp;
