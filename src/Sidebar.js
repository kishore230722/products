import { useState } from "react";
import Category from "./categorie";
import Price from "./price";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {

  const [state,setState] = useState(false)
  const check = () => {
    setState(!state);
  };
  return (
    <>
      <section  className={state ? "sidebar-1" : "sidebar"}>
        <div className="logo-container">
         <h1 className="head"> Filters</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        
      </section>
      <button className="filter" onClick={check}>Filters</button>
    </>
  );
};

export default Sidebar;
