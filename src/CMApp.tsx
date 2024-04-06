import * as React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import AboutPage from "./components/AboutPage";
import Company from "./components/Company";
import NotFound from "./components/NotFound";
import "./css/styles.css";
import sty from "./css/sty.module.css";
import RegisterPlace from "./components/register/RegisterPlace";

const CMApp = (/*{ name } : {name: string}*/) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<RegisterPlace />} />
          <Route path="register/places" element={<RegisterPlace />} />
          <Route
            path="register/articles"
            element={<div>register/articles</div>}
          />
          <Route path="manage/places" element={<div>manage/places</div>} />
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
