import * as React from 'react';
import "./css/styles.css"
import sty from "./css/sty.module.css";

const CMApp = ({ name } : {name: string}) => {
  return (
    <>
    <div>Remote</div>
      <h1 className={sty.h1class}>Hello {name}</h1>
    </>
  );
};

export default CMApp;
